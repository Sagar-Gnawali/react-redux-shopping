import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const listItems = (products || []).map((item, index) => (
        <div className="five wide column" key={index}>
            <Link to={`/product/${item.id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="content">
                        <div className="header ">{item.title} </div>
                        <div className="meta price">NRP.{item.price * 112}</div>
                        <div className="meta">{item.category}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div >

    ))
    return <>{listItems}</>;

}