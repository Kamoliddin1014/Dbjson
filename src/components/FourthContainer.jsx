import React from "react";
import ResponsiveLayout from './Images/responsiveLayout.png'
import SmartGrid from './Images/smartGrid.png'
import UserFriendly from './Images/userFriendly.png'
import BuiltOnBoostrap from './Images/builtOnBoostrap.png'
import OnlineSecurity from './Images/onlineSecurity.png'
import CreativeDesign from './Images/creativeDesign.png'



export default function FourthContainer() {
    return(
        <>
        
        <div className="container text-center">
            <h6 className="headerLorem">Lorem ipsum dolor sit amet</h6>
            <h2 className="mt-3 withAName">
            The Loudest Noise Comes From The Electric Saas.
            </h2>
            <p className="mb-5 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div className="row text-center">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <img src={ResponsiveLayout} alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <img src={SmartGrid} alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <img src={UserFriendly} alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <img src={BuiltOnBoostrap} alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <img src={OnlineSecurity} alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <img src={CreativeDesign} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}