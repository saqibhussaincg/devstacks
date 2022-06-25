import React from "react";
import styled from "styled-components";

import premiumimg from "../assets/premium.png";
import flexibilityimg from "../assets/flexibility.png";
import speedimg from "../assets/speed.png";
import teamimg from "../assets/team.png";

const Cards = () => {
  return (
    <Section>
      <div className="box">
        <span><img src={premiumimg} alt="premium image" /></span>

        <h3>Quality</h3>

        <p>
          We work on certain ethics and our development process is a reflection
          of the same, we bring you unparalleled quality stuff and highly
          functional websites and applications
        </p>
      </div>
      <div className="box">
      <span><img src={speedimg} alt="premium image" /></span>

        <h3>Speed</h3>

        <p>
        We understand how important time is for our clients, and we gauge our speed in accordance to it, now don’t wait for your web projects and web products because we deliver you before time.
        </p>
      </div>
      <div className="box">
      <span><img src={flexibilityimg} alt="premium image" /></span>

        <h3>Flexibility</h3>

        <p>
        Customise us, mould us, personalise us – in short exploit our services under your terms and conditions. Now, take control of your projects, and guide us with your wonderful insights as per your needs.
        </p>
      </div>
      <div className="box">
      <span><img src={teamimg} alt="premium image" /></span>

        <h3>Engagement</h3>

        <p>
        We work on certain ethics and our development process is a reflection of the same, we bring you unparalleled quality stuff and highly functional websites and applications
        </p>
      </div>
    </Section>
  );
};

export default Cards;

const Section = styled.section`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  padding: 2rem 0;
  background-color: #fff;
  


  .box{
    display: flex;
    padding: 1rem 0;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    border-radius: 16px;
    border: 1px solid var(--primary-color);
    width: 300px;
    padding: 2rem 1rem;
    ${'' /* margin: 1rem 1rem; */}

    h3{
        font-size: 32px;
        font-weight: 100;
        color: #000;
    }

    p{
        color: #000;
    }

    .img{
        height: 5vh;
    }

  }


  @media screen and (min-width: 280px) and (max-width: 1080px){

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .box{
         ${'' /* margin-top: 2rem; */}
         
      }
  }
`;
