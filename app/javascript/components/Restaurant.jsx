import React from "react";
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
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const url = `/api/v1/restaurant/show/${params.id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ restaurant: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { restaurant } = this.state;
    const slideImages = [
      '/restaurants/celler.jpg',
      '/restaurants/celler1.jpg',
      '/restaurants/celler3.jpg'
    ];
    return (
      <div>
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <h2 className="title">{restaurant.name}</h2>
            <p align="justify">
              {restaurant.description}
            </p>
          </div>

          <div className="col-md-5 col-sm-12">
            <center>
              <div className="slider-gp">
                <Slide>
                  <div className="each-slide">
                    <img width="300px" height="300px" src={slideImages[0]}></img>
                  </div>
                  <div className="each-slide">
                    <img width="300px" height="300px" src={slideImages[1]}></img>
                  </div>
                  <div className="each-slide">
                    <img width="300px" height="300px" src={slideImages[2]}></img>
                  </div>
                </Slide>
              </div>
            </center>
          </div>
        </div>

        <h2 className="subtitle">Comentarios</h2>

        <h2 className="subtitle">Escribir Comentario</h2>
      </div>
    )
  }
}
export default Restaurant