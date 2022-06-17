import React from 'react'

import qualityimg from '../assets/qualitycontrol.png';

const QualityControl = () => {
  return (
    <Section>
        <div className='heading'>
            <h1>Comprehensive Approach To Quality</h1>
        </div>

        <div className='leftbox'>
            <ul>
                <li>Planning</li>
                <li>Planning</li>
                <li>Planning</li>
            </ul>

        <h3>Quality Control</h3>

        <p>In order to test the code and to monitor its consistency, we stick to the remarkable performance standards that are sound on the grounds of quality and excellence.</p>
        </div>

        <div className='image'>
            <img src={qualityimg} alt='quality control' />
        </div>
    </Section>
  )
}

export default QualityControl