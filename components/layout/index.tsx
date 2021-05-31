import {AppBar, Container, Theme, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";
import {useRouter} from "next/router";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "1280px",
        paddingTop: "5rem",
    },
}));

export const Layout = ({children}) => {
    const router = useRouter();
    const classes = useStyles();

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography
                        variant="h5"
                        color="inherit"
                        align="center"
                    >
                        {router.pathname === "/" ? "Books" : <Link href={"/"}><a>Books</a></Link>}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.root}>
                {children}
            </Container>

        </>
    );
}