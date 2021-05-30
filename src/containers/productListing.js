import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ProductComponent } from './productComponent';
import { setProducts_ac } from '../redux/actions/productActions';
export const ProductListing = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((error) => {
            console.log('Error is ', error);
        });
        dispatch(setProducts_ac(response.data));
    }
    useEffect(() => {
        fetchProducts();
    },[]);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}
