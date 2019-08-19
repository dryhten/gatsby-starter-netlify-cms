import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// TODO
export const TestPageTemplate = ({ title, content }) => {
  console.log(title);
  console.log(content);
  return (
    <p>Hi!</p>
  );
}

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}

const TestPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <TestPageTemplate
      title={post.frontmatter.title}
      content={post.html}
    />
  );
}

TestPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestPage

export const testPageQuery = graphql`
  query TestPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
