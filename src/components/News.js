import React, {Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// const data = require("../Data");

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            isLoading: true,
            page: 1
        }
    }

  async componentDidMount() {
    let category = this.props.category;
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=8269fa6a93ec40f0b76f1a3019a26388`;
    let req = new Request(url);
    let response = await fetch(req);
    let parsedData = await response.json();
    this.setState({articles: parsedData.articles, isLoading: false})
    console.log("CDM",parsedData)
  }

  render() {
    return (
      <div className="container">
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
          <button type="button" className="btn btn-primary btn-sm m-4">
            &larr; Previous
          </button>
          <button type="button" className="btn btn-primary btn-sm m-4">
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
