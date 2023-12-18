import React from 'react';
const { randomValueAndIndices, splitTextIntoLines } = require('../../../services/utils');


/**
 * 
 * @param {text} param0 Can be an array containing the type { text: "", color: "", size: "" }, 
 *  or just a string, so the function will calculate randomly
 * @returns 
 */
const HeadingEmphasis = ({
    text="",
    lineLen=1,
    chunkTextLen=1,
    colorList=["bg-pink-500 text-slate-200", "bg-purple-600 text-slate-200", "bg-indigo-600 text-slate-200", "text-indigo-800 text-opacity-50"],
    textSizeList=["text-4xl", "text-6xl", "text-8xl"],

}) => {
    const lines = text.length <= 10 
        ? [text]
        : lineLen >= text.length 
            ? splitTextIntoLines(text, lineLen) 
            : splitTextIntoLines(text, Math.trunc(text.length / 20));

    const createTextCombination = (text, chunkTextLen) => {
        const colorsCombinations = randomValueAndIndices([
            // ["absolute transform"],
            colorList,
            textSizeList,
            ["font-black"],
            ["bg-opacity-60"],
            ["text-slate-200"],
            ["relative"],
            ["translate-x-10", "translate-x-30", "translate-x-40"],
        ], String(text).length, chunkTextLen)
        return colorsCombinations ;
    }

    const buildElText = (_text) => {
        const els = createTextCombination(_text, chunkTextLen).map((c, idx) => {
            return React.createElement('span', {
                key: idx,
                className: c.value.join(' ')
            }, _text.slice(c.indice[0], c.indice[1]))
        })
        return els;
    }


    const lineEls = lines.map((line, idx) => {
        return <div key={idx} className="static -translate-y-50">
            { buildElText(line) } 
        </div>
    })


    return (
        <>
            <div className="">
                { lineEls }
            </div>
        </>
    )
}

export { HeadingEmphasis }