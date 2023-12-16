import React from 'react';


const SectionCall = ({ 
    direction,
    section
}) => {
    return (
        <div 
            className={`w-full h-full
                bg-[url('${section.img}')]
                bg-cover
                bg-no-repeat
                bg-center
                backdrop-brightness-75

                justify-items-end
                flex
                flex-row
            `}
            style={{backgroundImage: '/biblioteca_ifc_v1.jpg'}}
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
                "
            >

                <div className="p-8">
                    <div className="">
                        <h2 
                            className=' text-zinc-200 pb-0 text-3xl font-extrabold'
                        >{section?.title}</h2>
                    </div>
                    <div>
                        <h4
                            className="pb-4 text-zinc-800 text-sm font-semibold" 
                        >{section?.subtitle}</h4>
                    </div>
                    <div>
                        <p className="pb-4 text-slate-200">{section?.text}</p>
                    </div>

                    <div className="flex justify-items-end">
                        <button className="p-2 align-middle justify-center rounded flex w-32 bg-slate-100 font-semibold text-zinc-700">Press me</button>
                    </div>

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