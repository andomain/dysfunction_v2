import React from 'react'

import { PageTitle } from '../components/General';
import Profile from '../components/Profile';

import sam from '../img/sam.jpg';
import luci from '../img/luci.jpg';
import andrew from '../img/andrew.jpg';

const samBio = `Sound maker, word writer, nice things maker, bike rider, distance runner, occasional on-stage dick-around-er, slacker.....all round bell end.`;
const luciBio = `Key thumper, punsmith, flâneur, stage show off, twat. Winner of The Blog North Award for Best Writing on a Blog 2014.`;
const andrewBio = `I've stood on the shoulders of lesser giants, trespassed into the realm of moderate but easily managed danger, chased tame dragons around the long corners of the night and demonstrated extreme caution as I've run away from bears.
Cycled round Canada once.`;

const samStrap = "Turn off that Enya CD, I'm going to cry";
const luciStrap = "I invented the dirty bidet";
const andrewStrap = "The World's Least Convincing Canadian";

const About = () => (
    <div>
        <PageTitle title="The Regulars" sub="What's a pub without its regulars? A shit pub, that's what!" />
        <Profile
            name="General Lucifer"
            image={luci}
            strap={luciStrap}
            bio={luciBio}
            link="https://www.amazon.co.uk/Pantone-Blues-G-Lucifer-ebook/dp/B008HSH42O"
        />
        <Profile
            name="Andrew Rodgers"
            image={andrew}
            strap={andrewStrap}
            bio={andrewBio}
        />
        <Profile
            name="Sam Anderson"
            image={sam}
            strap={samStrap}
            bio={samBio}
        />    
    </div>
)

export default About
