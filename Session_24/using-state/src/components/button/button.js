import "./button.css";

function Button(props) {
    return <button className="button" onClick={props.handleChange} style={{backgroundColor: props.bgColor}}>Click Me!</button>;
}

export default Button;