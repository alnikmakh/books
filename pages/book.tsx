import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import Image from 'next/image'
import {makeStyles} from "@material-ui/styles";
import {DoubleSlider} from "../components/double-slider";

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
}));

const Book = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={4} >
                    <Card>
                        <CardContent>
                            Book Name
                        </CardContent>
                        <div className={classes.imageWrapper}>
                            <Image src={"/test-book.jpeg"} sizes={"100%"} layout={"fill"} objectFit={"contain"}/>
                        </div>
                        <CardContent>
                            Author: Benjamin Button
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <form noValidate autoComplete={"off"}>
                        <Grid container>
                            <Grid item xs={12} className={classes.paddingBottom}>
                                <DoubleSlider titleFirst={"You pay"}
                                              titleSecond={"Author earn"}
                                              max={100}
                                              min={30}
                                              percentage={10}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    type={"submit"}
                                >
                                    SUBSCRIBE
                                </Button>
                            </Grid>
                        </Grid>


                    </form>
                </Grid>
            </Grid>
        </>
    );
}

export default Book;