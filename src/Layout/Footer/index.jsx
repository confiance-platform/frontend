import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9 col-12">
                        <ul className="footer-text">
                            <li>
                            <p className="mb-0">Copyright © 2024 Confiance. All rights reserved 💖</p>
                            </li>
                            <li><a href="#"> V1.0.0 </a></li>
                        </ul>
                    </div>
                     <div className="col-md-3">
            <ul className="footer-text text-end">
              <li> <a href="mailto:support@confiance.com"> Need Help <i className="ti ti-help"></i></a></li>
            </ul>
          </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;