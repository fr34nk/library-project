import React from 'react';
import { Link } from "react-router-dom";

const FakeIcon = ({ props }) => {
    return (
        <div className="h-auto inline-block text-3xl font-bold text-gray-600">
            <h1 className="h-auto flex">{props}</h1>
        </div>
    )
}

const BlockButton = (item) => {
    return (
        <Link to={item.link} key={item.title}
            className="flex flex-nowrap flex-row " 
        >
            <div className="
                bg-zinc-50 rounded-sm

                hover:bg-lime-400
                py-2 px-2 h-full
                transition-colors ease-in duration-200 delay-100
                text-center
                flex 

            ">
                <div className="flex-1 p-2  ">
                    <FakeIcon props={item.icon}/>
                </div>
                <div className="flex-1 flex-col flex-2 p-2 text-start">
                    <div>
                        <h4 className="text-sm font-semibold text-gray-600">{item.title}</h4>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const BlockButtonsContainer = ({ 
    buttons=[ // default
        { icon: 'A', title: 'Livros', desc: 'Livros em destaque', link: '' },
        { icon: 'B', title: 'Emprestimo', desc: 'Emprestimo de livros', link: '' },
        { icon: 'C', title: 'Guias', desc: 'Eventos da biblioteca', link: '/guias' },
        { icon: 'D', title: 'Noticias', desc: 'Noticias da biblioteca', link: '' }
    ]
}) => {
    const buttonList = buttons.map((item) => BlockButton(item))

    return (
        <>
            { buttonList }
        </>
    )
}

export { BlockButtonsContainer as BlockButtons }