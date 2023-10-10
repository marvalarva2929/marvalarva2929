import './AboutPage.css'
import { Fade } from 'react-reveal'
import Twice  from './images/twice.jpg'
import Book from './images/book.jpg'
import Persona from './images/persona.webp'

const AboutPage = () => {
    return (
        <> 
            <div className="about-wrapper"> 
                <div className="about-left">

                  <Fade bottom duration="500" cascade>
                    
                        <p> Favorite Song: LUV ME </p>
                        <img src={Twice}/>    
                        <p> Favorite Game: Persona 5 </p>
                        <img src={Persona}/>
                        <p> Currently reading </p>
                        <img src={Book}/>
                    </Fade>
                </div>
            <Fade duration="500" delay="100">
                <div className="about-right">
                    <p> 
                    Hey! My name is Josh, and I'm currently a Junior in High School. I love to learn about the world and create things to benefit it. I've recently been trying to write more about some of my thoughts, hence the creation of this site. You can check out the "blogs" tab above to check out my stuff!
                    </p>
                    
                    <p>
                    I love to think. Often, I will spend large amounts of time thinking about whatever my mind wanders to, often talking to myself all the while. Whether this is my self-expression or rather a sign of a mental illness, I do not know (nor do I wish to). Regardless, I find that thinking for long periods of time allows me to understand who I am and what I want better.
                    </p> 
                    
                    <p>
                    I also like Computer Science! Ever since I first joined my elementary school robotics team, I've been absolutely fascinated by the way that code that <i> I wrote </i> can make a robot do incredible things. While our elementary school team never performed very well (our team consisted of just me and my friend, inexperienced 5th graders), it was one of the most enoyable experiences I've had and it opened my eyes to the world of STEM. The possibilities are limitless and I hope to be a future innovator in the feild. I've also been trying to get into competitions like USACO and Codeforces.
                    </p>
                    
                    <p>
                    There is also one very important thing you should know, and that is that...
                    <br/>
                    Twice is the best music group 🔥 
                    <br/>
                    Jokes aside, I enjoy listening to music - specifically kpop - and I've grown particularly fond of Twice. I may make a tier list in the future of my favorite songs, but until then you should know that my favorite is LUV ME and any other opinion is invalid ❤️.
                    </p>
                    
                    <p>
                    I'm sure that now you've heard so much about me, you are dying to reach out. No worries! You can contact me on discord @marvalarva2929, or email me at joshvigel@gmail.com.
                    </p>
            </div>             
        </Fade>
        </div>
    </>
    )
}

export default AboutPage;
