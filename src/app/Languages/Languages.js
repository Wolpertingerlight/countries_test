import './Languages.css';
import React from "react";

function Languages({languageFilter}) {
    const languages = ["Chinese", "Spanish", "English", "Arabic", "Hindi", "Bengali", "Russian", "Japanese", "Italian",
        "French", "Korean", "German"];

    return (
        <div className='languages-container'>
            <ul className='languages-ul'>
                <li style={{fontWeight: "bold"}}>
                    <p onClick={() => languageFilter()}>Все</p>
                </li>
                {languages.map((value, key) => (
                    <li key={key} onClick={() => languageFilter(value)}>
                        <p>{value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Languages;