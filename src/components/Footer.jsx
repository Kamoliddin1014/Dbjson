import React from "react";
import NavImg1 from './Images/navbarBaseImg.png'


export default function Footer() {
    return (
        <>
            <div className="container-fluid footerContainer">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-col-lg-5 row-cols-xl-5 row-cols-xxl-5">
                        <div className="col mt-5 mb-2">
                            <img src={NavImg1} alt="" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="col mt-5 mb-2">
                            <h6>Customers</h6>
                            <p>Buyer</p>
                            <p>Supplier</p>
                        </div>
                        <div className="col mt-5 mb-2">
                            <h6>Customers</h6>
                            <p>Buyer</p>
                            <p>Supplier</p>
                        </div>
                        <div className="col mt-5 mb-2">
                            <h6>Customers</h6>
                            <p>Buyer</p>
                            <p>Supplier</p>
                        </div>
                        <div className="col mt-5 mb-2">
                            <h6>Customers</h6>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Example label</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}