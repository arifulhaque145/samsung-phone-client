import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { LinkButton } from "../../../styles";

function Product({ data }) {
  const { _id, name, price, img } = data;

  return (
    <Card sx={{ width: 300, m: 2, textAlign: "center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          sx={{py: 2}}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            TK. {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <LinkButton to={`/purchase/${_id}`}>
          <Button size="small" color="primary">
            order
          </Button>
        </LinkButton>
      </CardActions>
    </Card>
  );
}

export default Product;
