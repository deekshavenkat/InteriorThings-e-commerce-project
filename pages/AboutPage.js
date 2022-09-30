import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
// import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
   <main>
    <PageHero  title="about"/>
    <Wrapper className="page section section-center">
      <img src= "https://www.kerfurniture.com/uploads/image/collection/ker-occasional.jpg" alt="nice" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className='underline'></div>
        </div>
        <p>
        <b><i>The journey of KER began in 2011 with our founder and Managing Director Mr Ker Choon Siong.</i></b>
       <span>
       <p>Since then we have become synonymous as a manufacturer and exporter of stylish and well-designed furniture. We are now based operating in Bukit Bakri, Muar,Johor,Malaysia. Most of our home furniture products are exported. Started out with great focus on rubberwood dining furniture, includes dining sets, living room occasional items & bedroom sets.</p>
       </span>

        </p>
      </article>

    </Wrapper>
   </main>
    
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
