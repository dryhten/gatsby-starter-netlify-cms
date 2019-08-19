import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// TODO
export const TestPageTemplate = ({ title, content }) => {
  // title = src/pages/test/index.md title
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
  // data = whatever testPageQuery returns
  // { markdownRemark: { html, frontmatter } }
  console.log(data);
  const markdownRemark = data.markdownRemark;

  return (
    <TestPageTemplate
      title={markdownRemark.frontmatter.title}
      content={markdownRemark.html}
    />
  );
}

TestPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestPage

// my guess:
// somehow this template has the same id as `src/pages/test/index.md`
// the query returns the frontmatter and rest as html
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
