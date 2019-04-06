/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import styled from "styled-components"
import "./fonts/fonts.css"
import "./layout.css"

const Grid = styled.main`
  display: grid;
  height: 100%;
  padding: 0 0.5rem;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 0.5rem;
`
const Outro = styled.footer` 
  display: block;
  align-items: center;
  text-align: center;
  font-size: 0.85rem;
  width: 100%;
  position: fixed;
  bottom: 0.5rem;
  color: grey;
  a {
    color: darkgrey;
    text-decoration: underline;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

          <Grid>{children}</Grid>
        <Outro>
          © ENEIV {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Outro>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
