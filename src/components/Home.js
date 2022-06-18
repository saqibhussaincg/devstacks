import React from 'react'
import styled from 'styled-components'
import image from '../assets/home.png';

const Home = () => {
  return (
    <Section id="home">


    <div className='text'>

    <h1>
      <span className='highlight'>Product Built</span> with Precision
    </h1>

    <p>
      Scalable, secure and futuristic.
    </p>

    <button>Contact Us</button>
   
    </div>

    <div className='image'>
      {/* <img src={image} alt="home image" /> */}
    </div>

    </Section>

  )
}

export default Home

const Section = styled.section`
  display: grid;
  grid-template-columns: 40%;
  align-items: center;
  ${'' /* height: 80vh; */}
  height: 460px;
  background-color: #C4C4C4;


  .text{
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    margin: 40px 0px;


    .highlight{
      color: #000;
    }

    h1{
      font-size: 3.75vw;
      font-weight: 10;
      color: #000;
    }
    p{
      font-size: 1.5vw;
      color: #000;
      margin: 10px 0 0 0;
    }

    
    button{
                
                border-radius: 20px;
                border: 1px solid var(--primary-color);
                background-color: transparent;
                color: #000;
                background-color: #FDD800;
                border-radius: 16px;
                padding: 25px 30px;
                margin: 25px 0 0 0;
                cursor: pointer;
                font-size: 26px;
                font-family: var (--font-family);
                

            }
  }


      

`