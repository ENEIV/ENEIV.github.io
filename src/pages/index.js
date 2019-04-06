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
import codepen from "../images/Social/codepen.png"
import github from "../images/Social/github.png"



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
  p {
    font-weight: bold;
    text-transform: none;
  }
  span {
    opacity: 0;
  }
  span:hover {
    opacity: 100;
  }
`

//
const InfoSection = styled.section`
  grid-column: 1/4;

  @media (max-width: 650px) {
    grid-row: 2 !important;
    grid-column: 1/13 !important;
    background-color: royalblue;
  }
`

const SkillSection = styled.section`
  grid-column: 4/8;

  @media (max-width: 650px) {
    grid-row: 3 !important;
    grid-column: 1/13 !important;
    background-color: seagreen !important;
  }
`

const PersonaSection = styled.section`
  grid-column: 8/13;

  @media (max-width: 650px) {
    grid-row: 1 !important;
    grid-column: 1/13 !important;
    background-color: rosybrown !important;
  }
`

//
const Icons = styled.div`
  margin: 0;
  padding: 0 0.5rem 0.5rem;
  img {
    margin: 0.5rem 1rem;
  }
`

const ENEIV = styled.div`
  margin: 0;
  font-size: 3rem;
  font-family: Times New Roman;
  transform: translate(0, 50%) rotate(-90deg);
`

const Lines = styled.div`
  margin: 0 auto;
  width: 0.075rem;
  background-color: whitesmoke;
`

const Socials = styled.div`
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
        <h1><Link to="/services/">Services</Link></h1>
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
        <img src={tools1} alt="design tools"/>
        <h5>Digital: Frontend</h5>
        <img src={tools2} alt="frontend tools"/>
        <h5>Digital: Backend</h5>
        <img src={tools3} alt="frontend tools"/>
      </Icons>
    </Card>
    </SkillSection>

    <PersonaSection>
    <div className="Logo" >
      <Lines style={{ height: `7rem`, transform: `translate(0, 20vh)`}}/>
      <ENEIV>ENEIV</ENEIV>
    </div>

    <div className="Bio" >
      <p style={{fontSize:`1rem`}}>Name: Enudi N. Enuenwosu</p>
      <p style={{fontSize:`1rem`}}>Role: Designer/Developer</p>
      <p style={{fontSize:`1rem`}}>Location: Chicago, IL</p>
    </div>

    <div className="Social" >
      <Lines style={{ height: `12rem`, transform: `translate(0, 17vh)` }} />
      <Socials>
        <li>
          <a href="">
            <img src={linkedin} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={behance} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={codepen} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={github} />
          </a>
        </li>
      </Socials>
    </div>
  </PersonaSection>

  </Layout>
)

export default IndexPage
