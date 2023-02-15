import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { MagnifyingGlass } from 'react-loader-spinner'
import { STATUSES } from '../store/buyersSlice';
import Card from '../components/Card';



const Foods = (props) => {
    const dispatch = useDispatch();
    const {data:users,status} = useSelector((elem)=>elem.product)
    

    useEffect(() => {
        dispatch(fetchProducts(props.link));
    }, []);

    return (
        <div className='food-main'>
            <div className="food_title">{props.title}</div>

            <div className="product_slider">
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
                    users.map((itm,idx) => {
                        return (

                            <Card img={itm.image} title={itm.title} price={itm.price }/>
                        )
                    
                    })
                }
            </div>
        </div>
    )
}

export default Foods
