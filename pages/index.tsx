import Link from "next/link";
import {Search} from "../components/search";
import {BookPreview} from "../components/book-preview";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import fire from "../firebase-config";
import {BookDTO} from "../types";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem 5rem"
    },
}));

interface BookProp extends Omit<BookDTO, "description"> {
    id: string;
}

interface HomeProps  {
    books: BookProp[],
}

export default function Home({books}: HomeProps) {
    const classes = useStyles();
  return (
    <>
        <Search/>
        <Grid container spacing={3} className={classes.root}>
            {books.map((book) => {
                return (
                    <Grid item xs={3} key={book.id}>
                        <BookPreview name={book.name} author={book.author} id={book.id} coverSrc={book.cover}/>
                    </Grid>
                );
            })}
        </Grid>
    </>
  )
}

export async function getServerSideProps(context) {
    let books = [];
    const querySnap = await fire.firestore()
        .collection("book")
        .get();
    books = querySnap.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            });
    return {
        props: {
            books
        }, // will be passed to the page component as props
    }
}
