import React from 'react';
import Link from 'gatsby-link';
import { ListLink } from '../components/General';

const Header = () => (
    <header>
        <Link to="/">
            <h1>The Dysfunction Room</h1>
        </Link>
        <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/episodes/">Episodes</ListLink>
        </ul>
    </header>
);

export default Header;