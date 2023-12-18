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
    height="250px"
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


const PageSection2 = ({ 
    direction="right"||"left",
    backgroundColor="bg-green-600",
    rightContent=undefined,
    leftContent=undefined ,
    height='220px'
}) => {

    console.log(rightContent);

    const transformClass = direction === "right" 
        ? "transform translate-x-3/4 -skew-x-12"
        : "transform -translate-x-1/4 skew-x-12"

    return (
        <div className={`
             w-full 
            overflow-hidden
            relative
            h-[${height}]
            z-2
        `}>

            <div className={`
                absolute
                w-2/3 
                h-[${height}] 
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
                    direction === "right"
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