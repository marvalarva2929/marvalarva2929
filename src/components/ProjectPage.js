import './ProjectPage.css'
import { Fade } from 'react-reveal'
import InfoCard from './InfoCard.js'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

const ProjectPage = () => {
    

    const cards = [
//        {
//            title: "Competitive Programming",
//            subtitle: "bessie the cow 🤓",
//            text: (
//                        <div>
//                            <Fade bottom duration="500" delay="100">
//                                <h1> something here !!!! </h1>
//                            </Fade>
//                        </div> 
//            )
//        },
//        {
//            title: "Swerve Drive",
//            subtitle: "Strafe AND turn???",
//            text: (
//                    <div>
//                        <Fade id={1} bottom duration="500" delay="100">
//                            <h3> something here !! </h3>
//                        </Fade>
//                    </div>
//            )
//        },
//        {
//            title: "Platmorpher",
//            subtitle: "A little basic game in C++",
//            text: (
//                    <div> 
//                        <Fade bottom duration="500" delay="100">
//                            <h1> something here ! </h1>
//                        </Fade>
//                    </div>
//            )
//        },
//        {
//            title: "marvalarva2929",
//            subtitle: "THIS WEBSITE",
//            text: (
//                    <div> 
//                        <Fade bottom duration="500" delay="100">
//                            <h3> something here !!!!!! </h3>
//                        </Fade>
//                    </div>
//            )
//        },
    ]
    
    return (
        <> 
            <div className="project-wrapper"> 
                <div className="project-left">
                    {
                        cards.map((card, key) => (
                            <Button style={{backgroundColor: "transparent", border: "0px transparent solid"}} as={Link} to={`/projects/${key+1}`} > 
                                <Fade bottom delay={key*50} duration={500}> 
                                    <InfoCard title={card.title} subtitle={card.subtitle}/>
                                </Fade>
                            </Button> 
                        ))
                    }
                
                </div>

            <Fade duration= {500} delay="100">
                <div className="project-right">
                    <Routes>
                        <Route path='/0' element={<> </>}/> 
                        {
                            cards.map((card, key) => (
                                <> 
                                    <Route path={`/${key + 1}`} element={card.text} />
                                </> 
                            ))
                        }

                    </Routes>
                </div>             
            </Fade>
        </div>
    </>
    )
}

export default ProjectPage;
