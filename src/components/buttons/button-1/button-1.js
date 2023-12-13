import React from 'react';
import { Link } from 'react-router-dom';

const Button1 = ({ 
    text="Button Text",
    link="/button-link",
    altText=""
}) => {
    return (
        <Link 
            as="a"
            alt={altText}
            to={link}

            className="
                ml-2 
            "
        >
            <span 
                className="
                    text-slate-500 font-semibold text-md
                    bg-slate-50 px-3 py-2  rounded-sm
                    " 
            >
            {text}
            </span>
        </Link>
    )
}

export { Button1 }

