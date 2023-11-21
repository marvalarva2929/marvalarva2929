import './BlogPage.css'
import { Fade } from 'react-reveal'
import InfoCard from './InfoCard.js'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

const ProjectPage = () => {
    

    const cards = [
        {
            title: "What I want out of life",
            subtitle: "What is worth pursuing?",
            text: (
                        <div>
                            <Fade bottom duration="500" delay="100">
                                <h1> I'm not very old, but I think that after a few years it is inevitable that all humans face some sort of problem. Nobody's life is perfect and 
                every once and a while, tragedy, difficulty, or mistakes threaten our security. </h1>

                                <h1> And not only this, but we all have some sort of mental image of who we <i> want </i> to be: Rich, famous, successful, etc. We often fall short of our
                                desired selves, and I think these shortcomings also add to the "problems" of our lives. </h1>
                            
                                <h1> Essentially, I think if you asked someone what they hate most about their life, most of their complaints would either be from events that occured to them 
                                or that they went through (tragedy, difficulty), or who they are as a person (wealth, success). "I wish that didn't happen to me", or "I wish I did this instead of that", or
                                "I wish I was like this instead of that". </h1>

                                <h1> I hope it is not presumptious of me to assume that I have gone through a fair share of problems and tragedies in my own life, and 
                                unsurprisingly have many areas in my life that I feal inadequate in. For example, I am not very good at competitive math, and that trait is something that I somewhat despise.</h1>

                                <h1> Regardless of my desire to become certain things or my dislike of certain traits, or my regrets about past events or decisions, if someone gave me the option to 
                                live the life of someone else who had every trait that I longed for and never went through the times I did, I would resolutely refuse. If I had the option to live the life of 
                                someone smart like Tarence Tao, Albert Einstien, (any other well accomplished person), or maybe someone who lived a life of utter comfort and avoided the mistakes and 
                                tragedies I went through, I would again refuse. Why? Do I not desire to become those traits and rid myself of those shameful decisions and experiences? </h1>

                                <h1> For me, the answer is that there is value in the things I have experienced. From the outside, my life is not nearly the most successful or admirable, there are people my 
                                age with much brighter futures and much more prestigious accomplishments. Maybe they live much happier. And still, I find that the lessons that I have learned through 
                                experience is priceless compared to some perceived "value" of life based off of success and accomplishment. </h1>
                            
                                <h1> It all boils down to what I really want out of life. And to me, once you can escape a your own head and try to look at life objectively, you realize that 
                                life really is nothing but what we experience. Sure, there are people more successful than me, but on our deathbeds, the only thing we will remember are the lessons we learned,
                                the thoughts we had, the people we met, and our collective experiences that shaped who we became. Consider a person who made a terrible mistake and spent their entire life in 
                                prison, or a person who grew up poor and was never able to escape poverty, or a baby that only got to live 2 years before dying of a disease. All of those lives seem tragic, and
                                yet they still gained something from what we call "life", their experience. At the end of their life, they still had some nuanced understanding of the world they lived in,
                                a worldview that was likely never shared exactly by anyone ever before nor will ever be held again (to an extent). Each was able to touch a different part of truth, regardless of 
                                how sad or unaccomplished they were. </h1>
                                
                                <h1> This is my goal in life, to experience as much as possible (ideally anyways) rather than wealth or accomplishment. I only have one shot at life, maybe 80, 90 years if I'm 
                                lucky, of living. And on my deathbed, I want to think that I didn't waste it; that I knew something about the universe that nobody else before me had and nobody 
                                else after me will (again, to an extent). To live the life of a billionare, but to have never known what life really is, to me is a waste. </h1>

                                <h1> The main motivation for this whole topic was a question that I thought, that if someone offered me a pill that would make me immortal, would I take it? Would I want to live
                                forever? Maybe my answer sounds rediculus, but no, I would not, and for the simple reason that I want to know what death is like. There has not been a single human that was able
                                to escape death, and there has been nobody to come back after dying to tell about how it went. Again, life to me is about experience, and death itself, is one of the most
                                mysterious. Moments before I die, will my life flash before my eyes? Will it all just go quietly? I do not know, but after those moments, <i> I shall know, </i> and I think then 
                                I will have learned more about what life really is, even if for a short moment. I can die peacefully knowing that in some way I discovered something.</h1>
                                </Fade>
                        </div> 
            )
        },
    ]
    
    return (
        <> 
            <div className="blog-wrapper"> 
                <div className="blog-left">
                    {
                        cards.map((card, key) => (
                            <Button style={{backgroundColor: "transparent", border: "0px transparent solid"}} as={Link} to={`/blog/${key+1}`} > 
                                <Fade bottom delay={key*50} duration="500"> 
                                    <InfoCard title={card.title} subtitle={card.subtitle}/>
                                </Fade>
                            </Button> 
                        ))
                    }
                
                </div>

            <Fade duration="500" delay="100">
                <div className="blog-right">
                    <Routes>
                        <Route path='/0' element={<>

                            <Fade bottom duration="500" delay="100">

                                <h1> I write my posts with the risk that I will either be dreadfully wrong, force the reader to endure cringe unimaginable, or sound basic and pointless. Either way, I will have made a fool of myself.</h1>
                                <h1> I am going to try to avoid that, but if you do find something innacurate or that you disagree with my ideas, please don't hesitate to reach out to me! I love to discuss and I'll take any opportunity to improve as a thinker and writer. </h1>
                            </Fade> 
                        </>}/> 
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
