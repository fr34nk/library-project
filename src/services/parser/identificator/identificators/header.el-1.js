/**
 * Title with subheading token
 */
/* <div class="top-class">
    <div class="class-lvl-2">
        <div class="class-lvl-3">
            <h2>text of h2</h2>
            <h3>text of h3</h3>
 */

class Header1Identificator {
    specification () {
        return {
            type: 'tag',
            name: 'div',
            class: 'top-class',
            children: [
                { 
                    type: 'tag',
                    name: 'div',
                    class: 'class-lvl-2',
                    children: [
                        {
                            type: 'tag',
                            name: 'div',
                            class: 'class-lvl-3',
                            children: [
                                {
                                    type: 'tag',
                                    name: 'h2',
                                },
                                {

                                    type: 'tag',
                                    name: 'h3',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}


module.exports = {
    Header1Element: Header1Identificator
}
