import React from "react";
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
        description: null,
        name: null,
        direction: null,
      },
      comments: [],
      images: [],
      name: null,
      comment: null,
    };

    this.createComment = this.createComment.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // load data
    const { match: { params } } = this.props;
    fetch(`/api/v1/restaurant/show/${params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ restaurant: response }))
      .catch(() => this.props.history.push("/"));
    
    // load images
    fetch(`/api/v1/restaurant/images/${params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ images: response }))
      .catch(() => this.props.history.push("/"));
    
    // load comments
    fetch(`/api/v1/comment/show/${params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ comments: response }))
      .catch(() => this.props.history.push("/"));
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  createComment(ev) {
    ev.preventDefault();
    const { name, comment } = this.state;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const { match: { params } } = this.props;
    const body = { name, comment, restaurant_id: params.id };

    fetch(`/api/v1/comment/create`, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .finally(() => {
        this.props.history.go(0);
      })
  }
  formatDate(date) {
    const d = new Date(date)
    return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
  }

  render() {
    const { restaurant, images, comments } = this.state;

    // render comments
    const allComments = comments.map((item, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="comment-title">{item.name}</div>
              <div>{this.formatDate(item.created_at)}</div>
            </div>
            <p align="justify">{item.comment}</p>
          </div>
        </div>
      </div>
    ));
    const noComments = (
      <div className="d-flex align-items-center justify-content-center">
        <h4>
          No hay comentarios aún.
        </h4>
      </div>
    );

    // render images
    const allImages = images.map((item, index) => (
      <div key={index} className="each-slide">
        <img width="300px" height="300px" src={item.path}></img>
      </div>
    ));

    return (
      <div>
        <div className="row" style={{marginBottom: '10px'}}>
          <div className="col-md-7 col-sm-12">
            <h2 className="title">{restaurant.name}</h2>
            <p align="justify">
              {restaurant.description}
            </p>
            <Link to="/" className="btn custom-button">
              Volver
            </Link>
          </div>

          <div className="col-md-5 col-sm-12">
            <center>
              <div className="slider-gp">
                <Slide>
                  {allImages}
                </Slide>
              </div>
            </center>
          </div>
        </div>

        <h2 className="subtitle">Comentarios</h2>
        <div className="d-flex flex-wrap">
          {comments.length > 0 ? allComments : noComments}
        </div>

        <h2 className="subtitle">Escribir Comentario</h2>
        <form className="col-md-6" onSubmit={this.createComment}>
          <div className="form-group">
            <label htmlFor="commentName">Nombre</label>
            <input
              type="text"
              name="name"
              id="commentName"
              className="form-control"
              required
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="commentText">Comentario</label>
            <textarea
              name="comment"
              id="commentText"
              rows="5"
              className="form-control"
              required
              onChange={this.onChange}
            ></textarea>
          </div>
          <input type="submit" className="btn custom-button mt-3" value="Comentar"></input>
        </form>
      </div>
    )
  }
}
export default Restaurant