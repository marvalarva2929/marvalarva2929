import './HomePage.css'
import Joker from './images/joker.jpeg'

const HomePage = () => {
    return (
        <> 
            <div className="home-wrapper"> 
                <div className="home-left"> 
                    <img src={Joker}/>    
                    <h1> Hi 👋 </h1>
                    <p> I'm Josh </p>
                    <p> discord: marvalarva2929 </p>
                    <p> github: marvalarva2929 </p>
                    <p> joshvigel@gmail.com </p>
                </div>

                <div className="home-right">
                   <h4> 
                    <i> “I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.” </i> - Isaac Newton
                    </h4>
                    
                    <br/> 
                    
                    <p> 
                    Isaac Newton himself attested that his knowledge was such as the pebbles in a limitless ocean; limitlessness which, should at the very least, invoke a sense of appreciation of not utter awe and wonder of the beauty of the unknown. However, such limitlessness also makes it apparent that, well, that it is <i> limitless</i>. One cannot fully traverse the sea of knowledge by themselves. 
                    </p>  
                   
                    <p> 
                    Regardless, we may attempt to do so. One may try to learn and experience as much as possible, yet in the end, they will end not much further from where they started. Such is the fate of many who remain close-minded to other ideas, thoughts, and worldviews. Who refuse to attempt to understand the biases of others or even acknowledge their own. They will forever remain caged in their own head, never realizing that there is more to the world. Evidently so, for the sake of knowledge, it is beneficial to avoid this pitfall. 
                    </p> 
                    
                    <p>
                    And so on our journey, we stumble across not one, but many maps. Maps written by others, who may have arrived at our crossroad but took a different path; maps written by others, who left the journey altogether; maps that when put together, provide a single map, one coherent story, larger in context than each of it's parts. Maps that give insight to where we are and where we are going. 
                    </p>
                    
                    <p>
                    We continue on our journey as such, discovering more and more of the ocean along the way. Perhaps from our maps we learn which ways to go and which to avoid. And at the end of our journey, when our time has finished, we will leave behind a map of our own. It's this journey that to me, defines what it means to be human. Why should we search the endless expanse of knowledge? Though maybe not a satisfying answer, it's because we <i> want </i> to. We are all born naturally curious, inherently inclined to explore the sea of knowledge. 
                    </p>
                    
                    <p> 
                    This site is an attempt of a map of my own. A map that maybe you choose to reject as nonsense - which I fully expect to happen - or maybe look at with the same wonder as I did when I originally wrote it. Regardless, I'm glad you are here, and I hope you come back :)
                    </p>
            </div>                     
        </div>
    </>
    )
}

export default HomePage;
