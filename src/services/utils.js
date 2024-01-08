const { inspect } = require('util')

const delay = (delay) => new Promise((res, rej) => {
    setTimeout(function () {
        res(true)
    }, delay)
})

/**
 * 
 * @param {*} min minimum possible result (closed)
 * @param {*} max maximum possible result (closed)
 * @returns 
 */
const rand = (min, max) => 
    Math.trunc(((Math.random() * ((max - min )+ 1)) + min));

const randomlySplitText = (text, numberSplits) => {
    const splits = numberSplits ? numberSplits : rand(0, text.length - 2)
    const splitsIndices = randomSplits(text.length, splits);
    return splitsIndices.map(([start, end]) => {
        return text.slice(start, end);
    })
}

/**
 * 
 * @param {*} len total length of positions
 * @param {*} numberSplits optional: number of splits to apply to len
 * @returns list containing ranges based on "len"
 */
const randomSplits = (len, numberSplits) => {
    const splits = numberSplits || Math.trunc(len / 3);

    const splitedRanges = []
    let lastDivisionIndex = 0;
    for (let i=0; i < (splits - 1); i++) {
        const remainingIterations = splits - (i + 1)
        let newDivisionIndex = rand(lastDivisionIndex, (len - 1) - remainingIterations)

        // the delta length of text slice can not be == 0
        newDivisionIndex = (newDivisionIndex - lastDivisionIndex) === 0 ? newDivisionIndex + 1 : newDivisionIndex;
        splitedRanges.push([lastDivisionIndex, newDivisionIndex]);
        lastDivisionIndex = newDivisionIndex;
    }
    // append the last part
    splitedRanges.push([lastDivisionIndex, len])
    return splitedRanges;
}


/**
 * 
 * @param {} param0 
 * @returns list containing the prop randomly applied to indices [{ value: '', range: [start, end] }]
 * @example randomValueAndIndices([ 
 *              ["bg-pink-500", "bg-purple-600", "bg-indigo-600"], 
 *              ["text-2xl", "text-sm", "text-md"],
 *          ], String(text).length, 5)
 * 
 * @example  randomValueAndIndices([
 *   "bg-pink-500",
 *   "bg-purple-600",
 *   "bg-indigo-600"
 * ], String(text).length, 5)
 */
const randomValueAndIndices = (values=[], listLength, splitsNumber) => {
    const splits = splitsNumber ? splitsNumber : values.length < splitsNumber ? values.length : rand(2, listLength - 2);
    const randomIndices = randomSplits(listLength, splits);
    return randomIndices.map((indice) => {
        
        if (Array.isArray(values[0])) {
            const valueList = values.map((valueGroup) => {
                return valueGroup[rand(0, valueGroup.length - 1)]
            })

            return {
                value: valueList,
                indice: indice
            }
        } else {
            return {
                value: values[rand(0, (values.length - 1))],
                indice: indice
            }
        }

    });
}


const splitTextIntoLines = (text, nSplits) => {
    const textLen = String(text).length;
    const splits = nSplits >= textLen ? (textLen - 1) : nSplits;
    const chunkLen = Math.trunc(textLen / splits);
    const rest = textLen % splits;

    const lines = []
    let startIndex = 0;
    let endIndex = chunkLen;
    for (let i=0; i < splits; i++) {
        lines.push(text.slice(startIndex, endIndex))
        startIndex = endIndex
        endIndex = endIndex + chunkLen;
    }
    if (rest && rest != 0)  {
        lines.push(text.slice(startIndex, startIndex+rest))
    }
    return lines;
}

module.exports = {
    delay,
    rand,
    randomValueAndIndices,
    randomSplits,
    randomlySplitText,
    splitTextIntoLines

}
