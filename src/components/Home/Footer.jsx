import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">
            Contact Us:{" "}
            <a
              href="mailto:info@alumniassociation.com"
              className="hover:text-blue-400"
            >
              info@alumniassociation.com
            </a>
          </p>
          <p className="mb-2">
            Follow us on{" "}
            <a
              href="https://twitter.com/alumni"
              className="hover:text-blue-400"
            >
              Twitter
            </a>{" "}
            and{" "}
            <a
              href="https://facebook.com/alumni"
              className="hover:text-blue-400"
            >
              Facebook
            </a>
          </p>
          <div>
            <a href="#privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#terms-of-service" className="hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
