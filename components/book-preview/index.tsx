import {Card, CardActions, CardContent, CardMedia, IconButton, Paper} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";

export const BookPreview = () => {
    return (
        <Card>
            <CardContent>
                Book's name
            </CardContent>
            <CardMedia/>
            <CardActions>
                <IconButton>
                    <ShoppingCartOutlined/>
                </IconButton>
            </CardActions>
        </Card>
    );
}