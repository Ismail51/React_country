import React from "react";

class Button extends React.Component {
    render() {
        return (
            <div>
             <button onClick={()=>{this.props.func(this.props.children)}}>bouton{this.props.children}</button>
            </div>
        )
    }
}
export default Button