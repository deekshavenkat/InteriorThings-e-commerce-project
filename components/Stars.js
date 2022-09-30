import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars, reviews}) => {
  // console.log(stars)
  // console.log(reviews)

    // {/* starts */}
    //   {/* written nested ternory operatr  */}
    //   <span>
    //     {stars >=1 ? (<BsStarFill /> ): stars >= 0.5 ?( <BsStarHalf />) : (<BsStar/>) }
    //   </span>
    //   {/* end of starts */}

    //empty array of length 5 is craeted 
    //second parametrs in Array.from is callback function which runs to each and every item of array 
    //we pass index to skip it go through Array.from() from google 
    // index 0-4(index runs through all items of aary)
    const tempStars = Array.from({length :5},(_, index) =>{
      const number = index + 0.5;
      return  ( <span key ={index}>
                {stars >= index + 1 ? (<BsStarFill /> ): stars >= number ?( <BsStarHalf />) : (<BsStar/>) }
              </span>)
    }) 

  return (
    <Wrapper>
      <div className="starts"> 

        {tempStars}
      </div>
      <p className="reviews">{reviews} customers reviews</p>  
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars


// Stars manual approach 


 // {/* starts */}
    //   {/* written nested ternory operatr  */}
    //   <span>
    //     {stars >=1 ? (<BsStarFill /> ): stars >= 0.5 ?( <BsStarHalf />) : (<BsStar/>) }
    //   </span>
    //   {/* end of starts */}
// {/* starts */}
//       {/* written nested ternory operatr  */}
//       <span>
//         {stars >=1 ? (<BsStarFill /> ): stars >= 0.5 ?( <BsStarHalf />) : (<BsStar/>) }
//       </span>
//       {/* end of starts */}

//        {/* starts */}
//            <span>
//         {stars >=2 ? (<BsStarFill /> ): stars >= 1.5 ?( <BsStarHalf />) : (<BsStar/>) }
//       </span>
//       {/* end of starts */}


//        {/* starts */}
//           <span>
//         {stars >=3? (<BsStarFill /> ): stars >= 2.5 ?( <BsStarHalf />) : (<BsStar/>) }
//       </span>
//       {/* end of starts */}


//        {/* starts */}
//            <span>
//         {stars >=4? (<BsStarFill /> ): stars >= 3.5 ?( <BsStarHalf />) : (<BsStar/>) }
//       </span>
//       {/* end of starts */}


//         {/* starts */}
//         <span>
//         {stars >=5? (<BsStarFill /> ): stars >= 4.5 ?( <BsStarHalf />) : (<BsStar/>) }
//       </span>
//       {/* end of starts */}

