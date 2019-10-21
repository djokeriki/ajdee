import React from 'react'


const New = (props) => {
    return(
        <form onSubmit={props.getUser}>
        
        <input style={{ margin: '20px auto', display: 'block' }} type='text' name='username' />
        <button>Submit</button>    
        </form>

    );
}


export default New