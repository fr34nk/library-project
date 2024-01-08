const { Parser } = require("htmlparser2");
const { DomHandler } = require("domhandler");

const { EventEmitter } = require('events');

class HtmlTree {
    domHandler = new DomHandler;
    parser = new Parser;
    dom = new EventEmitter;
    tree=undefined;

    constructor () {
        this.dom = new EventEmitter();
        this.dom.on('loaded', (domObject) => {
            this.tree = domObject;
        })

        this.domHandler = new DomHandler(async (error, parsedDom) => {
            if (error) {
                // Handle error
                console.log('error');
                console.log(error)
            } else {
                // Parsing completed, do something
                this.dom.emit('loaded', parsedDom);
            }
        });

        this.parser = new Parser(this.domHandler);
    }

    async buildHtmlTree (htmlString) {
        return new Promise((res, rej) => {
            this.parser.write(htmlString);
            this.parser.end()

            res(this.tree);
        })
    }
}

const htmlTree = new HtmlTree();

module.exports = {
    htmlTree: htmlTree,
}
