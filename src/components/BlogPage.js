import './BlogPage.css'
import { Fade } from 'react-reveal'
import InfoCard from './InfoCard.js'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

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


    const cards = [
        {
            title: "My thoughts on socialism and society in the US",
            subtitle: "The death of the American Dream?",
            date: "1/17/2024",
            text: (
                <>
                    <p> 
                        I haven't posted in a while, admittedly due to my laziness and my lack of wanting to write about my thoughts. Nevertheless I'm glad I mustered the will to write this today.
                        <br/> <br/>
                        
                        Recently I think I have been spending too much time online. I see videos on instagram or posts on reddit about how "distopian" and behind the United States is compared to, say, Europe due to lack of social welfare programs, or maybe how the majority of the people in the US are supposedly slaving away for the "top 1%" in wealth, or maybe the terrible work life balance, etc compared to other countries in jobs. 

                        <br/> <br/>
                        
                        And it gets me thinking, what do I want? It appears as if the majority of youth my age share <i> somewhat </i> similar beliefs as mentioned above in regards to society. Yet I still feal conflicted. For context, my parents are immigrants and spent a lot of time in their youth trying their hardest to come to the US. This world is what I grew up in, and I was always told that the world will pay me for my skills. That I needed to work hard to make a future for myself. That an enjoyable life was always possible if I just gave up a few temporary youthful pleasures.

                        <br/> <br/>

                        And so naturally, I was inclined towards more capitalistic ideals I think. As a child, I always thought that if you are not making enough money, you need to "work harder" as there are always skills to be learned and ways to make money (provided you are willing to put in the effort). I admit that sounds very arrogant and naive, and I do realize now that there are many exceptions to this principle. 
                            
                        <br/> <br/>

                        Regardless I still hold a somewhat sentiment today. In a sense, at least a drop ambition is necessary to thrive in a society like the US.
                        <br/> <br/>
                        
                        This isn't the end of the story however. While I still believe that anyone driven and hardworking enough can live a comfortable life in the US, it raises the question <i> why work is necessary </i> in the first place.
                        
                        <br/> <br/>
                        
                        I'll put it this way. If I was trying to create the most optimal society from scratch and I had the freedom to do whatever I wanted, the current system in the US is <i> NOT </i> what I would choose. Ideally, it would be preferred if nobody had to work and necessities were distributed evenly among everyone. People just existed without worrying about "how" to. In such a society, having to work for your needs does seem distopian and primitive, just as we now look upon the lifestyle of the hunter-gatherers of thousands of years ago or the aristocracies in medieval Europe as primitive and brutal.

                        <br/> <br/>

                        Is such a utopia possible to attain? In my opinion, not at least in a few hundred years. Massive societal changes must take place before something like that even begins to take place. But should we at least take steps to approach such a reality?
                        
                        <br/> <br/>
                        
                        And this is where I consider more socialist policies to be beneficial. Maybe I have become more nihilistic than I was as a child, but in an objective (and maybe egotistical) sense, there is no reason work should be necessary for survival. While a working class is good for the progress of a country, who cares about the progress of the country if people can get their needs independant of it? Why should an organized society even exist in the first place? There is no objective value in the community or the self, but subjectively, the self is given the priority almost instinctively. 

                        <br/> <br/> 

                        These are all questions that have been asked before, and are still currently being asked as idealogical battles rage between large groups of people. While it may be argued that the American Dream never was really real for anyone except the rich, I think the idea of accomplishment and success driven by ambition is one that holds some merit in my heart. And to that end I would hope for our society to remain largely the same, for me and my future children. There is a strange comfort in consistency.
                    </p>
                </>
            )
        },

        {
            title: "What I want out of life",
            subtitle: "What is worth pursuing?",
            date: "11/21/2023",
            text: (
                        <div>
                                <h1> I'm not very old, but I think that after a few years it is inevitable that all humans face some sort of problem. Nobody's life is perfect and 
                every once and a while, tragedy, difficulty, or mistakes threaten our security. </h1>

                                <h1> And not only this, but we all have some sort of mental image of who we <i> want </i> to be: Rich, famous, successful, etc. We often fall short of our
                                desired selves, and I think these shortcomings also add to the "problems" of our lives. </h1>
                            
                                <h1> Essentially, I think if you asked someone what they hate most about their life, most of their complaints would either be from events that occured to them 
                                or that they went through (tragedy, difficulty), or who they are as a person (wealth, success). "I wish that didn't happen to me", or "I wish I did this instead of that", or
                                "I wish I was like this instead of that". </h1>

                                <h1> I hope it is not presumptious of me to assume that I have gone through a fair share of problems and tragedies in my own life, and 
                                unsurprisingly have many areas in my life that I feal inadequate in.</h1>

                                <h1> Regardless of my desire to become certain things or my dislike of certain traits, or my regrets about past events or decisions, if someone gave me the option to 
                                live the life of someone else who had every trait that I longed for and never went through the times I did, I would resolutely refuse. If I had the option to live the life of 
                                someone smart like Bill Gates, Albert Einstien, or maybe someone else who lived a life of utter comfort and avoided the mistakes and 
                                tragedies I went through, I would again refuse. Why? Do I not desire to become those traits and rid myself of those shameful decisions and experiences? </h1>

                                <h1> For me, the answer is that there is value in the things I have experienced. From the outside, my life is not nearly the most successful or admirable, there are people my 
                                age with much brighter futures and much more prestigious accomplishments. Maybe they live much happier. And still, I find that the lessons that I have learned through 
                                experience is priceless compared to some perceived "value" of life based off of success and accomplishment. </h1>
                            
                                <h1> It all boils down to what I really want out of life. And to me, once you can escape a your own head and try to look at life objectively, you realize that 
                                life really is nothing but what we experience. Sure, there are people more successful than me, but after we die, the only thing that really "exists" of our lives is our 
                                experiences. Consider a person who made a terrible mistake and spent their entire life in prison, or a person who lived their life in complete poverty, or a baby that only got to 
                                live 2 years before dying of a disease. All of those lives seem tragic, and
                                yet they still gained something from what we call "life", their experience. At the end of their life, they still had some nuanced understanding of the world they lived in,
                                a worldview that was likely never shared exactly by anyone ever before nor will ever be held again (to an extent). Each was able to touch a different part of truth, regardless of 
                                how sad or unaccomplished they were. </h1>
                                
                                <h1> This is my goal in life, to experience as much as possible (ideally anyways) rather than wealth or accomplishment. I only have one shot at life, maybe 80, 90 years if I'm 
                                lucky, of living. And on my deathbed, I want to think that I didn't waste it; that I knew something about the universe that nobody else before me had and nobody 
                                else after me will (again, to an extent). To live the life of a billionare, but to have never known what life really is, to me is a waste. </h1>

                                <h1> The main motivation for this whole topic was a question that I thought, that if someone offered me a pill that would make me immortal, would I take it? Would I want to live
                                forever? No, I would not, and for the simple reason that I want to know what death is like. There has not been a single human that was able
                                to escape death, and there has been nobody to come back after dying to tell about how it went. Again, life to me is about experience, and death itself, is one of the most
                                mysterious. Moments before I die, will my life flash before my eyes? Will it all just go quietly? I do not know, but after those moments, <i> I shall know, </i> and I think then 
                                I will have learned more about what life really is, even if for a short moment. I can die peacefully knowing that in some way I discovered something.</h1>
                        </div> 
            )
        },
    ]
 

export default ProjectPage;
