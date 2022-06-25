import React from 'react'
import styled from 'styled-components'


import image01 from '../assets/component01.png';
import image02 from '../assets/component02.png';
import image03 from '../assets/component03.png';
import image04 from '../assets/component04.png';
import image05 from '../assets/component05.png';
import image06 from '../assets/component06.png';
import image07 from '../assets/component07.png';
import image08 from '../assets/component08.png';

const TreeChart = () => {
    return (
        <Section>
            <div className='row'>

                <div className='col'>

                    <div className='text'>
                        <h2>We protect your idea</h2>
                        <p>We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship
                            on your idea.</p>
                    </div>

                    <img src={image01} alt='image' />
                </div>

                <div className='col'>
                    <img src={image02} alt='image' />
                    <div className='text'>
                        <h2>In-Depth Consultation</h2>
                        <p>We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship
                            on your idea.</p>
                    </div>
                </div>

                <div className='col'>

                    <div className='text'>
                        <h2>We protect your idea</h2>
                        <p>We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship
                            on your idea.</p>
                    </div>

                    <img src={image01} alt='image' />
                </div>

                <div className='col'>
                    <img src={image02} alt='image' />
                    <div className='text'>
                        <h2>In-Depth Consultation</h2>
                        <p>We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship
                            on your idea.</p>
                    </div>
                </div>




            </div>
        </Section>
    )
}

export default TreeChart

const Section = styled.section`
    margin: 6rem 10rem;
    color: #000;
    display: flex;
    justify-content: center;
   

    .row{
        display: flex;
        flex-direction: column;
        gap: 4rem 2rem;

        .col{
            display: flex;
            align-items: center;
            gap: 2rem 2rem;

            .text{
                width: 400px;
            }

           
            h2{
                font-size: 2rem;
            }
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px){
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;

            .row{
                display: flex;
                align-items: center;
                justify-content: center;
             

                .col{
                  
                    justify-content: center;
                    padding: 1rem 1rem;
                    width: 100vw;
                }
               
            }
            
    }
`




