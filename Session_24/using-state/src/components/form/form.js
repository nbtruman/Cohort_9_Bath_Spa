
import {useState} from 'react';

function Form(props) {
    /* Simple input that you type your name into, 
    The value of the input will be strored in state.
    We will output the state on the page somewhere.
    */

    const [name, setName ] = useState(''); // This is a the state for the input personName
    const [dropdownState, setDropdownState ] = useState('apple'); // This is a the state for the input personName

    const submitFunction = (e) => {
        e.preventDefault()
        console.log('My favourit e fruit is:', dropdownState)
    }

    return (
      <>
        <form action="" onSubmit={submitFunction}>

            <label htmlFor="personName">Your name</label>

            <input 
                type="text" 
                name="personName" 
                id="personName" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />

            <div>
                <select name="dropdown-choices" id="dropdown-choices" value={dropdownState} onChange={(e) => setDropdownState(e.target.value)} >
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="pear">Pear</option>
                </select>
            </div>

            <button type="submit">Submit choices</button>
        
        </form>

        <div className="display" style={{fontSize: '4rem'}}>
            
            <p>My name is {name}.</p>
            <p>My favourite fruit is {dropdownState}.</p>
        </div>

      </>  

    )   
}

export default Form;