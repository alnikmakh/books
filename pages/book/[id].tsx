import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import Image from 'next/image'
import {makeStyles} from "@material-ui/styles";
import {DoubleSlider} from "../../components/double-slider";
import fire from "../../firebase-config";
import clsx from "clsx";
import {BookDTO} from "../../types";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem"
    },
    imageWrapper: {
        position: "relative",
        height: "30rem",
    },
    paddingBottom: {
        paddingBottom: "1rem",
    },
    paddingTop: {
        paddingTop: "2rem",
    }
}));

type BookProps = {
    book: BookDTO,
}

const Book = ({book}: BookProps) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={4} >
                    <Card>
                        <CardContent>
                            {book.name && book.name}
                        </CardContent>
                        {book.cover &&
                        <div className={classes.imageWrapper}>
                            <Image src={book.cover} sizes={"100%"} layout={"fill"} objectFit={"contain"}/>
                        </div>
                        }
                        <CardContent>
                            {book.author && book.author}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <form noValidate autoComplete={"off"}>
                        <Grid container>
                            <Grid item xs={12} className={classes.paddingBottom}>
                                <DoubleSlider titleFirst={"You pay"} titleSecond={"Author earn"}
                                              max={100} min={30}
                                              percentage={10}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained" size="large"
                                    color="primary" type={"submit"}
                                >
                                    SUBSCRIBE
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Typography variant={"h5"} className={clsx(classes.paddingBottom, classes.paddingTop)}>
                        Description:
                    </Typography>
                    <Typography>
                        {book.description && book.description}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export async function getServerSideProps({query}) {
    const book = await fire.firestore()
        .collection("book")
        .doc(query.id)
        .get();
    return {
        props: {
            book: book.data()
        }, // will be passed to the page component as props
    }
}

export default Book;