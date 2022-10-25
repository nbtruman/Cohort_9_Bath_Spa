import React from "react";

class Button extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            color: "black",
            backgroundColor: "white" 
        }
    }

    render() {
        const Styles = {
            color: this.state.color,
            backgroundColor: this.state.backgroundColor
        }
        return <button style={Styles}>Click Me!</button>
    }

}

export default Button;