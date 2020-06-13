import React from "react"

import {Layout, SEO, Cover, Skills, Journey, Portfolio, Testimonials, Contact, TitleCard, TextContainer} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Cover /> */}
    <TitleCard  title="Andrew Keddis"
                subTitle="Make ideas happen"
                align="left"
                backgroundImage="skydiving"/>
    <TextContainer  sizeLarge={true}
                    content="Software Engineer | Educator | Business Professional | Adventurer | Traveler | Exercise Junkie"/>
    <TitleCard  title="My Playground"
                subTitle="If the only tool you have is a hammer, it's hard to eat spaghetti"
                align="right"
                backgroundImage="handyman"/>
    <Skills />
    <TitleCard  title="My Journey"
                subTitle="How did I get here?"
                align="center"
                backgroundImage="journey-title"/>
    <Journey />
    <TitleCard  title="Glance at my work"
                subTitle="Check these samples out"
                align="left"
                backgroundImage="portfolio-title"/>
    <Portfolio />
    <TitleCard  title="Testimonials"
                subTitle="What others have said"
                align="right"
                backgroundImage="testimonials-title"/>
    <Testimonials />
    <TitleCard  title="Get in touch"
                subTitle="Take action now"
                align="center"
                backgroundImage="contact-title"/>
    <Contact />
  </Layout>
)

export default IndexPage
