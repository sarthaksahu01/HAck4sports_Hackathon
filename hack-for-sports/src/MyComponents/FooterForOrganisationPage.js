import React from "react";
import "./FooterForOrganisationPage.css";

export const Footer = () => {
  /* When we are using named export in place of default export, we have to enclose file in {} in App.js
   check in header.js
   */

  return (
    <footer className="bg-dark text-light py-3">
      <a href="https://twitter.com/?logout=1652864631323">
        <i className="footer-fav-icon">
          <img
            className="footer-fav-icon"
            src="../images/Twitter-fav-icon-bg-dark.jpg"
            alt="#"
          />
        </i>
      </a>
      <p className="text-center">copyright &copy; Team Key</p>
    </footer>
  );
};
