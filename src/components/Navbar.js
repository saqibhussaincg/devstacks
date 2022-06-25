import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../assets/devstacklogo.png";
import image from '../assets/balancingscales.png';



import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const Navbar = () => {

  const [navState, setNavState] = useState(false);

  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
      </div>

      <div className={`links ${navState ? "show" : "hide"}`}>

        <ul>
          <li>
            <a href="home">Technologies</a>
          </li>
          <li>
            <a href="map">Engineering</a>
          </li>
          <li>
            <a href="about">Services</a>
          </li>
          <li>
            <a href="news">Resources</a>
          </li>
          <li>
            <a href="news">IP Protection</a>
          </li>
        </ul>

        <div className="login-btn">
          <button>
            Contact Us
          </button>
        </div>

      </div>
      <div className='awaeenImg' style={{
        display: "none"
      }}>
        <img src={image} />
      </div>


    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
   display: flex;
   justify-content: space-around;
   background-color: #fff;
   height: 150px;
   

   .brand{
    display: flex;
    align-items: center;

    .logo{
        img{
            height: 5vh;
        }
    }
    .toggle{
        display: none;
    }
   }

   .links{
        display: flex;
        align-items: center;
        justify-content: space-between;
        justify-content: center;

        ul{
            display:flex;
            list-style-type: none;
            gap: 3rem;
            align-items: center;

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

   .login-btn{
        display: flex;
        align-items: center;
        justify-content: center;


            button{
                
                border-radius: 16px;
                border: 1px solid var(--primary-color);
                background-color: transparent;
                color: #000;
                background-color: #FDD800;
                border-radius: 16px;
                padding: 0.8rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-size: 18px;
                font-family: var (--font-family);
                

            }
      }


    @media screen and (min-width: 280px) and (max-width: 1080px){
      display: flex;
      height: auto;
      overflow-y: hidden;
     
    ${'' /* .awaeenImg {
      display: inline !important;
    } */}
      
    
      .brand{
        position: absolute;
        width: 100%;
        padding: 20px 2rem;
        z-index: 2;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
       
        

          .toggle{
            display: block;
            color: #000;
            svg{
              font-size: 2rem;
            }
          }

      }

      .links{
        position: absolute;
        margin-top: 2rem;
        width: 100vw;
        padding: 3rem 0;
        transition: 0.4s ease-in-out;
        gap: 2rem;
        flex-direction: column;
        background-color: #3F3A38;
        
       


        ul{
          flex-direction: column;
          gap: 1rem;
          margin-top: 10px;
          
        }


       
      }

      .login-btn{
        position: relative;
        flex-direction: row;
      }

      .show{
        top: 0;
      }

      .hide{
        top: -600px;
      }
    }
` 