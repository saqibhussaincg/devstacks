import React from 'react'
import styled from 'styled-components'
import image from '../assets/balancingscales.png'

const RecomendDevstack = () => {
    return (
        <Section>
            <SectionHeading>

            <div className='links'>
                <h1>Why we recommend Devstack?</h1>
                <ul>
                    <li>Project Based Pricing</li>
                    <li>Dedicated Development</li>
                    <li>Milestone-based </li>
                    <li>Effort Based Pricing</li>
                </ul>
                </div>
            </SectionHeading>


            <SectionContent>
                <div className='imagearea'>
                    <img src={image} alt='image' />
                </div>

                <div className='text'>
                    <h3>Project Based Pricing or Fixed Bid
                    </h3>
                    <p>Where there is great clarity in the development requirement this is something for you, here you can choose between different models, with
                        pre-decided number of hours a developer is going to dedicate on your project, time-limit and cost of the development.</p>
                </div>
            </SectionContent>

        </Section>
    )
}

export default RecomendDevstack


const Section = styled.section`
    display: flex;
    padding: 2rem 2rem;
    gap: 4rem;
    flex-direction: column;
    color: #000;
    background-color: #fff;
`


const SectionHeading = styled.section`
.links{
    h1{       
        display: flex;
        padding-left: 5rem;
        font-size: 48.83px;
        margin: 2rem 0;
    }


    ul{
            display:flex;
            justify-content: space-around;
            list-style-type: none;
            align-items: center;
            font-size: 27.34px;
            flex-wrap: wrap;

            li{
                padding: 0.5rem 2rem;
                transition: 0.3s ease-in-out;
                border-radius: 0.3rem;
              
               

                ${'' /* &:first-of-type, */}
                 &:hover{
                    background-color: var(--primary-color)
                }

                    a{
                            text-decoration: none;
                            color: white;
                            transition: 0.3s ease-in-out;
                            color: #858B8F;
                           

                     }
            }
        }
}


   
`



const SectionContent = styled.section`

        display: grid;
        grid-template-columns: 50% 50%;
        align-content: center;
        flex-wrap: wrap;

        .imagearea{
            padding: 0rem 5rem;
        }

        .text{
            padding: 0rem 3rem;

            h3{
                font-size : 34.18px;
                padding: 3rem 0;
            }
          

            p{
                font-size: 25px;
            }
        }


        @media screen and (min-width: 280px) and (max-width: 1080px){
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

}

`