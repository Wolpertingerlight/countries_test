import './Languages.css';
import React from "react";

function Languages() {
    const languages = ["Chinese", "Spanish", "English", "Arabic", "Hindi", "Bengali", "Russian", "Japanese", "Italian",
        "French", "Korean", "German"];

    return (
        <div className='LanguagesContainer'>
            <ul>
                <li>
                    <a href="/" style={{fontWeight: 'bold'}}>Все</a>
                </li>
                {languages.map((title, index) => (
                    <li key={index}>
                        <a href={'/?language=' + title}>{title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Languages;