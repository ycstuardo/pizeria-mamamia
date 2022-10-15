import { Grid, List } from "@mui/material";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { DataContext } from "../../context/provider";
import CardPizza from "../utils/Card";
import ListUnitPizza from "./ListUnitPizza";

const Cart = () => {
  const { cart } = useContext(DataContext);
  console.log("cart2: ", cart);

  return (
    <Container>
      {cart.map((pizza, index) => (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListUnitPizza value={pizza} />
        </List>
      ))}

      <div>
        <h1>
          Total:{" "}
          {cart.reduce(
            (previousValue, currentValue) => previousValue + currentValue.price,
            0
          )}
        </h1>
      </div>
    </Container>
  );
};

export default Cart;
