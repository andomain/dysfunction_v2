import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header';
import Footer from './Footer';

import Feed from '../components/Feed'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
  <Helmet
  title="The Dysfunction Room"
  meta={[
    { name: 'description', content: 'A monthly podcast recorded in the back room of pubs about books, music & life' },
    { name: 'keywords', content: 'podcast, beer, comedy, yorkshire, books, literature, music, films, discussion' },
    ]}
    />
    <Header />
    <main className="container">
        {children()}
    </main>
    <Footer />
    </div>
    )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
