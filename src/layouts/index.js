import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { Header, Container, Footer } from '../components/General'

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
    <Container >
        {children()}
    </Container>
    <Footer />
    </div>
    )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
