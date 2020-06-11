import React from "react"

import {Layout, SEO, Cover, Skills, Journey, Portfolio, Testimonials, Contact, TitleCard, TextContainer} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleCard  title="Andrew Keddis"
                subTitle="Make ideas happen"
                align="left"/>
    <TextContainer  sizeLarge={true} />
    <Cover />
    <Skills />
    <Journey />
    <Portfolio />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage
