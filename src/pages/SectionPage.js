import React, {Component} from 'react';
import {fetchArticlesBySection} from '../api/ArticlesAPI.js';
import ArticleList from '../components/ArticleList/ArticleList.js';

class SectionPage extends Component {

  state = {
    articles: []
  };

  async componentDidMount() {
    try {
      const articlesJson = await fetchArticlesBySection(this.props.match.params.sectionID);
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error fetching articles: ', e);
    }
  }

  render() {
    return(
      <ArticleList articles={this.state.articles}/>
    );
  }
}
export default SectionPage;