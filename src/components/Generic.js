import React from "react";

import image01 from "../assets/frame225.png";
import image02 from "../assets/frame226.png";
import image03 from "../assets/frame227.png";
import image04 from "../assets/frame228.png";
import styled from "styled-components";

const Generic = () => {
  return (
    <Section>
      <div className="heading">
        <h1>Think Unique? Then why settle for Generic? </h1>
      </div>

      <div className="parentbox">
        <div className="box">
          <span>
            <img src={image01} alt="image" />
          </span>

          <p>Cost-Effective Pricing</p>
        </div>
        <div className="box">
          <span>
            <img src={image02} alt="image" />
          </span>

          <p>Cost-Effective Pricing</p>
        </div>
        <div className="box">
          <span>
            <img src={image03} alt="image" />
          </span>

          <p>Cost-Effective Pricing</p>
        </div>
        <div className="box">
          <span>
            <img src={image04} alt="image" />
          </span>

          <p>Cost-Effective Pricing</p>
        </div>
      </div>
    </Section>
  );
};

export default Generic;

const Section = styled.section`
  display: flex;
  padding: 2rem 4rem;
  color: #000;
  background-color: #fff;
  flex-direction: column;
  gap: 4rem;

  .heading{
    h1{
        font-size: 48.33px;
    }
  }


  .parentbox{
    display: flex;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 14px;
    height: 386px;
    justify-content: space-around;
    
   

    .box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      p{
        font-size:27.34px;
      }
  }
  }
`;
