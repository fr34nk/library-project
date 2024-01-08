import React from 'react';



const SectionCall = ({ 
    direction,
    img,
    title,
    content

}) => {
    let sectionDirection;
    const sd = sectionDirection = ((direction) => ({
        direction:direction,
        right: direction === "right",
        left: direction === "left"
    }))(direction)

    return (
        <div 
            className={`w-full h-full
                bg-[url('${img}')]
                bg-cover
                bg-no-repeat
                bg-center
                backdrop-brightness-75

                justify-items-end
                flex
                flex-row
            `}
            style={{backgroundImage: './biblioteca_ifc_v1.jpg'}}
            >
            {
                direction === "right" &&
                    <div className="w-[40%] h-full relative"></div>
            }

            <div className="
                flex flex-initial w-[60%] sm:flex-[100%]
                flex-col
                bg-cover
                bg-no-repeat
                bg-center

                bg-green-700

                bg-opacity-90
                bg-blend-overlay
                hover:scale-105
                transition-transform ease-in-out duration-500
                "
            >

                <div className={`p-8`}>

                    <div className="pb-4">
                        { title }
                    </div>

                    { 
                        content 
                    }

                </div>
            </div>

            {
                direction === "left" &&
                    <div className="w-[40%] h-1"></div>
            }
        </div>
    )
}



export { SectionCall }