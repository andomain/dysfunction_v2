import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export const ListLink = (props) => (
    <li> 
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
);

export const PageTitle = (props) => (
    <div className="page-title">
        <h2>{props.title}</h2>
        <span>{props.sub}</span>
    </div>
);