import React, { Component } from "react";


import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
//import PageDetailDescription from "parts/PageDetailDescription";
//import BookingForm from "parts/BookingForm";
//import Activities from "parts/Activities";
//import Testimony from "parts/Testimony";
//import Footer from "parts/Footer";

import ItemDetails from 'json/itemDetails.json';

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle 
          breadcrumb={breadcrumb} 
          data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls}/>
        
       
      </>
    );
  }
}
