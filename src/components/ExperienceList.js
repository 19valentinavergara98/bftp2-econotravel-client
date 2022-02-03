import React, {useState} from 'react'
import ExperienceForm from "./components/ExperienceForm";
import Experience from "./components/Experience";


function ExperienceList() {
    const [experiences, setExperiences] = useState([])

    const addExperiences = experience => {
        if (!experience.text || /^\s*$/.test(experience.text)) {
            return
        }

        const experiences = [experience, ...experiences]
        setExperiences(newExperiences)
        console.log(newExperiences);
    };

    const updateExperiences = (experienceId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setexperiences(prev => prev.map(item => (item.id === experienceId ? newValue : item)))
    }

    const removeExperiences = id => {
        const removeArr = [...experiences].filter(experience => experience.id !== id);

        setExperiences(removeArr);
    }

    return (
        <div>
            <h1>What´s the plan for today?</h1>
            <Experience onSubmit={addExperience}/>
            <Experience experience={experience} removeExperience={removeExperience} updateExperience={updateExperience}/>
        </div>
    );
}

export default ExperienceList;
