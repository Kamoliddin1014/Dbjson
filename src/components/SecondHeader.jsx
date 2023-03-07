import React from "react";
import FecImg from './Images/fecImg.png'
import AmazonImg from './Images/amazonImg.png'
import FedexImg from './Images/fedexImg.png'
import GoogleImg from './Images/googleImg.png'
import MicrosoftImg from './Images/microsoftImg.png'
import SecondHeader111 from './Images/secondHeader111.png'
import SecInter1 from './Images/secInter1.png'


export default function SecondHeader() {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-col-lg-3 row-cols-xl-5 row-cols-xxl-5 text-center mt-5">
                    <div className="col mb-2">
                        <img className="mt-3" src={FecImg} alt="" />
                    </div>
                    <div className="col mb-2">
                        <img className="mt-3" src={AmazonImg} alt="" />
                    </div>
                    <div className="col mb-2">
                        <img src={FedexImg} alt="" />
                    </div>
                    <div className="col mb-2">
                        <img src={GoogleImg} alt="" />
                    </div>
                    <div className="col mb-2">
                        <img src={MicrosoftImg} alt="" />
                    </div>
                </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <img src={SecondHeader111} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <h6 className="headerLorem">Lorem ipsum dolor</h6>
                        <h3 className="twoSaas">Two Saas are better than one.</h3>
                        <p className="e-commerce">One of the most fundamental ways to go about that is to create a memorable e-commerce slogan.</p>
                        <div className="row">
                            <div className="col-12">
                                <img src={SecInter1} alt="" />
                            </div>
                            <div className="col-12"></div>
                            <div className="col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}