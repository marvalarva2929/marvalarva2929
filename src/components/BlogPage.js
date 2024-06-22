import './BlogPage.css'
import { Fade } from 'react-reveal'
import InfoCard from './InfoCard.js'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Markdown from 'react-markdown'
import socialism from './socialism.md'
import purpose from './purpose.md'

const ProjectPage = () => {
    
	
   
    return (
        <> 
            <div className="blog-wrapper"> 
                <div className="blog-left">
                    {
                        cards.map((card, key) => (
                            <Button style={{backgroundColor: "transparent", border: "0px transparent solid"}} as={Link} to={`/blog/${key+1}`} > 
                                <Fade bottom delay={key*50} duration="500"> 
                                    <InfoCard title={card.title} subtitle={card.subtitle} date={card.date}/>
                                </Fade>
                            </Button> 
                        ))
                    }
                
                </div>

            <Fade duration={500} delay="100">
                <div className="blog-right">
                    <Routes>
                        <Route path='/0' element={<>

                            <Fade bottom duration={500} delay="100">

                                <h1> I write my posts with the risk that I will either be dreadfully wrong, force the reader to endure cringe unimaginable, or sound basic and pointless. Either way, I will have made a fool of myself.</h1>
                                <h1> I am going to try to avoid that, but if you do find something innacurate or that you disagree with my ideas, please don't hesitate to reach out to me! I love to discuss and I'll take any opportunity to improve as a thinker and writer. </h1>
                            </Fade> 
                        </>}/> 
                        {
                            cards.map((card, key) => (
                                <> 
                                    <Route path={`/${key + 1}`} element=<Markdown children={card.text}/> />
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


    const cards = [
        {
            title: "My thoughts on socialism and society in the US",
            subtitle: "The death of the American Dream?",
            date: "1/17/2024",
            text: socialism 
		},

        {
            title: "What I want out of life",
            subtitle: "What is worth pursuing?",
            date: "11/21/2023",
            text: purpose 
		},
    ]
 

export default ProjectPage;
