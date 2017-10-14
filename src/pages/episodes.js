import React from 'react'

import { PageTitle } from '../components/General';
import PlayerFeed from '../components/PlayerFeed';

const Episodes = () => (
    <div>
        <PageTitle title="Episodes" sub="The lads ramble about books, films, music, life and everything in between" />
        <PlayerFeed id="episode-feed" url="http://dysfunctionroom.libsyn.com/rss" />
    </div>
)
    

export default Episodes;