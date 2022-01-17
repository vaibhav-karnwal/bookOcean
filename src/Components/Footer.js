import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <footer className="page-footer font-small mdb-color pt-4">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left mt-3 pb-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                            <p>BookOcean</p>
                        </div>
                        <hr className="w-100 clearfix d-md-none"/>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p><Link href="#!">Notes</Link></p>
                            <p><Link href="#!">Subjective  Books</Link></p>
                            <p><Link href="#!">Programming Books</Link></p>
                            <p><Link href="#!"></Link></p>
                        </div>
                        <hr className="w-100 clearfix d-md-none"/>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p>
                            <Link href="#!">Your Account</Link>
                            </p>
                            <p>
                            <Link href="#!">Become an Affiliate</Link>
                            </p>
                            <p>
                            <Link href="#!">Shipping Rates</Link>
                            </p>
                            <p>
                            <Link href="#!">Help</Link>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none"/>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                            <i className="fas fa-home mr-3"></i> India, NY 10012, US</p>
                            <p>
                            <i className="fas fa-envelope mr-3"></i> vaibhavkarnwal@gmail.com</p>
                            <p>
                            <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p>
                            <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="text-center text-md-left">© 2022 Copyright:
                            <Link href="https://mdbootstrap.com/">
                                <strong> BookOcean.com</strong>
                            </Link>
                            </p>
                        </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0">
                        <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                            <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            </li>
                            <li className="list-inline-item">
                            <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            </li>
                            <li className="list-inline-item">
                            <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                                <i className="fab fa-google-plus-g"></i>
                            </Link>
                            </li>
                            <li className="list-inline-item">
                            <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </>
    )
}
