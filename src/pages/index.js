import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/cover"
import Skills from "../components/skills"
import Journey from "../components/journey"
import Portfolio from "../components/portfolio"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import TitleCard from "../components/title-card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleCard  title="Andrew Keddis"
                subTitle="Make ideas happen"
                align="left"/>
    <Cover />
    <Skills />
    <Journey />
    <Portfolio />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage
