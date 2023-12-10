function parseDivNode (opts={ nameonly: false }) {
    return function (node) {
        if (node.type !== 'tag') {
            console.error ("Not a tag node, returning...")
            return
        }

        if (!opts.nameonly) {
            console.group("Node Tag")
            console.log("type: ", node.type);
            console.log("name: ", node.name);
            console.log("attrs: ", node.attribs);
            console.log("children: ", node.children);
            console.log("next", node.next)
            console.log("previous", node.preivous)
            console.groupEnd("Node Tag")
        } else {
            console.log(`Node Tag: ${node.name}`)
        }
    }
}

module.exports = {
    parseDivNode  
}
