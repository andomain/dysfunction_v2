import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const ListLink = (props) => 
    <li> 
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export const Header = () => (
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

export const Footer = () => (
    <footer>
        <div>
            <Link to="/">The Dysfunction Room</Link>
        </div>
        <div>  
            <a className="andomain" href="https://twitter.com/andomain">Website by Andomain</a>
        </div>
    </footer>
)

export const PageTitle = (props) => (
    <div className="page-title">
        <h2>{props.title}</h2>
        <span>{props.sub}</span>
    </div>
);

export const Container = (props) => (
    <main className="container">
        {props.children}
    </main>
);

export const Profile = (props) => {
    return <div className="profile">
        <img className="profile-image" src={props.image} alt={props.name} />
        <div className="profile-info">
            <h3 className="profile-title">{props.name}</h3>
            <p className="profile-strap">"{props.strap}"</p>
            <p className="profile-bio">{props.bio}</p>
        </div>
    </div>
}