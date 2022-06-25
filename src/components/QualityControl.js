import React from 'react'
import styled from 'styled-components';

import qualityimg from '../assets/qualitycontrol.png';

const QualityControl = () => {
    return (
        
        <Section>
            <SectionHeading>
            <div className='headingmain'>
                <h1>Comprehensive Approach To Quality </h1>
                </div>
            </SectionHeading>

            <SectionData>
            <div className='leftbox'>
                <ul>
                    <li>Planning</li>
                    <li>Assurance</li>
                    <li>Control</li>
                </ul>

                <h3>Quality Control</h3>

                <p>In order to test the code and to monitor its consistency, we stick to the remarkable performance standards that are sound on the grounds of quality and excellence.</p>
            </div>

            

            <div className='image'>
                <img src={qualityimg} alt='quality control' />
            </div>

            </SectionData>
        </Section>
    )
}

export default QualityControl

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 2rem 2rem;
    flex-direction: column;
    gap: 4rem;
    background:white;
    color: #000;
    
`

const SectionHeading = styled.section`

        display: flex;

      .headingmain{
        h1{
        font-size: 50px;
        margin-left: 5rem;
       }

      } 
    
  
`

const SectionData = styled.section`{
    display: flex;
    justify-content: space-between;

   
    }
    
    .leftbox{
        width: 800px;
        padding-left: 5rem;
        


        ul{
            display:flex;
            list-style-type: none;
            gap: 3rem;
            align-items: center;
            font-size: 34px;

            li{
                ${'' /* padding: 0.5rem 2rem; */}
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

        h3{
            font-size: 40px;
            margin: 4rem 0;
        }

        p{
            font-size: 25px;
        }

    }

    @media screen and (min-width: 280px) and (max-width: 1080px){

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        gap: 2rem;

            
        .headingmain{

            h1{

            padding: 4rem 4rem;
            margin: 0 auto;
            
            }
        }
       
         
        .leftbox{
             display: flex;
             flex-direction: column;
             align-items: center;
             width: 100vw;
             

             h3{
             align-items: center;
             margin-right: 5rem;

             }
             

            ul{
                flex-direction: column;
                margin-top: 2rem;
               
                li{
                    text-align: center;
                    padding-right: 5rem;
                    align-items: center;
                }
            }

            p{
                margin-right: 5rem;
                padding: 1rem 4rem;
                
            }
        }

    }

    
`

