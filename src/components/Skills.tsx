import React from "react";

const tags = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Node JS",
    "Express",
    "MongoDB",
    "NextJs",
    "Figma"
];

const Skills = () => {
    return (
        <div className='marquee'>
            <div className='marquee-content'>
                {tags.map((tag, index) => (
                    <div key={index} className='marquee-item'>
                        {tag}
                    </div>
                ))}
                {tags.map((tag, index) => (
                    <div key={`copy-${index}`} className='marquee-item'>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
