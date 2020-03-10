import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import CardHeader from "@material-ui/core/CardHeader";
import { Chip } from "react-rainbow-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  media: {
    height: 300,
    width: "100%"
  },

  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },

  match: {
    height: 250,
    fontSize: 17
  },

  closer: {
    height: 400
  },

  result: {
    height: "100%"
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

const profile = [
  {
    value: 0,
    label: "low"
  },

  {
    value: 6,
    label: "high"
  }
];

const weight = [
  {
    value: 0,
    label: "light"
  },

  {
    value: 6,
    label: "heavy"
  }
];

const marks = [
  {
    value: 0,
    label: "0 €"
  },

  {
    value: 20,
    label: "20 €"
  },

  {
    value: 40,
    label: "40 €"
  },

  {
    value: 60,
    label: "60 €"
  },
  {
    value: 80,
    label: "80 €"
  },
  {
    value: 100,
    label: "100€"
  }
];

function valuetext(value) {
  return `${value}€`;
}

//function valueLabelFormat(value) {
// return marks.findIndex(mark => mark.value === value) + 1;
//}

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

  const [value, setValue] = React.useState([8, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h1>
        <center>Coffee Match Finder</center>
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "central",
          flexWrap: "wrap",
          margin: "0.5"
        }}
        className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap"
      >
        {![1, 2, 10, 11].includes(currentStep) &&
          answers.map(a => (
            <Chip label={a.answer} color="primary" variant="neutral">
              <h5 className="rainbow-p-top_large rainbow-font-size-heading_small">
                <center>{a.answer}</center>
              </h5>
            </Chip>
          ))}
      </div>

      {currentStep === 1 ? (
        <Grid
          container
          spacing={3}
          className={currentStep > 1 ? classes.hidden : ""}
        >
          <Grid item xs={12} onClick={() => nextStep()}>
            <Grid>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.match}
                  image="images/match.jpg"
                  title="match"
                />
                <CardContent>
                  <Typography className={classes.match}>
                    <center>
                      <p>Options to choose from:</p>
                      <p>
                        Kind of coffee, roast profile, flavour, origin, process,
                        taste profile, budget
                      </p>
                    </center>

                    <Button
                      color="secondary"
                      size="medium"
                      variant="contained"
                      onClick={() => nextStep()}
                    >
                      Start the coffee match finder
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      ) : null}

      {currentStep === 2 ? (
        <Grid
          container
          spacing={3}
          //className={currentStep > 2 ? classes.hidden : ""}
        >
          <Grid item xs={12}>
            <Typography>
              <center>
                <h3>What kind of coffee would you like to drink?</h3>
              </center>
            </Typography>
            <Card
              className={classes.root}
              onClick={() =>
                nextStep("Filter Coffee", "images/filtercoffee.jpg")
              }
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/filtercoffee.jpg"
                  title="filter"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Filter Coffee</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() => nextStep("Espresso", "images/espresso.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/espresso.jpg"
                  title="espresso"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Espresso</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.root}
              onClick={() =>
                nextStep("Filter and Espresso Roast", "images/omni.jpg")
              }
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/omniroast.jpg"
                  title="omni"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Filter and Espresso Roast</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 3 ? (
        <Grid container spacing={3}>
          <Grid item xs={12} xm={4}>
            <Typography>
              <center>
                <h3>Which roast profile do you like?</h3>
              </center>
            </Typography>
            <Card
              className={classes.root}
              onClick={() => nextStep("Light Roast", "images/lightroast.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/lightroast.jpg"
                  title="lightroast"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Light Roast</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} xm={4}>
            <Card
              className={classes.root}
              onClick={() => nextStep("Medium Roast", "images/medium.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/medium.jpg"
                  title="medium"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Medium Roast</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} xm={4}>
            <Card
              className={classes.root}
              onClick={() => nextStep("Dark Roast", "images/dark.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/dark.jpg"
                  title="dark"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <center>Dark Roast</center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 4 ? (
        <Grid container spacing={3}>
          <Grid item xs={12} xm={4}>
            <Typography>
              <center>
                <h3>Which flavour do you prefer?</h3>
              </center>
            </Typography>
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
                <CardContent className={classes.niceColor}>
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
              onClick={() =>
                nextStep("chocolaty and nutty", "images/choc.jpeg")
              }
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/choc.jpeg"
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
              onClick={() => nextStep("spicy", "images/spices.jpeg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/spices.jpeg"
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
      {currentStep === 5 ? (
        <Grid container spacing={3}>
          <Grid xs={12} item>
            <Typography>
              <center>
                <h3>Which origin are you curious about the most?</h3>
              </center>
            </Typography>
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
              onClick={() => nextStep("Panama", "images/indonesia.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/indonesia.jpg"
                  title="Panama"
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
      {currentStep === 6 ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>
              <center>
                <h3>Which process method do you prefer?</h3>
              </center>
            </Typography>
            <Card
              className={classes.root}
              onClick={() => nextStep("washed", "images/washed.jpg")}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/washed.jpeg"
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
      {currentStep === 7 ? (
        <Grid>
          <Grid item xs={12}>
            <Typography>
              <center>
                <h3>Please choose the taste profile for your coffee</h3>
              </center>
            </Typography>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="images/profile.jpg"
                title="profile"
              />
              <CardContent>
                <Typography id="discrete-slider-custom" gutterBottom>
                  Sweetness
                </Typography>
                <Slider
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-custom"
                  step={10}
                  valueLabelDisplay="auto"
                  profile={profile}
                />
                <Typography id="discrete-slider-custom" gutterBottom>
                  Intensity
                </Typography>
                <Slider
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-custom"
                  step={10}
                  valueLabelDisplay="auto"
                  profile={profile}
                />
                <Typography id="discrete-slider-custom" gutterBottom>
                  Acidity
                </Typography>
                <Slider
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-custom"
                  step={10}
                  valueLabelDisplay="auto"
                  profile={profile}
                />
                <Typography id="discrete-slider-custom" gutterBottom>
                  Balance
                </Typography>
                <Slider
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-custom"
                  step={10}
                  valueLabelDisplay="auto"
                />
                <Typography id="discrete-slider-custom" gutterBottom>
                  Body
                </Typography>
                <Slider
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-custom"
                  step={10}
                  valueLabelDisplay="auto"
                  weight={weight}
                />
                <Typography id="discrete-slider-custom" gutterBottom>
                  Intensity with milk
                </Typography>
                <Slider
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-custom"
                  step={10}
                  valueLabelDisplay="auto"
                  profile={profile}
                />
                <center>
                  <Button
                    size="larg"
                    color="secondary"
                    variant="contained"
                    onClick={() => nextStep("taste profile")}
                  >
                    Apply
                  </Button>
                </center>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 8 ? (
        <Grid>
          <Grid item xs={12}>
            <Typography>
              <center>
                <h3>Please state your budget for the coffee</h3>
              </center>
            </Typography>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="images/price.jpg"
                title="price"
              />
              <CardContent>
                <Typography
                  id="discrete-slider-custom"
                  gutterBottom
                ></Typography>
                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext}
                  marks={marks}
                />
                <center>
                  <Button
                    size="larg"
                    color="secondary"
                    variant="contained"
                    onClick={() => nextStep("price")}
                  >
                    Apply
                  </Button>
                </center>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}

      {currentStep === 9 ? (
        <Grid>
          <Grid item xs={12}>
            <Typography>
              <center>
                <h2>Result</h2>
              </center>
            </Typography>
            <Card className={classes.result}>
              <CardHeader title="Your coffee match: Ethiopia Guji" />
              <CardMedia
                className={classes.media}
                image="images/guji.jpg"
                title="Ethiopia Guji"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>
                    About this coffee: This coffee comes from Guji, located in
                    the south of Ethiopia in the Oromia region near the Kenyan
                    border.
                    <p>
                      Unique tasting notes of passion fruit, honey and jasmine
                      can be found in this coffee.
                    </p>
                  </p>
                  <p>Price: 12,90 €</p>
                </Typography>
                <CardActions>
                  <center>
                    <Button
                      color="secondary"
                      size="medium"
                      variant="contained"
                      onClick={() => nextStep("price")}
                    >
                      Buy
                    </Button>
                  </center>
                  <Button
                    color="secondary"
                    size="medium"
                    variant="contained"
                    onClick={() => previousStep()}
                  >
                    Back
                  </Button>
                  <Button
                    color="secondary"
                    size="medium"
                    variant="contained"
                    href="/quiz"
                  >
                    Restart
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.result}>
              <CardHeader title="Alternative coffee match: Gerba Espresso" />
              <CardMedia
                className={classes.media}
                image="images/gerba.png"
                title="Gerba"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>
                    About this coffee: This coffee comes from the south of
                    Ethiopia. The coffee was natural processed.
                  </p>
                  <p>Find notes of blueberries and papaya in this coffe.</p>

                  <p>Price: 16,90 €</p>
                </Typography>
                <CardActions>
                  <center>
                    <Button
                      color="secondary"
                      size="medium"
                      variant="contained"
                      onClick={() => nextStep("price")}
                    >
                      Buy
                    </Button>
                  </center>
                  <Button
                    color="secondary"
                    size="medium"
                    variant="contained"
                    onClick={() => previousStep()}
                  >
                    Back
                  </Button>
                  <Button
                    color="secondary"
                    size="medium"
                    variant="contained"
                    href="/quiz"
                  >
                    Restart
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}
      {currentStep === 10 ? (
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
                    color="secondary"
                    size="large"
                    variant="contained"
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

      {currentStep === 11 ? (
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.closer}
                image="images/thanks.jpg"
                title="Thank you"
              />
              <CardContent>
                <p>
                  Thanks for your order. A conformation has been sent to your
                  mail address.
                </p>
                <p>
                  If you have further questions do not hesitate to contact us.
                </p>
                <p>
                  The coffee will be delivered within 3 days. Get ready for your
                  morning update.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
          <Link to="/">
            <center>
              <Button
                color="secondary"
                size="large"
                variant="contained"
                className={classes.button}
                component="a"
                href="/"
              >
                Go back to Homepage
              </Button>
            </center>
          </Link>
        </Grid>
      ) : null}
    </div>
  );
}
