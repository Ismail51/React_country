import React from "react";

class Card extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.capital}</p>
                <img src={this.props.flag}/>
            </div>
        )
    }
}

export default Card