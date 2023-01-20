import React from 'react'
import Image from '../Assets/omg-deal.jpg';
import Image2 from '../Assets/best-deals/phone1.jpg';

export const Omg = () => {
    return (
        <div className='omg'>
            <div className="omg_logo">
                <img src={Image} alt="" />
            </div>
            <span className='omg_title'>Lowest Prices On The Best Brands</span>
            <div className="omg_products">
                <div className="card">
                    <img src={Image2} alt="" />
                    <div class="container">
                        <span className='dis'>Up to 29% off</span>
                        <span>26,999</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Image2} alt="" />
                    <div class="container">
                        <span className='dis'>Up to 29% off</span><br />
                        <span>26,999</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Image2} alt="" />
                    <div class="container">
                        <span className='dis'>Up to 29% off</span><br />
                        <span>26,999</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Image2} alt="" />
                    <div class="container">
                        <span className='dis'>Up to 29% off</span><br />
                        <span>26,999</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Image2} alt="" />
                    <div class="container">
                        <span className='dis'>Up to 29% off</span><br />
                        <span>26,999</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Image2} alt="" />
                    <div class="container">
                        <span className='dis'>Up to 29% off</span><br />
                        <span>26,999</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Image2} alt="" />
                    <div class="container">
                        <span className='dis'>Up to 29% off</span><br />
                        <span>26,999</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Image2} alt="" />
                    <div class="container">
                        <span className='dis'>Up to 29% off</span><br />
                        <span>26,999</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
