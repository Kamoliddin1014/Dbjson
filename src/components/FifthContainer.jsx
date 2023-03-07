import React from "react";
import Consultation from './Images/consultation.png'
import AddFriends from './Images/addFriends.png'
import FreeFonts from './Images/freeFonts.png'
import { GrFormCheckmark } from 'react-icons/gr';
import {AiOutlineArrowRight} from 'react-icons/ai'





export default function FifthContainer() {
    return (
        <>
            <div className="container totalCon mt-5">
                <h4 className="keepCalm">Keep Calm And Buy</h4>
                <p className="text-center">
                    With lowering the price to even a slight extent one can achieve exponential growth.
                </p>
                <div className="row ">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 totalThird">
                        <h4 className="text-center student">Student</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <h1 className="text-center fitheen">$15</h1>
                        <div className="row monthlyButton">
                            <div className="col-4"> <button className="monthly">Monthly</button> </div>
                            <div className="col-4"> <button className="monthly">Annually</button> </div>
                        </div>
                        <div className="row conaddfree">
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                        </div>
                        <div className="row">
                            <button className="text-center buyNowButton">Buy Now</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 totalThird">
                        <h4 className="text-center student">Student</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <h1 className="text-center fitheen">$15</h1>
                        <div className="row monthlyButton">
                            <div className="col-4"> <button className="monthly">Monthly</button> </div>
                            <div className="col-4"> <button className="monthly">Annually</button> </div>
                        </div>
                        <div className="row conaddfree">
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                        </div>
                        <div className="row">
                            <button className="text-center mb-4 buyNowButton">Buy Now</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 totalThird">
                        <h4 className="text-center student">Student</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <h1 className="text-center fitheen">$15</h1>
                        <div className="row  monthlyButton">
                            <div className="col-4"> <button className="monthly">Monthly</button> </div>
                            <div className="col-4"> <button className="monthly">Annually</button> </div>
                        </div>
                        <div className="row conaddfree">
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark className="conaddfree" />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                            <div className="col-12">
                                <h3>  {<GrFormCheckmark />}  Consulting with experts 20 times for I yea</h3>
                            </div>
                        </div>
                        <div className="row  ">
                            <button className="text-center mb-4 buyNowButton">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container inputEmail">
                <div className="row">
                    <div className="col-6">
                        <h4 className="inputP">
                            Lorem ipsum si simply dummy
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia praesentium voluptatem modi delectus error. Ex.
                        </p>
                    </div>
                    <div className="col-6">
                        <div className="input-group mb-3 inputEmail1">
                            <input type="text" className="form-control " placeholder="Enter Email adress" aria-label="Email adress" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">{<AiOutlineArrowRight/>}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}