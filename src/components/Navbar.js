import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
            <Link to="/">
            <i class="fas fa-home text-white">Home</i>
                
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer className="text-white" >
                    <span className="mr-2">
                        <i className="fas fa-cart-plus text-white "/>
                    </span>
                    MY CART
                </ButtonContainer>
            </Link>
           </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`

    .nav-link{
        color: var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`;