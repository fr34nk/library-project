const { pageService } = require('../../services/documents/pages');
const { htmlTree } = require('../../services/parser/htmlTree');
const { recurNode,  parseTree, TreeParser } = require('../../services/parser/parser');
const { delay } = require('../../services/utils');


async  function main ( ) {
    const html = await pageService.getMainPage()
    const parsedHtml = await htmlTree.buildHtmlTree(html);
    const treeParser = new TreeParser(parsedHtml);

    await treeParser.parseTree([
        [
            (node) => node.type == "text", 
            () => undefined
        ],
        [
            (node) => node.type == "tag", 
            () => undefined
        ]
    ]);
}

main( )


