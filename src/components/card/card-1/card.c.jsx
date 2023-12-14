const React = require('react');

const Card = ({
    title,
    img,
    link,
    text,
    maxWidth=""
}) => {

    return (
        <div className="
            flex flex-col bg-slate-100
            w-[20%] max-w-[200px]
            p-4
            justify-between
            rounded-sm
        ">
            <div className="w-full ">
                <img alt="" className="w-full h-[50px] object-cover" src={img} />
            </div>            
            <div className="py-3 font-semibold text-sm/[1.2em]">
                { title }
            </div>

            { 
                text && 
                <div className="text-zinc-500 text-sm pt-2 pb-2">
                    { text }
                </div>
            }
            <div className="flex justify-center bg-slate-200 rounded">
                <button 
                    className="font-bold text-zinc-600 self-center" 
                    href={link}>
                    Acessar 
                </button>
            </div>
        </div>
    )
}

const CardListComponent = ({ className, children  }) => {
    return (
        <div className={className}>

            { children }
        </div>
    )
}

export { CardListComponent, Card };
