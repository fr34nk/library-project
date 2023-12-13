import React from 'react';
import { Link } from "react-router-dom";

const HeaderItems = () => {
    const list = [
        { title: "Home", link: "/", alt: "" },
        { title: "Serviços", link: "", alt: "" },
        { title: "Guia Biblioteca", link: "/guias", alt: "" },
        { title: "Contato", link: "", alt: "" },
    ]

    const _list = list.map((item, idx) => {
        return <Link as="li"
                    to={item.link}
                    className="
                        text-sm text-green-700  font-bold 
                        flex-auto
                        my-auto
                        px-4 py-4  gap-0 m-0
                        border-r-[1px] border-slate-200 last:border-0
                        transition-colors ease-in duration-200 delay-100
                        bg-slate-100 hover:bg-slate-200
                        "
                    key={idx}
                    >
            <div alt="" href="blank" className="flex my-auto justify-center">
                {item.title}
            </div>
        </Link>
    })
    return _list;
}


const Header = () => {
    return (
        <ul className="
            flex flex-row justify-center
            h-[65px] 
            bg-slate-100
            transition-all ease-in-out duration-300
             hover:text-green-900
            shadow-sm drop-shadow-md 
            ">

            <HeaderItems></HeaderItems>
        </ul>
    )
}

export { Header };
