import React, {useState} from 'react';

function ExperienceForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text:input
        })

        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className='experience-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type='text' placeholder='Update your item' value={input} name='text'
                           className='experience-input edit'
                           onChange={handleChange}/>
                    <button className='experience-button edit'>Update</button>
                </>
            ) : (
                <>

                    <input type='text' placeholder='Add a to do' value={input} name='text' className='toDo.input'
                           onChange={handleChange}/>
                    <button className='experience-button'>SUBMIT</button>
                </>
            )}

        </form>
    )
}

export default ExperienceForm;