import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

import loadout from "../images/loadout.svg"
import tools1 from "../images/tools-1.svg"
import tools2 from "../images/tools-2.svg"
import tools3 from "../images/tools-3.svg"

import linkedin from "../images/Social/linkedin.png"
import behance from "../images/Social/behance.png"
import github from "../images/Social/github.png"

import persona from "../images/persona.png"
import ENEIV_Ag from "../images/ENEIV-Ag.svg"
import Seal from "../images/ENEIV-Seal.png"



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
    margin: 0.5rem 0 0.25rem 0;
    padding: 0 0 0.25rem 0.75rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #fa9917;
  }
  p {
    font-weight: bold;
    text-transform: none;
  }
  span {
    opacity: 0;
  }
`

//
const InfoSection = styled.section`
  grid-column: 1/4;

  @media (max-width: 650px) {
    grid-row: 2 !important;
    grid-column: 1/13 !important;
  }
`

//
const SkillSection = styled.section`
  grid-column: 4/8;

  @media (max-width: 650px) {
    grid-row: 3 !important;
    grid-column: 1/13 !important;
  }
`

 const Tools = styled.img`

 `

//
const PersonaSection = styled.section`
  grid-column: 8/13;

  @media (max-width: 650px) {
    grid-row: 1 !important;
    grid-column: 1/13 !important;
  }
`
  const Icons = styled.div`
    margin: 0;
    padding: 0 0.5rem 0.5rem;
    img {
      margin: 0.5rem 1rem;
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
      width: 3rem;
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
    width: 90%;
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


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ENEIV`,`portfolio`,`gatsby`, `application`, `react`]} />

    <InfoSection>
      <Card>
        <h1>Brief</h1>
        <p>Enudi N. Enuenwosu is a freelance/contract for hire based in Chicago, IL (the best city ever). He specializes in the creation and implementation of Design /Development Systems to help companies scale efficiently. His most dangerous skillset, his unrelenting pursuit of excellence through knowledge and discipline. 
        </p>
      </Card>

      <Card>
        <h1><Link to="/services/">Services</Link><span>explore</span></h1>
        <p>These systems serve as a foundation for clients and their businesses. Creating an ecosystem that gives a compelling direction towards their desired outcome and a framework that scales and growes with them.</p>
          <h5 style={{borderBottom: `1px solid #202020`}}>Brand Systems</h5>
          <h5 style={{borderBottom: `1px solid #202020`}}>Digital Systems</h5>
          <h5>Print Systems</h5>
      </Card>
    </InfoSection>
    
    <SkillSection>
    <Card style={{width: `100%`}}>
      <h1>Current Dev Loadout</h1>
      <Icons>
        <img src={loadout} alt="development stack"/>
      </Icons>
    </Card>

    <Card style={{width: `100%`}}>
      <h1>Tools of the trade</h1>
      <Icons>
        <h5>Design</h5>
        <Tools src={tools1} alt="design tools"/>
        <h5>Digital: Frontend</h5>
        <Tools src={tools2} alt="frontend tools"/>
        <h5>Digital: Backend</h5>
        <Tools src={tools3} alt="backend tools"/>
      </Icons>
    </Card>
    </SkillSection>

    <PersonaSection>

    <Logo>
      <ENEIV src={ENEIV_Ag}  />
    </Logo>

    <Bio>
      <Persona src={persona} />
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

export default IndexPage
