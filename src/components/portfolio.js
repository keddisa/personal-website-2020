import React from 'react';
import PortfolioCard from './portfolio-card';
import Technologies from '../technologies';
import ConcentrationGame from '../images/concentration-game.jpg';

const Portfolio = () => {
    const projects = [
        {
            displayImage: ConcentrationGame,
            title: "Concentration Game",
            description: "Test your concentration. Two player game developed with React and React Hooks",
            technologies: [Technologies.html, Technologies.css, Technologies.react],
            githubLink: "https://github.com/keddisa/concentration-game-react",
            liveLink: 'https://shinkei-suijaku.s3.us-east-2.amazonaws.com/index.html'
        }
    ]

    const renderProjects = () => {
        return projects.map((project, index) => {
            return <PortfolioCard key={index} project={project}/>
        })
    }

    return (<div className="portfolio">
        {renderProjects()}
    </div>)
}

export default Portfolio;