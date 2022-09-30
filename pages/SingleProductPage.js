import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
 
  const {id} = useParams()
  const navigate = useNavigate()
  const {single_product_loading : loading , single_product_error: error, single_product:product, fetchSingleProduct} = useProductsContext()

//  console.log(history)
  useEffect(()=>{
    fetchSingleProduct(`${url}${id}`)
      //eslint-disable-next-line
  },[id])
   
  // if we dispaly error in Single products page  for more that 3 seconds, then automatically navigate back 
  // for that we use useHistory
  // by using history.push navihate back to home page 
  useEffect(()=>{
    if(error){
      setTimeout(() => {
          navigate("/")
      }, 3000);
    }
    //eslint-disable-next-line
  },[error])

  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }


  //
  // console.log(product)
  const {name, price,description,stock,stars,reviews, id:sku, company, images } = product
  
  return (
    <Wrapper>
      <PageHero title={name}  product={product}/>
      <div className="section section-center page">
        <Link to ="/products" className="btn">Back to products</Link>
        <div className="product-center">
           <ProductImages  images = {images}/>
           <section className="content">
            <h2>{name}</h2>
            <Stars  stars={stars} reviews ={
              reviews}/>
            <h5 className="price">{formatPrice(price)} </h5>
            <p className="desc">{description}</p>

            <p className="info">
              <span>Available : </span>
               {stock >0 ? "In stock" : "out of stock"}
            </p>

            <p className="info">
              <span>SKU : </span>
               {sku}
            </p>

            <p className="info">
              <span>BRAND : </span>
               {company}
            </p>
            <hr/>
            {stock>0 && <AddToCart product ={product} />}
           </section>
        </div>
      </div>
    </Wrapper>
  )
}
// we should add useEffect here (in single products page) 
// not in product_context page becz we want singleProducts function to be excuted whenever the user navigates to the single products page 







const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
