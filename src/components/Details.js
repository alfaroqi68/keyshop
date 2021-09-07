import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {value => {
                   const {id, company, img, info, price, title, inCart} = value.detailProduct;
                return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={img} className="img-fluid" alt="Product" />
                            </div>
                            <div className="col-md-6 mx-auto text-slanted text-capitalize text-blue my-5">
                                <h1>Model : {title}</h1>
                                <h4 className="text-title text-capitalize text-muted mt-2 mb-">Brand:  
                                    <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4>
                                <h4 className="text-blue"><strong>price : <span>$</span> {price}</strong></h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product : </p>
                                <p className="text-justify text-muted lead">{info}</p>
                                <div>
                                    <Link to="/">
                                        <ButtonContainer className="mr-2">Back</ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                        cart
                                        disabled = {inCart?true:false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart?"In Cart":"Add To Cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
               }}
           </ProductConsumer>
        );
    }
}

export default Details;