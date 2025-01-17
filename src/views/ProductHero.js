import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const backgroundImage = "images/opener.jpg";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h7: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Mornings
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h7}
      >
        Have a unique coffee time
      </Typography>

      <Link to="/quiz">
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          className={classes.button}
          component="a"
          href="/quiz"
        >
          Get your coffee match
        </Button>
      </Link>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
