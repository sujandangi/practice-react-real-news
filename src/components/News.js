import React, {Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

// const data = require("../Data");

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
    constructor(){
        super();
        this.state = {
            articles: [],
            isLoading: true,
            page: 1,
        }
    }

  async update() {
    const {setProgress, country, apiKey, category, pageSize} = this.props
    setProgress(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${pageSize}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ isLoading: true });
    
    let data = await fetch(url);
    setProgress(40)
    let parsedData = await data.json() 
    setProgress(70)
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        isLoading: false
    })
    setProgress(100)
    console.log("update ", this.state)
  }

async componentDidMount() {
    this.update();
}

handlePrevClick = async () => {
    this.setState((state) => ({ page: state.page - 1 }));
    this.update();
}

handleNextClick = async () => {
    this.setState((state) => ({ page: state.page + 1 }));
    this.update()
}

  render() {
    return (
      <div className="container">
        <h1 className="text-center m-3">Real News on {(this.props.category).charAt(0).toUpperCase() +
       (this.props.category).substr(1).toLowerCase()}</h1>
        {this.state.isLoading?<Spinner />:""}
        <div className="row">
          {this.state.articles.filter((i) => i.urlToImage !== null).map((item) => {
            let {
              author,
              title,
              description,
              url,
              urlToImage,
              publishedAt,
              content,
              source
            } = item;
            return (
              <NewsItem
                key={1000*Math.random()}
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                author={author}
                publishedAt={publishedAt}
                source={source.name}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page === 1} className="btn btn-primary btn-sm m-4" onClick={this.handlePrevClick}>
            &larr; Previous
          </button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary btn-sm m-4" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
