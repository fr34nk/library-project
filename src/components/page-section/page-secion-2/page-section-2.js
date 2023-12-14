import React from 'react';

const PageSection2Container = ({ 
    children,
}) => {

    return (
        <div className="
            w-full
            grid-[1fr]
        ">

        { children }

        </div>
    )
}

const RightSide = ({
    children
}) => {

    return (
        <div className=" 
                w-1/2
                text-end
                z-3
            "
            style={{ zIndex: 2 }} 
            >

            { children }

        </div>
    )
}


const LeftSide = ({
    children,
    height="200px"
}) => {
    return (
        <div className={
            `
            h-[${height}]
            w-1/2
            text-start
            place-self-start

            bg-cover
            bg-no-repeat
            bg-center
            relative
            z-0
            `
        }
        
        style={{ zIndex: 0 }} 
        >
            { children }
        </div>
    )
}

const SectionSideEmphasisText = ({

}) => {

}

const SectionSideEmphasisImage = ({
}) => {
    // bg-[url('http://127.1.1.1:1111/public/1.png')]
    return (
        <div className={`
            relative
            h-full
            transfrom scale-[1.1]
        `}>
            <img 
                className="relative cover"
                src="http://127.1.1.1:1111/public/1.png"
            />
        </div>
    )
}


const PageSection2 = ({ 
    direction="right"||"left",
    backgroundColor="bg-green-600",
    rightContent=undefined,
    leftContent=undefined 
}) => {

    console.log(rightContent);

    const transformClass = direction == "right" 
        ? "transform translate-x-3/4 -skew-x-12"
        : "transform -translate-x-1/4 skew-x-12"

    return (
        <div className="
            w-full 
            overflow-hidden
            relative
            h-[200px]
            z-2
        ">

                {/* bg-gradient-to-b from-lime-500 via-lime-600 to-green-600 */}
            <div className={`
                absolute
                w-2/3 h-[200px] 
                ${transformClass}
                mt-0 my-4 
                bg-gradient-to-t from-green-600 to-green-700
                
            `}
            style={{ zIndex: 1 }} 
            >
            </div>

            <div className="
                absolute
                w-full
                flex flex-row
                h-full
            ">

                { 
                    direction == "right"
                    ?

                    <>

                        <LeftSide>

                            { leftContent }

                        </LeftSide>

                        <RightSide>

                            { rightContent }

                        </RightSide>

                    </>

                    :

                    <>

                        <RightSide>

                            { rightContent }

                        </RightSide>

                        <LeftSide>

                            { leftContent }

                        </LeftSide>


                    </>

                }
            </div>

        </div>

    )
}

export { PageSection2Container,  PageSection2 }