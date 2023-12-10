const { ElementIdentificator } = require("./identificator/identificator");

const enum_elements = Object.freeze({
    heading: "HEADING", 
    paragraph: "PARAGRAPH",
    image: "IMAGE",
    feature_image: "FEATURE_IMAGE"
})

const enum_position = Object.freeze({
    right: "RIGHT", 
    left: "LEFT",
    middle: "MIDDLE",
    top: "TOP",
    bottom: "BOTTOM"
})

/**
 * @description TreeParser tries to identify "elements" by using dependency "identificator"
 * - if it finds specification for node, will use the replacer method of "identificator" 
 * to populate the translatedTree
 * - if it doesnt find a specification for node, will use the node itself
 */
class TreeParser {
    tree=undefined;
    translatedTree=undefined // TODO
    identificator=new ElementIdentificator;

    constructor (htmlTree) {
        this.tree=htmlTree;
        this.identificator = new ElementIdentificator()
    }

    async parseTree (operationList) { 
        for (const node of this.tree || tree) {
            await this.recurseNode(node, operationList)
        }
    }

    async recurseNode (node, operationList) {
        const foundNodeSpecification = this.identificator.identify(node);
        // todo: will populate translatedTree with translatedNode or Node itself

        if (node?.children) {
            for (const child of node.children) {
                return await this.recurseNode(child, operationList);
            }
        }

        if (node?.next) {
            return await this.recurseNode(node.next, operationList);
        }

        if (!(node?.next && node?.children)) {
            return node
        }
    }
}

module.exports = {
    TreeParser,
}
