 function parseParagraphNode (opts={ nameonly: false }) {
    return function (node) {
        if (node.type !== 'text') {
            console.error("Not a text node, returning...")
            return
        }

        if (!opts.nameonly) {
            console.group("Node Text")
            console.log("type: ", node.type);
            console.log("data: ", node.data);
            console.groupEnd("Node Text")

        } else {
            console.log(`Node Text: ${node.data}`)
        }
    }
}

module.exports = {
    parseParagraphNode 
}
