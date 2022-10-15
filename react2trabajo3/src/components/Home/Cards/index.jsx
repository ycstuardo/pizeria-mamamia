import { Grid } from "@mui/material";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { DataContext } from "../../../context/provider";
import CardPizza from "../../utils/Card";

const Cards = () => {
  const { pizzas } = useContext(DataContext);
  console.log("pizzas2: ", pizzas);

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pizzas.map((pizza, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardPizza value={pizza} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
