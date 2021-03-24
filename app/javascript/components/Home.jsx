import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/restaurant/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ restaurants: response }))
      .catch(() => this.props.history.push("/"));
  }

  resume(desc) {
    let result = ''
    const parts = desc.split(' ')
    let count = 0

    while(count > parts.length || count < 30) {
      result += parts[count] + ' '
      count++
    }
    return result + '...'
  }

  render() {
    const { restaurants } = this.state;
    const allItems = restaurants.map((item, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <img height="200px" src={item.image} alt={item.name} className="img-thumbnail"></img>
            <p align="justify">{this.resume(item.description)}</p>
            <Link to={`/restaurant/${item.id}`} className="btn custom-button">
              Ver más...
            </Link>
          </div>
        </div>
      </div>
    ));
    const noResult = (
      <div className="d-flex align-items-center justify-content-center">
        <h4>
          No hay restaurantes cargados aún.
        </h4>
      </div>
    );

    return (
      <div className="primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            <div className="d-flex align-items-center justify-content-start">
              <img width="150px" src="/tribal-guatemala.png" alt="Tribal"/>
              <h1 className="display-5" style={{marginLeft: '10px'}}>Restaurantes</h1>
            </div>
            <p className="lead">
              Una lista de restaurantes selectos alrededor del mundo.
            </p>
            <hr className="my-4" />

            <div className="d-flex flex-wrap">
              {restaurants.length > 0 ? allItems : noResult}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home