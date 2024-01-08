
import React from 'react';
import { Link } from 'react-router-dom';


const TextEmphasis = ({
    children,
    link,
    emphasistype='bold'|'italic'|'underline'|'overline'

}) => {
    let emphasisClass = ""
    emphasistype == 'bold' && (emphasisClass = "font-bold")
    emphasistype == 'italic' && (emphasisClass = "italic")
    emphasistype == 'underline' && (emphasisClass = "underline")
    emphasistype == 'overline' && (emphasisClass = "overline")

    console.log('empashisClass');
    console.log(emphasisClass)

    return (
        <>
        {
            link 
            ? 
                <Link 
                    to={link} 
                className={
                   emphasisClass 
                } >
                    { children }
                </Link>
            :
                <span className={emphasisClass}>
                    { children }
                </span>
        }
        </>
    )
}

const B = ({ link, children }) => {
    return React.createElement(TextEmphasis, {
        emphasistype: 'bold',
        link: link
    }, children)
}

const I = ({ link, children }) => {
    return React.createElement(TextEmphasis, {
        emphasistype: 'italic',
        link: link
    }, children)
}

const O = ({ link, children }) => {
    return React.createElement(TextEmphasis, {
        emphasistype: 'overline',
        link: link
    }, children)
}

const U = ({ link, children }) => {
    return React.createElement(TextEmphasis, {
        emphasistype: 'underline',
        link: link
    }, children)
}

export { B, I, O, U }