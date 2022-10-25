
function Dog(props) {

    

    const styles = {
        background: props.colour
    }

    return (
        <div style={styles}>
            <h2>Hi, I am a dog</h2>
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
        </div>
    )
} 

export default Dog;