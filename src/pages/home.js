import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer'
import  { BlockButtons } from '../components/buttons/block-buttons/index'
import { SectionCall }  from '../components/page-section/page-section-1/page-section.c';
import { CardListComponent, Card } from '../components/card/card-1/card.c';

const HomePage = () => {
    return (
        <div className="relative grow w-full ">
            <Header/>
            <div className="
                relative 
                max-h-[400px]
                overflow-hidden
                object-cover
                text-end
            ">
                <img 
                    className="" 
                    src="/biblioteca_ifc_v1.jpg"
                />
                <h1 className="
                    w-1/2
                    
                    absolute right-4 top-1/4

                    text-8xl 
                    font-black
                    ">
                        <span className="bg-slate-50">
                            <span className="text-lime-600 inline-block">Biblioteca</span>
                            <span> </span>
                            <span> </span>
                            <span className="text-green-800 inline-block">IFC</span>
                            <span> </span>
                            <span className="text-lime-600 inline-block">Videira</span>

                        </span>
                </h1>
            </div>


            <div className="z-10 flex gap-2 relative -top-8 mr-2 ml-2">
                <BlockButtons
                    buttons={[
                        { icon: 'A', title: 'Livros', desc: 'Livros em destaque', link: '' },
                        { icon: 'B', title: 'Emprestimo', desc: 'Emprestimo de livros', link: '' },
                        { icon: 'C', title: 'Tutoriais', desc: 'Guias diversos', link: '/guias' },
                        { icon: 'D', title: 'Fontes ', desc: 'Fontes para Pesquisa', link: '/guias' },
                        { icon: 'E', title: 'Noticias', desc: 'Noticias da biblioteca', link: '' }

                    ]}
                />
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
                    text="Shrunk to the specified length. The background image is scaled to cover the entire container. The background image is scaled to fit inside the container"
                />

                <Card
                    img='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg'
                    title="Livros disponível em Ebook"
                    link='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg'
                    text="Specified length. The background image is scaled to cover the entire container. The background image is scaled to fit inside the container"
                />

                <Card
                    img='https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/us-promos/cyber-lock.jpg'
                    title="Livros disponível em Ebook"
                    text="The background image is displayed at its original size. This is the default value. The background image is stretched ..."
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

            <Footer/>

        </div>
    )
}

export { HomePage };
