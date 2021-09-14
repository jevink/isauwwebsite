import React from 'react';

function Footer() {
    // Dynamic year for our copyright
    const year = new Date().getFullYear();

    return (
        <footer className="page-footer text-center">
            {/* Social Icons */}
            <div className="py-4 mx-auto">
                <a className="socialIcon" href="http://www.facebook.com/isauw.huskies">
                    <i className="fa fa-2x fa-facebook"></i>
                </a>
                <a className="socialIcon" href="http://instagram.com/isauwhuskies">
                    <i className="fa fa-2x fa-instagram"></i>
                </a>
                <a className="socialIcon" href="http://www.youtube.com/user/isauwHuskies">
                    <i className="fa fa-2x fa-youtube"></i>
                </a>
                <a className="socialIcon" href="mailto:isauw@uw.edu">
                    <i className="fa fa-2x fa-envelope-o"></i>
                </a>
            </div>

            {/* Copyright and Conditions */}
            <div className="footer-copyright py-5">
                {/* Required if website is hosted using UW shared hosting */}
                <div id="conditions">
                    <a style={{ marginRight: "12px" }} href="https://www.washington.edu/online/privacy" className="text-decoration-none">Privacy</a>
                    <a style={{ marginLeft: "12px" }} href="https://www.washington.edu/online/terms" className="text-decoration-none">Terms</a>
                </div>
                <div>
                    <a href="#home" className="text-decoration-none copyright">© {year} Indonesian Student Association at University of Washington | Seattle, WA</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;