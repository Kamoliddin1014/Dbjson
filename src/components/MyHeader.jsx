import React from "react";
import AlwaysReal from './Images/alwaysReal.png'
import HeaderCompImage from './Images/headerCompImage.png'


export default function MyHeader() {
    return (
        <>
            <div className="container-fluid myHeaderCon">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <h6 className="headerLorem headerP">Lorem ipsum dolor</h6>
                            <h4>
                                <img src={AlwaysReal} alt="" />
                            </h4>
                            <p className="headerP">
                                And that number is growing every day. That means e-commerce is thriving.
                            </p>
                            <div className="row mt-4 text-center">
                                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-3"><button className="tryButton"><h4>Try for free</h4></button></div>
                                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4"><button className="tryButton"><h4>Try for free</h4></button></div>
                            </div>
                            <p className="headerP mt-5">
                            There are some things money can’t buy. For everything else there’s ‘’MasterCard” is a good example.     
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img className="img-fluid" src={HeaderCompImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}