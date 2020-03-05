import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Card as NiceCard } from "react-rainbow-components";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  media: {
    height: 200
  },

  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },

  opener: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    //backgroundImage: "url(images/opener.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 1000
  },

  closer: {
    height: 400
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  hidden: {
    opacity: 0.5
  },

  button: {
    marginTop: theme.spacing(8)
  }
}));

const marks = [
  {
    value: 0,
    label: "0 €"
  },
  {
    value: 30,
    label: "30 €"
  },
  {
    value: 100,
    label: "100€"
  }
];

const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0"
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus,&:hover,&$active": {
      boxShadow: "#ccc 0px 2px 3px 1px"
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 3
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3
  }
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function CenteredGrid() {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState([]);

  const nextStep = (answer, image) => {
    setCurrentStep(currentStep + 1);
    setAnswers([...answers, { answer, image }]);
  };

  const previousStep = (answer, image) => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className={classes.root}>
      <h1>
        <center>Coffee Match</center>
      </h1>

      <div style={{ display: "flex" }}>
        {![2, 7, 8].includes(currentStep) &&
          answers.map(a => (
            <NiceCard label={a.answer}>
              <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                <h5 className="rainbow-p-top_large rainbow-font-size-heading_small">
                  <center>{a.answer}</center>
                </h5>
              </div>
            </NiceCard>
          ))}
      </div>

      {currentStep === 1 ? (
        <Grid
          container
          spacing={3}
          className={currentStep > 1 ? classes.hidden : ""}
        >
          <Grid item xs={12} onClick={() => nextStep()}>
            <Grid
              className={classes.opener}
              style={{ backgroundImage: `url("images/opener.jpg")` }}
            >
              <Typography variant="h5" color="inherit" paragraph></Typography>
              <Button
                color="secondary"
                size="large"
                variant="contained"
                className={classes.button}
                component="a"
                href="/quiz"
              >
                Find the perfect coffee
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 2 ? (
        <Grid
          container
          spacing={3}
          className={currentStep > 2 ? classes.hidden : ""}
        >
          <Grid item xs={12} xm={4}>
            <Card
              className={classes.root}
              onClick={() => nextStep("fruity", "images/fruits.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/fruits.jpg"
                  title="fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Fruity</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} xm={4}>
            <Card
              className={classes.root}
              onClick={() => nextStep("chocolaty and nutty", "images/choc.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/choc.jpg"
                  title="chocolate"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Chocolaty and nutty</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} xm={4}>
            <Card
              className={classes.root}
              onClick={() => nextStep("spicy", "images/spices.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/spices.jpg"
                  title="spices"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Spicy</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 3 ? (
        <Grid container spacing={3}>
          <Grid xs={12} item>
            <Card
              className={classes.root}
              onClick={() => nextStep("Brazil", "images/brasil.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/brasil.jpg"
                  title="Brazil"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Brazil</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("Ethiopia", "images/ethiopia.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/ethiopia.jpg"
                  title="Ethiopia"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Ethiopia</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("Colombia", "images/colombia.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/colombia.jpg"
                  title="Colombia"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Colombia</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("Costa Rica", "images/costarica.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/costarica.jpg"
                  title="Costa Rica"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Costa Rica</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("Kenya", "images/kenya.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/kenya.jpg"
                  title="Kenya"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Kenya</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("Indonesia", "images/indonesia.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/indonesia.jpg"
                  title="Indonesia"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Panama</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 4 ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("washed", "images/washed.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/washed.jpg"
                  title="washed"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Washed</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("natural", "images/natural.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/natural.jpg"
                  title="natural"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Natural</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("honey", "images/honey.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/honey.jpg"
                  title="Honey"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Honey</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 5 ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography id="discrete-slider-always" gutterBottom>
              Price Range
            </Typography>
            <AirbnbSlider
              ThumbComponent={AirbnbThumbComponent}
              getAriaLabel={index =>
                index === 0 ? "Minimum price" : "Maximum price"
              }
              defaultValue={[10, 50]}
              valueLabelDisplay="on"
              aria-labelledby="discrete-slider-always"
              step={10}
            />
            <Button size="big" color="primary" onClick={() => nextStep()}>
              {" "}
              Apply{" "}
            </Button>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 6 ? (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/coffeematch.jpg"
                  title="Coffee match"
                />
                <CardContent>Coffee Match</CardContent>
              </CardActionArea>
              <CardActions>
                <center>
                  <Button
                    size="big"
                    color="primary"
                    onClick={() => nextStep("price")}
                  >
                    Buy
                  </Button>
                </center>
                <Button
                  size="big"
                  color="primary"
                  onClick={() => previousStep()}
                >
                  Back
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 7 ? (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardActionArea></CardActionArea>
            </Card>
            <Typography variant="h6" gutterBottom>
              Shipping address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="billing address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="billing address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="billing address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="billing postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="billing country"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use this address for payment details"
                />
                <Typography variant="h6" gutterBottom>
                  Payment method
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="cardName"
                      label="Name on card"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="cardNumber"
                      label="Card number"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="expDate"
                      label="Expiry date"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="cvv"
                      label="CVV"
                      helperText="Last three digits on signature strip"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="secondary"
                          name="saveCard"
                          value="yes"
                        />
                      }
                      label="Remember credit card details for next time"
                    />
                  </Grid>
                </Grid>
                <center>
                  <Button
                    size="big"
                    color="primary"
                    onClick={() => nextStep("Submit")}
                  >
                    Submit
                  </Button>
                </center>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : null}

      {currentStep === 8 ? (
        <Grid item xs={12}>
          <Card className={classes.roots}>
            <CardActionArea>
              <CardMedia
                className={classes.closer}
                image="images/thanks.jpg"
                title="Thank you"
              />
              <CardContent>
                Thanks for your order. A conformation mail has been sent to your
                mail address. If you have further questions do not hesitate to
                contact us.
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ) : null}
    </div>
  );
}
