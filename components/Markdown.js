import React from 'react'
import ReactMarkdown from 'react-markdown'
import 'prismjs'
import Head from 'next/head'
import PrismCode from 'react-prism'

const renderers = { code: PrismCode }

const Markdown = props => (
  <React.Fragment>
    <Head>
      <link rel="stylesheet" href="/prism.css" data-noprefix />
    </Head>
    <ReactMarkdown renderer={renderers} {...props} />
  </React.Fragment>
)

export default Markdown
