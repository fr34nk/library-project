import React from 'react';
import { Link } from "react-router-dom";

const FakeIcon = ({ props }) => {
    return (
        <div className="h-auto justify-center text-3xl font-bold text-gray-600">
            <h1 className="h-auto flex">{props}</h1>
        </div>
    )
}

const BlockButtons = ({
    buttons=[ // default
        { icon: 'A', title: 'Livros', desc: 'Livros em destaque', link: '' },
        { icon: 'B', title: 'Emprestimo', desc: 'Emprestimo de livros', link: '' },
        { icon: 'C', title: 'Guias', desc: 'Eventos da biblioteca', link: '/guias' },
        { icon: 'D', title: 'Noticias', desc: 'Noticias da biblioteca', link: '' }
    ]
}) => {
    const Button = (item) =>  {
        return (
            // <div as="a" href={item.link} key={item.title}
            <Link to={item.link} key={item.title}
                className="" 
            >
                <div className="
                    flex flex-row 
                    bg-zinc-50 rounded-sm
                    hover:bg-zinc-200
                    py-2 px-2
                    transition-colors ease-in duration-200 delay-100
                ">
                    <div className="flex-1 p-2 justify-center align-middle">
                        <FakeIcon props={item.icon}/>
                    </div>
                    <div className="flex flex-col flex-2 p-2">
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

    const _buttonList = buttons.map((item) => Button(item))
    return (
        <div className="flex gap-2">
            { _buttonList }
        </div>
    )
}

export { BlockButtons }