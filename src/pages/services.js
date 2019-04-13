import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const Display = styled.h1`
font-size: 5rem;
grid-column: 1/13;
margin: 0.25rem 1rem;
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
    font-weight: bold;
    text-transform: none;
    padding: 0 0.65rem 1rem;
    border-bottom: 1px solid #202020;
  }
`

const SystemSection = styled.section`
  grid-column: span 4;

  @media (max-width: 650px) {
  grid-column: 1/13 !important;
}
`

const ServicePage = () => (
  <Layout>
    <SEO title="Services" keywords={[`ENEIV`, `Services`, `porfolio`,`gatsby`, `application`, `react` ]} />

    <Display>Services</Display>

    <SystemSection>
      <Card>
      <h1>Brand System</h1>
        <p>
          The Brand System is designed to construct or reinvisions a brand's persona and how this persona is voiced to the marketplace and its consumers. This system allows a business to turn a group of ideas into a solid concentrated framework, allowing the implementation of their ideas as well as engagement with their audience seamless. The foundation of the Digital + Print Systems is established within this system. Execution of assets explored in this system are explored in detail within the Digital System & Print System respectively.
        </p>
        <h6>Brand Identity + Design Language</h6>
        <h6>Brand Persona + Strategy</h6>
        <h6>Material Assets Exploration</h6>
        <h6>Digital Assets Exploration</h6>
        <h6>Style / Implementation Guide</h6>
      </Card>
    </SystemSection>

    <SystemSection>
      <Card>
      <h1>Digital System</h1>
        <p>
          The Digital System encapsulates the persona of the brand into digestable elements for the web. the brand is conveyed in every medium accessible to the digital consumer. Each component gives a unique insight of who we are and what we stand for.
        </p>
        <h6>UI/UX Process</h6>
        <h6>Advertising + Marketing</h6>
        <h6>Web Component Library</h6>
        <h6>Development + Deployment</h6>
        <h6>Optimization</h6>
        <h6>Digital Style / Implementation Guide</h6>
      </Card>
    </SystemSection>

    <SystemSection>
      <Card>
      <h1>Print System</h1>
        <p>
          The Print System introduces a brands ideas and beliefs into the material world. Creating an experience the user can see, hear, feel, even smell and taste.
        </p>
        <h6>UI/UX Process</h6>
        <h6>Advertising + Marketing</h6>
        <h6>Material Component Library</h6>
        <h6>Stationary + Packaging</h6>
        <h6>Print Style / Implementation Guide</h6>
      </Card>
    </SystemSection>

  </Layout>
)

export default ServicePage