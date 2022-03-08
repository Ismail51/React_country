import React from "react";

class Card extends React.Component {
    render() {
        return(
            <div className="card" style={{width: "18rem"}}>
                <img className= "card-img-top" src={this.props.flag}/>
                <div className="card-body">
                    <h5 className="card-title">Country{this.props.name}</h5>
                    <p className="card-text">Capital{this.props.capital}</p>
                    <p className="card-text">Region{this.props.region}</p>
                    <p className="card-text">Population{this.props.population}</p>
                </div>
            </div>
        )
    }
}

export default Card