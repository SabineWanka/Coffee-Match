import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(14)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 250,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  }
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          How it works
        </Typography>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src="images/choice.jpg"
                  alt="coffee"
                  className={classes.image}
                />
                <Typography variant="h8" align="center">
                  Find the perfect coffee based on your personal wishes with our
                  personal coffee match finder
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src="images/coffeebag.jpg"
                  alt="step2"
                  className={classes.image}
                />
                <Typography variant="h8" align="center">
                  After you found your perfect match you can easily buy the
                  coffee here
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src="images/step3.jpg"
                  alt="step3"
                  className={classes.image}
                />
                <Typography variant="h8" align="center">
                  {"Enjoy the coffee. Experience something new. Get suprised. "}
                  {"Your coffee time will no longer be alike."}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Link to="/quiz">
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
            component="a"
            href="/quiz"
          >
            Get the perfect coffee match
          </Button>
        </Link>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHowItWorks);
