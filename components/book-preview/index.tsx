import {Card, CardActions, CardContent, CardMedia, IconButton, Paper} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";
import Image from "next/image";
import {makeStyles} from "@material-ui/styles";
import Link from "next/link";
import {BookDTO} from "../../types";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem"
    },
    imageWrapper: {
        position: "relative",
        height: "10rem",
    },
    paddingBottom: {
        paddingBottom: "1rem",
    },
}));

interface BookPreviewProps extends Pick<BookDTO, "name" | "author"> {
    id: string;
    coverSrc: string;
}


export const BookPreview = ({name, author, id, coverSrc}: BookPreviewProps) => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                {name}
            </CardContent>
            {coverSrc &&
            <div className={classes.imageWrapper}>
                <Image src={coverSrc} sizes={"100%"} layout={"fill"} objectFit={"contain"}/>
            </div>
            }
            <CardContent>
                {author}
            </CardContent>
            <CardActions>
                <Link href={`/book/${id}`}>
                    <IconButton>
                        <ShoppingCartOutlined/>
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    );
}