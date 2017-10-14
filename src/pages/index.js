import React from 'react'
// import Link from 'gatsby-link'
import { PageTitle } from '../components/General';

import logo from '../img/logo.png'

const IndexPage = () => (
  <div className="page">
	<img className="logo" src={logo} alt="The Dysfunction Room Logo" />
	<PageTitle
		title="Welcome to The Dysfunction Room"
		sub="A monthly podcast recorded in the back room of pubs about books, music & life"
	/>
    <p>Every month the Dysfunction Room regulars find a back room of a pub & sit down with a few ales to discuss books, music, paraphenalia and whatevers going on in their lives these days</p>
  </div>
)

export default IndexPage
