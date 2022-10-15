import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "react-bootstrap";
import { DataContext } from "../../../context/provider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function CardPizza({ value }) {
  const [expanded, setExpanded] = React.useState(false);
  const { cart, setCart } = React.useContext(DataContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const haddlerSendNewProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {value.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={capitalize(value.name)}
      />
      <CardMedia
        component="img"
        height="194"
        image={value.img}
        alt={value.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h4>$ {value.price}</h4>
          <h5>Ingredientes:</h5>
          <br />
          {value.ingredients.map((ingredient) => (
            <>
              - {capitalize(ingredient)}
              <br />
            </>
          ))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Button onClick={() => haddlerSendNewProduct(value)}>
          {" "}
          Agregar al carrito{" "}
        </Button>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{value.desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
