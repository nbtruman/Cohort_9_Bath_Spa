import "./box.css"

function Box(props) {
    const {children} = props
    return(
        <div class="box"
            style={{backgroundColor: props.bgColor}}>
            {children}
        </div>
    )
}

export default Box;