import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';

const Footer = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
    };
    return (
        <footer>
            <div className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title"><Link>Home</Link></h6>
                    <a className="link link-hover"><Link>About</Link></a>
                    <a className="link link-hover"><Link>Contact</Link></a>
                    <a className="link link-hover"><Link>Course Sylebus</Link></a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <form onSubmit={handleSubscribe} action="">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                classclassName="input input-bordered join-item" />
                            <input type="submit" className="btn btn-primary join-item" value="Subscribe" />
                            </form>
                        </div>
                    </fieldset>
                </form>

            </div>
            <div className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4">
                <aside>
                    <Breadcrumbs></Breadcrumbs>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;