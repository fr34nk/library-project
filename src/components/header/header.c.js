
const React = require('react');

const { SectionCall } = require('../page-section/page-section.c')
const { CardListComponent, Card } = require('../card/card.c')

const HeaderItems = () => {
    const list = [
        { title: "Principal", link: "", alt: "" },
        { title: "Eventos", link: "", alt: "" },
        { title: "Emprestimo", link: "", alt: "" },
        { title: "Feiras", link: "", alt: "" },
        { title: "Pergamum", link: "", alt: "" },
        { title: "Guias", link: "", alt: "" },
        { title: "Bvirtual", link: "", alt: "" },
    ]

    const _list = list.map((item, idx) => {
        return <li 
                    className="
                        text-sm
                        text-green-700 
                                bg-slate-100
                                font-bold 
                        hover:bg-slate-200
                        flex
                        px-4 gap-0 m-0
                        transition-colors ease-in duration-200 delay-100
                        "
                    key={idx}
                    >
            <a className="flex my-auto">
                {item.title}
            </a>
        </li>
    })
    return _list;
}


const Img = ({ props: { src } }) => {
    return (
        <img 
            src={src} 
        />
    )
}

const FakeIcon = ({ props }) => {
    return (
        <div className="h-auto justify-center text-3xl font-bold text-gray-600">
            <h1 className="h-auto flex">{props}</h1>
        </div>
    )
}

const BlockButtons = () => {
    const buttonList = [
        { icon: 'A', title: 'Livros', desc: 'Livros em destaque', link: '' },
        { icon: 'B', title: 'Emprestimo', desc: 'Emprestimo de livros', link: '' },
        { icon: 'C', title: 'Eventos', desc: 'Eventos da biblioteca', link: '' },
        { icon: 'D', title: 'Noticias', desc: 'Noticias da biblioteca', link: '' }
    ]

    const Button = (item=buttonList[0]) =>  {
        return (
            <div as="a" href={item.link} key={item.title}
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
            </div>
        )
    }

    const _buttonList = buttonList.map((item) => Button(item))
    return (
        <div className="flex gap-2">
            { _buttonList }
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div className="relative grow w-full ">
            <ul className="w-full flex flex-row 
            bg-slate-100
              h-[50px]
                justify-center hover:text-green-900">
                <HeaderItems></HeaderItems>

            </ul>
            <Img props={{
                src: "https://i.huffpost.com/gen/1789484/images/o-CHILD-READING-facebook.jpg"
            }}
            
            ></Img>

            <div className="z-10 flex gap-2 relative -top-8 mr-2 ml-2">
                <BlockButtons></BlockButtons>
            </div>

            <div className="w-full relative -top-12">
                <SectionCall
                    direction="right"
                    section={{
                        img: 'https://www.onedegreecapital.com/hubfs/Reading%20Books.jpg',
                        title: 'Eventos',
                        subtitle: 'Palestras e participações ',
                        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    }}
                />
            </div>
            <div className="w-full relative -top-6">
                <SectionCall
                    direction="left"
                    section={{
                        img: 'https://mybangla24.weebly.com/uploads/5/7/6/2/57629377/published/newspaper.webp?1611245398',
                        title: 'Noticias',
                        subtitle: 'Palestras e participações ',
                        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    }}
                />
            </div>

            <div>
                    <CardListComponent/>
            </div>

            <CardListComponent
                className="
                    relative -top-2
                    p-10
                    flex flex-row justify-center
                    gap-2
                    bg-slate-200
                " 
            >
                <Card
                    img='https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/us-promos/cyber-lock.jpg'
                    title="Renovação das senhas"
                    link='https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/us-promos/cyber-lock.jpg'
                />

                <Card
                    img='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg'
                    title="Livros disponível em Ebook"
                    link='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg'
                />

                <Card
                    img='https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/us-promos/cyber-lock.jpg'
                    title="Livros disponível em Ebook"
                    link='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg'
                />

            </CardListComponent>

            <div className="
                relative top-2
            ">
                <SectionCall
                    direction="right"
                    section={{
                        img: '',
                        title: 'Opniões',
                        subtitle: 'Palestras e participações ',
                        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    }}
                />
            </div>

            <div className="
                relative top-6
                bg-[url('http://texturelib.com/Textures/concrete/thumb.jpg')]
                bg-repeate-x
                bg-center
                backdrop-brightness-75

            ">
                <div className='
                    h-[200px] w-full 
                    bg-cover
                    bg-no-repeat
                    bg-center

                    backdrop-brightness-75
                    bg-green-700
                    bg-blend-color-dodge
                    bg-opacity-90
                '>

                    <h2 className="pt-6 pl-14 pb-6 text-2xl font-bold text-zinc-200 underline">
                        Informações
                    </h2>

                    <div className="
                        p-14 pt-0 w-full
                        flex flex-col
                    ">

                        <div className="flex flex-row justify-around justify-items-stretch">

                            <div className="flex flex-1 w-20">
                                <div className="flex flex-col">
                                    <h4 className="pb-2 text-zinc-200 font-semibold">
                                        Funcionamento
                                    </h4>

                                    <p className="text-zinc-200 text-sm">
                                         <span>Segunda a sexta</span>: das 8 às 22
                                    </p>
                                    <p className="text-zinc-200 text-sm">
                                        <span>Sábado: </span>: das 8 às 20
                                    </p>
                                    <p className="text-zinc-200 text-sm">
                                        <span>Domingo: </span>: sem expediente
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-1 w-20 ">
                                <div className="flex flex-col">
                                    <h4 className="pb-2 text-zinc-200 font-semibold">Contatos</h4>

                                    <p className="text-zinc-200 text-sm">
                                         <span>Biblioteca</span>: (49) 3251 2122
                                    </p>

                                    <p className="text-zinc-200 text-sm">
                                         <span>Whatsapp</span>: (49) 3252 8201 
                                    </p>

                                </div>
                            </div>

                            <div className="flex flex-1 w-20 ">
                                <div className="flex flex-col">
                                    <h4 className="pb-2 text-zinc-200 font-semibold">Links</h4>

                                    <a className="text-zinc-200 text-sm" href="https://videira.ifc.edu.br/biblioteca">Página biblioteca</a>
                                    <a className="text-zinc-200 text-sm" href="https://videira.ifc.edu.br/biblioteca">BVirtual</a>
                                    <a className="text-zinc-200 text-sm" href="https://videira.ifc.edu.br/biblioteca">Pergamum</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HeaderComponent };
