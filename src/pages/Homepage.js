import React from "react";
import ProductCategories from "../views/ProductCategories";
import ProductSmokingHero from "../views/ProductSmokingHero";
import AppFooter from "../views/AppFooter";
import ProductHero from "../views/ProductHero";
import ProductHowItWorks from "../views/ProductHowItWorks";
import ProductCTA from "../views/ProductCTA";
import AppAppBar from "../views/AppAppBar";

function Homepage() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default Homepage;
