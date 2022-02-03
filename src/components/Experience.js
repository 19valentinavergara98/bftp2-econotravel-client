import React, {useState} from "react";
import ExperienceForm from "./ExperienceForm";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";

function Experience({experiences, removeExperience, updateExperience}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''

    })

    const submitUpdate = value => {
        updateExperience(edit.id, value);
        setEdit({
            id: null, value: ''
        })
    }

    if (edit.id) {
        return <ExperienceForm edit={edit} onSubmit={submitUpdate}/>
    }

    return experiences.map((experience, index) => (
        <div className='experience-row' key={index}>

            <div key={experience.id}>
                {experience.text}
            </div>

            <div className="icons">
                <RiCloseCircleLine onClick={() => removeExperience(experience.id)} className='delete-icon'/>
                <TiEdit onClick={() => setEdit({id: experience.id, value: expeerience.text})}/>
            </div>


        </div>
    ));
}
export default Experience;