import React from 'react';
import Link from 'next/link';
import Image from 'next/Image';

const Navbar = () => {
  return (
    <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/homepage">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png"
                    alt="Python"
                    width="100"
                    height="100"
                  />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto py-4 py-md-0">
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" href="/homepage">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" href="/labs">
                      Labs
                    </Link>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" href="/instructors">
                      Instructors
                    </Link>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" href="/faqs">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
