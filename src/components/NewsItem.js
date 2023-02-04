import React, {Component} from "react";

export class NewsItem extends Component {
  render() {
    
    let {title, description, url, urlToImage, author, publishedAt, source} = this.props;
    // console.log(this.props)
    if(!title) title = "News Title Here"
    if(!urlToImage) urlToImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_News&psig=AOvVaw3dF4JQ5ui375cgFnF6t5HH&ust=1675597227750000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKC3lKDk-_wCFQAAAAAdAAAAABAD";
    if(!description) description = "News Description Here" 

    return (
      <div className="col-md-4">
        <div className="m-2 p-2 border border-success rounded  bg-white" >
          <img src={urlToImage} className="card-img-top" alt="..." style={{maxHeight: "200px", objectFit: "cover"}}/>
          <div className="card-body">
            <h5 className="card-title text-start">{title} <span className="badge rounded-pill text-bg-warning">{source}</span></h5>
            <p className="card-text text-start">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(publishedAt).toLocaleString()} </small></p>
            <a
              rel="noreferrer"
              target="_blank"
              href={url}
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
