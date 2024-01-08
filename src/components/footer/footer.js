const React = require('react');

const Footer = () => {
    return (
        <div className="

            bg-repeate-x
            bg-center
            backdrop-brightness-75
        ">

            <div className="
                w-full 
                bg-cover
                bg-no-repeat
                bg-center
                bg-gradient-to-t from-green-800 via-green-700 to-green-600 
            ">

                <h2 className="
                    flex
                    pt-6 pl-14 pb-6 
                    text-3xl font-bold text-zinc-200
                    justify-center max-sm:m-0 max-sm:px-0
                ">
                    Informações
                </h2>

                <div className="
                    p-14 pt-0 w-full
                    flex flex-col
                ">

                    <div className="
                        flex flex-row flex-wrap gap-5 justify-evenly
                    ">

                        <div className="flex min-w-[200px]">
                            <div className="flex flex-col">
                                <h4 className="pb-2 text-zinc-200 font-semibold">Links</h4>

                                <a className="text-zinc-200 text-sm" href="https://videira.ifc.edu.br/biblioteca">Página biblioteca</a>
                                <a className="text-zinc-200 text-sm" href="https://videira.ifc.edu.br/biblioteca">BVirtual</a>
                                <a className="text-zinc-200 text-sm" href="https://videira.ifc.edu.br/biblioteca">Pergamum</a>

                            </div>
                        </div>

 

                        <div className="flex min-w-[200px]">
                            <div className="flex flex-col">
                                <h4 className="pb-2 text-zinc-200 font-semibold">Contatos</h4>

                                <p className="text-zinc-200 text-sm">
                                    <span>Biblioteca</span>: (49) 3533-4917
                                </p>

                                <p className="text-zinc-200 text-sm">
                                    <span>Whatsapp</span>: (49) 3533-4917
                                </p>

                            </div>
                        </div>

                       <div className="flex min-w-[200px] ">
                            <div className="flex flex-col">
                                <h4 className="pb-2 text-zinc-200 font-semibold"> Horário de Funcionamento </h4>

                                <p className="text-zinc-200 text-sm">
                                    <span>Segunda à sexta</span>:  7h30 às 22h.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer } 