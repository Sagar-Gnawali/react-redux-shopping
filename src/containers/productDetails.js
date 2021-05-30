import React from 'react';
import axios from 'axios';
import './productDetails.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct_ac, removeSelectedProduct } from '../redux/actions/productActions.js'
export const ProductDetails = () => {
    const { product_id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.singleProduct);
    const { image, title, price, category, description } = product;
    const selectedProduct = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${product_id}`)
            .catch((error) => {
                console.log(error);
            });
        dispatch(selectedProduct_ac(response.data));
    }
    useEffect(() => {
        if (product_id && product_id !== '')
            selectedProduct();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [product_id]) //We want to run this when ever the product id is changes
    return (
        <div className="ui grid container ">
            {Object.keys(product).length === 0
                ? <div className="loader"><h1>Loading...</h1></div>
                : (
                    <div className="ui placeholder segment">
                        <div className="ui two column stackable center aligned grid">
                            <div className="middle aligned row">
                                <div className="column lp">
                                    <img className="ui fluid image" src={image} title={title} />
                                </div>
                                <div className="column rp">
                                    <h1>{title}</h1>
                                    <h2>
                                        <a className="ui teal tag label">${price}</a>
                                    </h2>
                                    <h3 className="ui brown block header">{category}</h3>
                                    <p>{description}</p>
                                    <div className="ui vertical animated button" tabIndex="0">
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}