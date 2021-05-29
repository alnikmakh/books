import Link from "next/link";
import {Search} from "../components/search";
import {BookPreview} from "../components/book-preview";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem 5rem"
    },
}));

export default function Home() {
    const classes = useStyles();
  return (
    <>
        <Search/>
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <BookPreview/>
            </Grid>
            <Grid item xs={3}>
                <BookPreview/>
            </Grid>
            <Grid item xs={3}>
                <BookPreview/>
            </Grid>
        </Grid>
    </>
  )
}
