import React, { useState } from 'react'
import styled from 'styled-components'

// images is array of object 
//mainImg is one element array that is object
const ProductImages = ({images =[{url:""}]}) => {
  // console.log(images)
   // initially it will be undefined then it will get images, 
   //if we do images[0] for undefined value then we will get big fat error 
   // so lets make no matter when and what images is array 
   // with help of default parameters set images as empty array
  const [mainImg, setmainImg]= useState(images[0])
  // console.log(mainImg)
  return (
    // inside an arry we are looking for url, initialy we have empty arrar no url later we will load 
    // for time being writing images[url:""]
    <Wrapper>
      <img src={mainImg.url} alt="main img" className='main'/>
      <div className="gallery">
        {images.map((img, index)=>{
          return <img src={img.url} alt={img.fileName} key={index} onClick={()=>setmainImg(images[index])}
           className = {`${img.url === mainImg.url? "active":null}`}/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
