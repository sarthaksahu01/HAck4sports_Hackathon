import React from "react";
import "./AboutForOrganisationPage.css";

export const About = () => {
  return (
    <>
      <div class="container">
        <img
          className="aboutImg"
          src="../images/organisation collage for sports.jpeg"
          alt=" .."
        />
        <div class="centered">
          <h1 className="heading">Organisation Page</h1>
          <h4 className="sub-heading">
            This page is all about the organisation whether big or small they
            are a part of the Indian sports industry whose contribution is
            underrated. They provide the India with the great players of
            alltime. let us conbsider the example of the great Sunil Chhetri.
            This young man has changed the face of Indian football industry. At
            such tender age he has been involved in football to make it such a
            big...
          </h4>
          {/* <div>About Works!!</div>
      <p>This is the about section</p> */}
        </div>
      </div>
    </>
  );
};
