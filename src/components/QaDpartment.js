import React from 'react'
import styled from 'styled-components'

import image01 from "../assets/image133.png"
import image02 from "../assets/image134.png"
import image03 from "../assets/image135.png"
import image04 from "../assets/image136.png"
import image05 from "../assets/image137.png"
import image06 from "../assets/image138.png"

const QaDpartment = () => {
    return (

        <Section>
            <SectionHeading>
                <h1>Devstack QA Department</h1>
                <p>We are reserved with an extraordinary division that is truly meant for processing thetesting in the right way. Our team of astute and skilled engineers works dedicatedly on the assigned projects order to bring the best out of it, Depending on the project's complexity, we deploy our team that can be shifted to other in case of urgency:</p>
            </SectionHeading>

            <SectionData>
                <div className='box'>
                    <img src={image01} alt="image" />
                    <h3>Profound QA Testing</h3>
                </div>

                <div className='box'>
                    <img src={image02} alt="image" />
                    <h3>Documentation and
                        code review</h3>
                </div>

                <div className='box'>
                    <img src={image03} alt="image" />
                    <h3>Defect monitoring,
                        tracking, and fixation</h3>
                </div>

                <div className='box'>
                    <img src={image04} alt="image" />
                    <h3>Configuration update
                        and management</h3>
                </div>

                <div className='box'>
                    <img src={image05} alt="image" />
                    <h3>Process and progress
                        management
                    </h3>
                </div>

                <div className='box'>
                    <img src={image06} alt="image" />
                    <h3>Risk handling</h3>
                </div>

            </SectionData>
        </Section>
    )
}

export default QaDpartment


const Section = styled.section`
    display: flex;
    padding: 2rem 2rem;
    gap: 4rem;
    flex-direction: column;
    color: #000;
    background-color: #fff;


`

const SectionHeading = styled.section`

    display: flex;
    align-items:center;
    flex-direction: column;
        
    h1{ 
        display: flex;
        padding-left: 5rem;
        align-self: flex-start;
        font-size: 48.83px;
        padding-bottom: 1rem;
        margin: 2rem 0;
    }

    p{
        font-size: 20px;
        padding: 0 5rem 0 5rem;
    }

`

const SectionData = styled.section`

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        
        

        .box{
            width: 500px;
            display: flex;
           gap: 2rem;
           align-items: center;
           justify-content: center;
           flex-direction: column;
           padding: 1rem 4rem;
           text-align: center;

           h3{
            font-size: 31px;
            font-weight: 100;
           }
        }


`