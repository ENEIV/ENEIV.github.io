import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

import linkedin from "../images/Social/linkedin.png"
import behance from "../images/Social/behance.png"
import github from "../images/Social/github.png"

import Persona_Space from "../images/Persona-Space.svg"
import ENEIV_Ag from "../images/ENEIV-Ag.svg"
import Seal from "../images/Persona-Tiger.svg"

const Display = styled.h1`
font-size: 5rem;
grid-column: 1/13;
margin: 0.25rem 1rem;

 @media (max-width: 650px) {
  font-size: 3.5rem;
 } 

`

const Card = styled.div`
  color: white;
  display: inline-block;
  border-radius: 0.1em;
  border: 1px solid #202020;
  background: #151515;
  vertical-align: top;
  margin-bottom: 0.5rem;
  h1 {
    padding: 0.5em 0 0.2em 0.5em;
    margin: 0 0 0.25em 0;
    border-bottom: 1px solid #202020;
    vertical-align: middle;
  }
  h5 {
    margin: 0.5rem 0 0 0;
    padding: 0 0 0.25rem 0.75rem;
  }
  h6 {
    margin: 0.5rem 0 0.25rem 0;
    padding: 0 0 0.25rem 0.75rem;
    border-bottom: 1px solid #202020;
  }
  h6:last-child {
    border: none;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #fa9917;
    font-size: 0.9rem;
  }
  p {
    padding: 0 0.65rem 1rem;
    font-weight: bold;
    text-transform: none;
    border-bottom: 1px solid #202020;
  }
`

const Contacts = styled.div`
  grid-row: 1;
  grid-column: 1/7;

  @media (max-width: 650px) {
    grid-row: 1 !important;  
    grid-column: 1/13 !important;
}
`


const PersonaSection = styled.section`
  grid-row: 1;
  grid-column: 8/13;

  @media (max-width: 650px) {
    grid-row: 2 !important;
    grid-column: 1/13 !important;
  }
`

  const Logo = styled.div`
  display: inline-block;
  width: 10%;
  height: 100%;
  margin: 5rem 0 0 0;
  vertical-align: top;
  `

    const ENEIV = styled.img`
    margin: 0;
    padding: 0;
    display: inline-block;
  `

    const Bio = styled.div`
    width: 80%;
    display: inline-block;
    `

    const Tigre = styled.img`
      width: 25%;
      margin: 0.15rem;
      padding: 0.25rem;
      display: inline-block;
    `

    const Intel = styled.div`
      width: 70%;
      display: inline-block;
      vertical-align: top;
      padding: 1rem 0 0 0;
      p {
        font-size: 1rem;
        padding: 0.25rem 0  0 0.75rem;
      }
      span {
        color: black;
        margin: 0 0.25rem 0 0;
        padding: 0.1rem 0.2rem;
        background-color: whitesmoke;
      }
    `

  const Persona = styled.img`
    width: 100%;
    margin: auto;
    border: 1px solid #303030;
    display: inline-block;
  `

  const Socials = styled.div` 
    width: 10%;
    vertical-align: top;
    display: inline-block;
    list-style-type: none;
    transform: translate(0, 20vh);
    li {
      text-align: center;
    }
    img {
      height: 1.5rem;
    }
    img:hover {
      height: 1.75rem;
    }
  `



const ServicePage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`ENEIV`, `Contact`, `porfolio`,`gatsby`, `application`, `react` ]} />
    
    <Contacts>
    <Display>Get in touch</Display>

      <Card>
        <h1>Contact</h1>
        <p>
         Thank you for visiting my portfolio website. I update my site periodically with new projects and info about myself so feel free to stop by again anytime! I would love to talk and answer any questions you might have you can reach me through these channels, thanks for stopping by!
        </p>
        <h6>Services Inquiry: EEnuenwosu@gmail.com</h6>
        <h6>Designs: Behance </h6>
        <h6>Code: Github + Codesandbox</h6>
      </Card>
    </Contacts>

    <PersonaSection style={{gridRow: `1`}}>
      <Logo>
        <ENEIV src={ENEIV_Ag}  />
      </Logo>

      <Bio>
        <Persona src={Persona_Space} />
        <div>
          <Tigre src={Seal} />
          <Intel>
            <p className="Intel"><span>Name:</span> Enudi N. Enuenwosu</p>
            <p className="Intel"><span>Role:</span> Designer/Developer</p>
            <p className="Intel"><span>Location:</span> Chicago, IL</p>
          </Intel>
        </div>
      </Bio>

      <Socials>
      <li>
          <a href="https://www.linkedin.com/in/enudi-enuenwosu-b0a463125/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin}  alt="Linked-In Profile" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/ENEIV/" target="_blank" rel="noopener noreferrer">
            <img src={behance} alt="Behance Profile" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ENEIV" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub Profile" />
          </a>
        </li>
      </Socials>
</PersonaSection>
  </Layout>
)

export default ServicePage