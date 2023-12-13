const React = require('react');

const Footer = () => {
    return (
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
                bg-gradient-to-t from-green-800 via-green-700 to-green-600 
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
    )
}

export { Footer } 