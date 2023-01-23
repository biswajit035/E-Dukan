import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/productSlice';
import { MagnifyingGlass } from 'react-loader-spinner'


const Foods = (props) => {
    const dispatch = useDispatch();
    const {data:users,status} = useSelector((elem)=>elem.product)
    

    useEffect(() => {
        dispatch(fetchProducts(props.link));
    }, []);

    return (
        <div className='food-main'>
            <div className="food_title">{props.title}</div>

            <div className="food_products">
                {status === STATUSES.LOADING ?
                    <MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    />
                :
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
