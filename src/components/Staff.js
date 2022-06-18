import React from 'react'

import image01 from '../assets/group218.png'
import image02 from '../assets/group232.png'
import image03 from '../assets/group234.png'
import image04 from '../assets/group236.png'



const Staff = () => {
    return (
        <Section>
            <SectionParent>

                <SectionHeading>
                    <h1>Why we recommend Staff Augmentation ?</h1>
                </SectionHeading>

                <SectionParentContent>
                    <div className='text'>
                        <p>Looking at all the staff augmentation benefits we recommend you it for your enterprise benefits. It allows you to successfully evaluate your enterprise potential by analysing your staff and resources which enables you to work on additional skills and training and acquiring benefits.

                            Specially if you have just started out or a Small or mid-sized enterprise, you would not voluntarily participate into the process of staffing, hiring, providing employment benefits and taxes etc. Thus, we at Dev Technosys, keeping in mind all these things recommend you staff augmentation from which you will not only dough the problems but will be efficient enough to see to your technical and business needs.</p>


                        <button>Get Free Consultation Now</button>
                    </div>


                    <div className='boxes'>
                        <div className='box'>
                            <div className='rectangleimg'>
                                <img src={image01} alt="image" />
                            </div>

                            <div className='text'>
                                <h3>Cost Effectiveness</h3>
                                <p>Not to mention the other perks,
                                    this alone is a great reason you
                                    should switch to staff
                                    augmentation, if a start-up or
                                    a SME you will be able to save
                                    a fortune.</p>
                            </div>
                        </div>
                    </div>
                </SectionParentContent>





            </SectionParent>
        </Section>
    )
}

export default Staff