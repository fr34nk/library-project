import React from 'react';

const CardActionContainer = ({ children}) => {
    return (
                <div
                    className="
                        flex justify-end
                        p-2 mr-6 mb-6 ml-2
                        drop-shadow-md shadow-green-900
                    "
                >
                    { children }
                </div>
    )
}

const CardContentContainer = ({ children }) => {
    return (
            <div className="font-plus  text-zinc-100 p-8 pt-0">
                <div className="
                    transition-padding ease-in duration-500 delay-100
                ">
                    { children }
                </div>
            </div>
    )
}

const Card2Container = ({ 
    children 
}) => {

    return (
        // <div className="flex flex-row flex-wrap flex-[3_2_30%] p-4 pr-2 pl-2">
                // '8': 'repeat(8, minmax(0, 1fr))',
                // grid grid-flow-col grid-cols-3 sm:grid-cols-3
                // grid grid-cols-[200px_minmax(900px,_2fr)_100px]


                // grid grid-cols-[minmax(300px,_.2fr)]

                // 'layout': '200px minmax(900px, 1fr) 100px',

                // grid grid-cols-[200px,_400px] md:grid-cols-[1fr]
                // grid grid-cols-[200px,_400px] 
        <div 
            className="
                grid sm:grid-cols-[1fr]  md:grid-cols-[400px]
            "
        >
            { children }
        </div>
    )

}

const Card2 = ({
    title='title text',
    text='paragraph text',
    className='',
    contentEl=undefined,
    actionEl=undefined
}) => {

    return (
        <div className={`
            mt-0 ml-4 hover:m-2

            rounded 
            drop-shadow-md 
            transition-margin ease-in-out duration-500 delay-100
            bg-gradient-to-b from-lime-500 via-lime-600 to-green-600
            ${className} 
            `}
        >

            { true ? 
            
             <div className="
                mt-4 pl-8 pt-3 mb-2
                backdrop-brightness-75
                backdrop-opacity-100
                mix-blend-overlay
              bg-slate-400
                text-zinc-100 
                text-3xl 
                font-black 
                ">
                <h4 className="pb-4">{title}</h4>
            </div>

            :

             <div className="
                mt-4 pl-8 pt-3
                text-green-700
                text-3xl pb-4
                font-black
                font-opensans
                
            ">
                <h4 className="">{title}</h4>
            </div>
        
        }

            <CardContentContainer>
                { contentEl }
            </CardContentContainer>


            <CardActionContainer >
                { actionEl }
            </CardActionContainer>
        </div>

    )
}

export { Card2, Card2Container }
