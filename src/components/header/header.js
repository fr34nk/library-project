import React from 'react';
import { Link } from "react-router-dom";

const headerTree = [
    { title: "Home", link: "/", alt: "" },
    { title: "Livros", link: "/servicos", alt: "", 
        sublist: [
            { title: "Ebooks", link: "/ebooks", alt: "" },
            { title: "Guia de Reserva de Livros", link: "/guia-reserva-livros", alt: "" },
            { title: "Resenhas", link: "/resenhas", alt: "" }
        ]
    },
    { 
        title: "Tutoriais", link: "/guias", alt: "", sublist: [
            { title: "Cursos Aprendizado", link: "/cursos", alt: "" },
            { title: "Guias", link: "/guias", alt: "" }
    ]},
    { 
        title: "Equipe e Contato", link: "/contatos", alt: "", 
            sublist: [
                { title: "Serviços", link: "/servicos", alt: "" },
                { title: "Equipe", link: "/contatos", alt: "" },
                { title: "Contato", link: "/contatos", alt: "" }
            ]
    }
]

const SubList = ({
    lvl=0, sublist, parentItem
}) => {
    lvl+=1;

    const ItemList = sublist?.map((item, idx) => 
        <HeaderItem
            lvl={lvl}
            key={idx}
            link={item.link}
            title={item.title}
            alt={item.alt}
            sublist={item.sublist}
        />
    )

    return (
        <div href="blank" className="
            flex my-auto mx-auto justify-center text-center
            ">
            { parentItem.title }

            {/* invisible */}
            <ul className={`
                absolute left-[10%] top-[90%] 
                w-full my-auto justify-center
                 
                invisible 
                opacity-0 

                transition-all ease-in duration-300 delay-100

                group-hover/item-lvl-${lvl - 1}:visible 
                group-hover/item-lvl-${lvl - 1}:opacity-100
                group-hover/item-lvl-${lvl - 1}:top-[100%]
            `}>

                { ItemList }

            </ul>
        </div>
    )
}

const HeaderItem = ({
    link, title, alt, sublist, _key, lvl
}) => {

    return (
        <>
            { 
                sublist == null ?

                    <Link 
                        key={_key} 
                        to={link}
                        className={`
                            group/item-lvl-${lvl}
                            text-sm text-green-700 font-bold 
                            border-r-[1px] border-slate-200 last:border-0
                            bg-slate-100 hover:bg-slate-200

                            px-4 py-4  gap-0 m-0
                            flex flex-auto my-auto

                            opacity-100 

                            transition-all ease-in-out duration-500 delay-100
                        `}
                        style={{ zIndex: 20 }}
                    >

                        <div alt={alt} href="blank" className="
                            flex my-auto mx-auto justify-center text-center
                            ">
                            {title}
                        </div>

                    </Link>
                : 

                    <li
                        key={_key} 
                        className={`
                            relative
                            group/item-lvl-${lvl}
                            text-sm text-green-700 font-bold 
                            border-r-[1px] border-slate-200 last:border-0
                            bg-slate-100 hover:bg-slate-200

                            px-4 py-4  gap-0 m-0
                            flex flex-auto my-auto
                            transition-all ease-in duration-200 delay-100
                            `}
                        style={{ zIndex: 10 }}
                    >

                        <SubList
                            lvl={lvl}
                            parentItem={{  
                                link, title, alt, _key
                            }}
                            sublist={sublist}
                        />

                    </li>
            }
        </>

    )
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
            relative z-10
            ">

            {
                headerTree.map((item, idx) => 
                    <HeaderItem
                        lvl={0}
                        key={idx}
                        _key={idx}
                        alt={item.alt}
                        link={item.link}
                        title={item.title}
                        sublist={item.sublist}
                    />
                )
            }
            {/* <HeaderMenu
                headerTree={headerTree}
            /> */}
        </ul>
    )
}

export { Header };
