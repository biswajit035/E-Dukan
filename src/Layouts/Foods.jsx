import React from 'react'
import { useState, useEffect } from 'react';

const Foods = () => {
    const [users, setUser] = useState([]);

    const getUser = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        // console.log(response);
        setUser(await response.json());
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className='food-main'>
            <div className="food_title">Buy Foods, Toys and More</div>

            <div className="food_products">
                {
                    users.map((currEle) => {
                        return (
                            <div className="card">
                                <img src={currEle.image} alt="" /><br />
                                <div class="container">
                                    <div className="pro-name">{currEle.title}</div>
                                    <div className='dis'>Up to 29% off</div>
                                    <div className='price'>₹{currEle.price}</div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default Foods
