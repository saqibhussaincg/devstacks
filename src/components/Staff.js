import React from "react";
import styled from "styled-components";

import image01 from "../assets/group218.png";
import image02 from "../assets/group232.png";
import image03 from "../assets/group234.png";
import image04 from "../assets/group236.png";

const Staff = () => {
  return (
    <Section>
      <SectionParent>
        <SectionHeading>
          <h1>Why we recommend Staff Augmentation ?</h1>
        </SectionHeading>

        <SectionParentContent className="SectionParentContent">
          <div className="parenttext">
            <div className="text01">
              <p>
                Looking at all the staff augmentation benefits we recommend you
                it for your enterprise benefits. It allows you to successfully
                evaluate your enterprise potential by analysing your staff and
                resources which enables you to work on additional skills and
                training and acquiring benefits. Specially if you have just
                started out or a Small or mid-sized enterprise, you would not
                voluntarily participate into the process of staffing, hiring,
                providing employment benefits and taxes etc. Thus, we at Dev
                Technosys, keeping in mind all these things recommend you staff
                augmentation from which you will not only dough the problems but
                will be efficient enough to see to your technical and business
                needs.
              </p>

              <button>Get Free Consultation Now</button>
            </div>
          </div>
          <div className="parentbox">
            <div className="box">
              <div className="rectangleimg">
                <img src={image01} alt="image" />
              </div>

              <div className="text">
                <h3>Cost Effectiveness</h3>
                <p>
                  Not to mention the other perks, this alone is a great reason
                  you should switch to staff augmentation, if a start-up or a
                  SME you will be able to save a fortune.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="rectangleimg">
                <img src={image01} alt="image" />
              </div>

              <div className="text">
                <h3>Direct Access</h3>
                <p>
                  You will have complete freedom to involve in the development
                  process right from initiation to accomplishment. We always
                  welcome suggestions from the clients to make the product
                  impactfuls.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="rectangleimg">
                <img src={image01} alt="image" />
              </div>

              <div className="text">
                <h3>Time Efficient</h3>
                <p>
                  Not to mention the other perks, this alone is a great reason
                  you should switch to staff augmentation, if a start-up or a
                  SME you will be able to save a fortune.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="rectangleimg">
                <img src={image01} alt="image" />
              </div>

              <div className="text">
                <h3>IP Protection</h3>
                <p>
                  Complete protection and confidentiality is maintained, you
                  don’t lose your ownership on the intellectual property and
                  copyrights on the projects. we strictly maintain our work
                  ethics.
                </p>
              </div>
            </div>
          </div>
        </SectionParentContent>
      </SectionParent>
    </Section>
  );
};

export default Staff;

const Section = styled.section`
  display: flex;
  padding: 2rem 4rem;
  color: #000;
  background-color: #fff;
`;

const SectionParent = styled.section``;

const SectionHeading = styled.section`
  padding: 4rem 0rem;
  h1 {
    font-size: 48.33px;
  }
`;

const SectionParentContent = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;

  .parenttext {
    .text01 {
      padding-right: 3rem;

      p {
        font-size: 21.88px;
      }

      button {
        border-radius: 20px;
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: #000;
        background-color: #fdd800;
        border-radius: 33px;
        padding: 25px 30px;
        margin: 25px 0 0 0;
        cursor: pointer;
        font-size: 26px;
        font-family: var (--font-family);
      }
    }
  }

  .parentbox {
    display: grid;
    grid-template-columns: 50% 50%;
    align-content: center;
    flex-wrap: wrap;
    
    .box {
      display: flex;
      align-items: center;
      width: 300px;
      height: 251px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 8px;
      margin: 2rem 2rem;
      flex-wrap: wrap;
      text-align: center;
      background: #fff;

      .rectangleimg {
        position: absolute;
        z-index: 1;
        margin-bottom: 15rem;
        margin-left: 6rem;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        padding: 0rem 1rem;

        h3 {
          font-family: "Verdana";
          font-weight: 100;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px){

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: pink;
   

    
   

    .parenttext{
      text-align: center;
      
     

      .text01{
        padding: 0 2rem;
      }
    }

    .parentbox{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem 0rem;
      
     
      
    

      .box{
        display: flex;
       

      }
    }
  }
`;
