import React from 'react'
import styled from 'styled-components'

import rectangle01 from "../assets/rectangle01.png";
import rectangle02 from "../assets/rectangle02.png";
import rectangle03 from "../assets/rectangle03.png";
import rectangle04 from "../assets/rectangle04.png";



const QaStandard = () => {
  return (
    <Section>
      <SectionHeading>
        <h1>QA Standards That Shaped The Development And Quality</h1>
      </SectionHeading>

      <SectionData>
        <div className='box'>
          <div className='rectangleimg'>
            <img src={rectangle01} alt="image" />
          </div>

          <div className='text'>
            <h3>Planning and requirement analysis</h3>
            <p>We specify the project test cases along with its elaboration. Teams are assigned as required.</p>
          </div>
        </div>

        <div className='box'>
          <div className='rectangleimg'>
            <img src={rectangle02} alt="image" />
          </div>

          <div className='text'>
            <h3>Code Review</h3>
            <p>We specify the project test cases along with its elaboration. Teams are assigned as required.</p>
          </div>
        </div>


        <div className='box'>
          <div className='rectangleimg'>
            <img src={rectangle03} alt="image" />
          </div>

          <div className='text'>
            <h3>Immediate testing</h3>
            <p>We specify the project test cases along with its elaboration. Teams are assigned as required.</p>
          </div>
        </div>


        <div className='box'>
          <div className='rectangleimg'>
            <img src={rectangle04} alt="image" />
          </div>

          <div className='text'>
            <h3>Final verification</h3>
            <p>We specify the project test cases along with its elaboration. Teams are assigned as required.</p>
          </div>
        </div>

      </SectionData>
    </Section>
  )                                           
}

export default QaStandard


const Section = styled.section`
    display: flex;
    padding: 2rem 2rem;
    gap: 4rem;
    flex-direction: column;
    color: #000;
    background-color: #fff;
`

const SectionHeading = styled.section`

h1{       
        display: flex;
        padding-left: 5rem;
        align-self: flex-start;
        font-size: 48.83px;
        padding-bottom: 1rem;
        margin: 2rem 0;
    }
`

const SectionData = styled.section`

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-around;
        padding: 2rem 0rem;
       
    

        .box{
          display: flex;
          align-items: center;
          width: 300px;
          height: 300px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border-radius: 8px;

          .rectangleimg{
            position: absolute;
            z-index: 1;
            margin-bottom: 18rem;
            margin-left: 2rem;
          }

          .text{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 4rem;
            padding: 0rem 1rem;

            h3{
              font-family: "Verdana";
              font-weight: 100;
            }
          }
        }

        
       

    
`