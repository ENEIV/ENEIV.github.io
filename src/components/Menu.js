import React from "react"
import styled from "styled-components"
//import "./Menu.css"

const Bars = styled.div` 
  display: inline-block;
  vertical-align: middle;
  margin: 0 1rem 0 0.5rem;
`

const Bar = styled.div`
  height: 1.5px;
  margin-bottom: 0.5rem;
  background-color: whitesmoke;
`

const Menu = () => (
  <Bars>
    <Bar style={{ width: `2rem`}} onClick={} />
    <Bar style={{ width: `1rem`}} onClick={} />
  </Bars>
)

export default Menu