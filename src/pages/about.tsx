import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='About Me'>
      <Link to='/'>Back to Home</Link>
      <p>.</p>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
