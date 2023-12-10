const { Header1Element } = require('./identificators/header.el-1')
const { DomUtils } = require('htmlparser2')
const { Header2Element } = require('./identificators/header.el-2')

const SPECIFICATION_TYPE = {
    type: 'tag',
    name: 'div',
    class: 'top-class',
    children: []
}

class ElementIdentificator {
    specifications = [
        Header1Element,
    ]

    constructor () {
        this.node_memory = [];
    }

    applyFilterFromElementSpecification (specification=SPECIFICATION_TYPE) {
        const _flt = DomUtils.filter;
        return function (node) {
            function _recurFilter (spec, _node) {
                return _flt(
                    (_node1) => {
                        // filter first lvl attributes ...
                        let lvlAttrResult = true;

                        if (spec.type && (spec.type != _node1.type)) {
                            lvlAttrResult = false;
                        }

                        if (spec.name && (spec.name != _node1.name)) {
                            lvlAttrResult = false;
                        }

                        if (spec.class && _node1.attribs && _node1.attribs['class']) {
                            const classList = spec.class.split(' ')

                            classList.forEach((c) => {
                                const nodeClassList = _node1.attribs['class'].split(' ');
                                if (!nodeClassList.includes(c)) {
                                    lvlAttrResult = false;        
                                }
                            })
                        }

                        // ... then filter recursive
                        if (spec.children) {
                            return _recurFilter(spec.children[0], _node1)
                        } 

                        return lvlAttrResult;
                    }, _node, true, 1);
            }

            return _recurFilter(specification, node)
        }
    }

    /** 
     * @description helper to select div with classess specified
     * @argument selector element and classes to match. Format: 'div.class_name.class_name_2'
     * @argument node : node target to match the selector
    */
    matchClasses = (selector) =>  { 
        return (node) =>  {
            const [elname,..._classes] = selector.split('.');
            return node.name == elname && 
                [..._classes].every(c => node?.attribs["class"].match(c))
        }
    }

    identify (node) {
        const el = new Header2Element(node);
        const spec = el.specification()
        const result = this.applyFilterFromElementSpecification(spec)(node)

        // DomUtils.removeElement(node)
        DomUtils.replaceElement(node, textNode)

        return result
    }
}

module.exports = {
    ElementIdentificator

}