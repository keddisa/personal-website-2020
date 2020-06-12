import React from "react"

import {Layout, SEO, Cover, Skills, Journey, Portfolio, Testimonials, Contact, TitleCard, TextContainer} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Cover /> */}
    <TitleCard  title="Andrew Keddis"
                subTitle="Make ideas happen"
                align="left"/>
    <TextContainer  sizeLarge={true}
                    content="Software Engineer | Educator | Business Professional | Adventurer | Traveler | Exercise Junkie"/>
    <TitleCard  title="My Playground"
                subTitle="If the only tool you have is a hammer, it's hard to eat spaghetti"
                align="right"/>
    <Skills />
    <TitleCard  title="My Journey"
                subTitle="How did I get here?"
                align="center"/>
    <Journey />
    <TitleCard  title="Glance at my work"
                subTitle="Check these samples out"
                align="left"/>
    <Portfolio />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage
