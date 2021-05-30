import {Theme, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";
import {useRouter} from "next/router";

export const Layout = ({children}) => {
    const router = useRouter();
    console.log(router.pathname)
    return (
        <>
            <Toolbar>
                <Typography
                    variant="h5"
                    color="inherit"
                    align="center"
                >
                    {router.pathname === "/" ? "Books" : <Link href={"/"}><a>Books</a></Link>}
                </Typography>
            </Toolbar>
            {children}
        </>
    );
}