import React from 'react'
import ReactMarkdown from 'react-markdown'
import 'prismjs'
import Head from 'next/head'
import PrismCode from 'react-prism'

const codeRenderer = { code: PrismCode }
const Question = ({ question }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="/prism.css" data-noprefix />
    </Head>
    <ReactMarkdown source={question} renderer={codeRenderer} />
  </div>
)

export default Question
