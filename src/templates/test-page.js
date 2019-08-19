import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export const TestPageTemplate = ({ title, content }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>{content}</div>
    </div>
  );
}

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}

const TestPage = ({ data }) => {
  const { markdownRemark } = data;
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
