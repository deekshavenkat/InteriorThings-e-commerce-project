import React from 'react'
import styled from 'styled-components'
// import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const { openSidebar} = useProductsContext()
  const {myUser} = useUserContext()
  
  return(
   <NavContainer>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/"><img src= "https://i.ibb.co/HrTHN1j/mylogo1.png" alt ="Home" /></Link>
        {/* <span>
      
        <h5> <i>  Your Comfort is our dream</i> </h5>
      
        </span> */}
        <button type="button" className="nav-toggle" onClick={openSidebar}>
          <FaBars />
        </button>

      </div>
      <ul className='nav-links'>
        {links.map((link)=>{
           const {id, url,text} = link
          return (
            <li key={id}> <Link to={url}>
              {text}</Link>
            </li>
          )
        })}
           {myUser && <li>
        <Link to ="/checkout" >Checkout</Link> </li>} 
        {/* for navbar in big screen Home, products, checkout  */}
      </ul>
   

      <CartButtons />

    </div>
    
   </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h5{
    margin-top:60px;
    margin-left:-150px;
    border:0px;
    padding:0px;
    font-size:0.7rem;
   
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 100px;+-
      margin-left: -15px;
    }
  }
  .nav-toggle {

    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
