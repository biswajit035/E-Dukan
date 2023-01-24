import React from 'react'
import Image from '../Assets/omg-deal.jpg';
import Image2 from '../Assets/best-deals/phone1.jpg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { MagnifyingGlass } from 'react-loader-spinner'
import { STATUSES } from '../store/buyersSlice';

export const Omg = (props) => {
    const dispatch = useDispatch();
    const {data:users,status} = useSelector((state) => state.product);


    // const getUser = async () => {
    //     const response = await fetch('https://fakestoreapi.com/products')
    //     setUser(await response.json());
    // }


    useEffect(() => {
        // getUser();
        dispatch(fetchProducts(props.link));
    }, []);

    return (
        <div className='omg'>
            <div className="omg_logo">
                <img src={Image} alt="" />
            </div>
            <span className='omg_title'>Lowest Prices On The Best Brands</span>

            <div className="omg_products">
                {status === STATUSES.LOADING ?
                    <MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperclassName="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    />
                :
                    users.map((currEle,idx) => {
                        return (
                            <div className="card" key={idx}>
                                <img src={currEle.image} alt="" /><br />
                                <div className="container">
                                    <span className='dis'>Up to 29% off</span>
                                    <div className='price'>₹{currEle.price}</div>
                                </div>
                            </div>
                        )

                    })
                    
                }
            </div>
            <div className="all-pro">See All Product</div>

        </div>
    )
}
