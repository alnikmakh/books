import {Container, Grid, IconButton, InputBase, Paper} from "@material-ui/core";
import {SearchOutlined} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

type SearchProps = {
    parentsSetState?: () => void
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "30rem",
        margin: "0 auto"
    },
    input: {
        marginLeft: "1rem",
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

export const Search = ({parentsSetState}: SearchProps) => {
    const classes = useStyles();
    return (
        <Container>
            <Paper className={classes.paper}>
                <InputBase className={classes.input}/>
                <IconButton className={classes.iconButton}>
                    <SearchOutlined/>
                </IconButton>
            </Paper>
        </Container>
    );
}