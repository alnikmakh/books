import {Theme, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";
import {useRouter} from "next/router";

export const Layout = ({children}) => {
    const router = useRouter();
    return (
        <>
            <Toolbar>
                <Typography
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                >
                    {router.pathname === "/" ? "Books" : <Link href={"/"}>Books</Link>}
                </Typography>
            </Toolbar>
            {children}
        </>
    );
}