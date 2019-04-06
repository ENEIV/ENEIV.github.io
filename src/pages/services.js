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
  }
`

const SystemSection = styled.section`
  grid-column: span 4;

  @media (max-width: 650px) {
  grid-column: 1/13 !important;
  background-color: seagreen !important;
}
`

const ServicePage = () => (
  <Layout>
    <SEO title="Services" keywords={[`ENEIV`, `Services`, `porfolio`,`gatsby`, `application`, `react` ]} />

    <Display>Services</Display>

    <SystemSection>
      <Card>
      <h1>Brand System</h1>
        <p>Enudi N. Enuenwosu is a freelance/contract for hire based in Chicago, IL (the best city ever). He specializes in the creation and implementation of Design /Development Systems to help companies scale efficiently. His most dangerous skillset, his unrelenting pursuit of excellence through knowledge and discipline. 
        </p>
      </Card>
    </SystemSection>

    <SystemSection>
      <Card>
      <h1>Digital System</h1>
        <p>Enudi N. Enuenwosu is a freelance/contract for hire based in Chicago, IL (the best city ever). He specializes in the creation and implementation of Design /Development Systems to help companies scale efficiently. His most dangerous skillset, his unrelenting pursuit of excellence through knowledge and discipline. 
        </p>
      </Card>
    </SystemSection>

    <SystemSection>
      <Card>
      <h1>Print System</h1>
        <p>Enudi N. Enuenwosu is a freelance/contract for hire based in Chicago, IL (the best city ever). He specializes in the creation and implementation of Design /Development Systems to help companies scale efficiently. His most dangerous skillset, his unrelenting pursuit of excellence through knowledge and discipline. 
        </p>
      </Card>
    </SystemSection>

  </Layout>
)

export default ServicePage