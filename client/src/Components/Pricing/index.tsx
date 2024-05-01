import React from "react";
import "./pricing.css"

import { PiSealCheckLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";

const Index = () => {
    return (
        <main className='pricing'>
            <div className="_pricing_title">
                <h3>
                    Pricing
                </h3>
                <p>
                    Transparent and flexable options.
                </p>
            </div>
            <div className="_princing_divs">
                <div className="pricing_item">
                    <div>
                        <h4>Free</h4>
                        <h2>$0</h2>
                    </div>
                    <ul>
                        <li> 
                            <span>
                             <PiSealCheckLight/>
                            </span> 
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                        <span>
                             <PiSealCheckLight/>
                            </span> 
                            Lorem ipsum dolor sit amet.
                            </li>
                        <li>
                        <span>
                             <PiSealCheckLight/>
                            </span> 
                            Lorem ipsum dolor sit amet.
                            </li>
                        <li>
                            <span>
                                <IoCloseOutline/>
                            </span>
                            Lorem ipsum dolor sit amet.</li>
                        <li>
                        <span>
                                <IoCloseOutline/>
                            </span>
                            Lorem ipsum dolor sit amet.</li>
                        <li>
                        <span>
                                <IoCloseOutline/>
                            </span>
                            Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <button>Basic Plan</button>
                </div>
                <div className="pricing_item2">
                    <div>
                        <h4>Sericous Lerener</h4>
                        <h2>$9.99</h2>
                    </div>
                    <ul>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                                <IoCloseOutline/>
                            </span>
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                                <IoCloseOutline/>
                            </span>
                        Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <button>Free Trail</button>
                </div>
                <div className="pricing_item">
                    <div>
                        <h4>Fully Committed</h4>
                        <h2>$16.99</h2>
                    </div>
                    <ul>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    <li>
                    <span>
                             <PiSealCheckLight/>
                            </span> 
                        Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <button>Free Trail</button>
                </div>
            </div>
        </main>
    );
};

export default Index;