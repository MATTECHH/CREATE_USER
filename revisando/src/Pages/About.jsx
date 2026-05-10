const About = ({ data }) => {

    return (
        <section className="bg-neutral-950">

            <div className="text-center mt-10">
                <h1 className="text-3xl font-bold text-white mb-2">
                    Usuários cadastrados 👨‍💻
                </h1>

                <p className="text-neutral-400">
                    Lista de usuários enviados pelo formulário
                </p>
            </div>


            {data.length === 0 ? (
                <div className="text-center text-neutral-500 text-lg">
                    Nenhum usuário encontrado 🚫
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ml-2 mt-10">

                    {data.map((u) => (
                        <div key={u.id} className=" bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:border-neutral-600 duration-300 cursor-pointer">

                            <div className="flex items-center gap-3 mb-4">
                                <div className=" w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-black text-lg">
                                    {u.name?.charAt(0)}
                                </div>

                                <div>
                                    <h1 className="text-xl text-white font-bold uppercase">
                                        {u.name}
                                    </h1>

                                    <p className="text-neutral-500 text-sm">
                                        ID: {u.id}
                                    </p>
                                </div>
                            </div>


                            <div className="bg-neutral-800 rounded-xl p-3">
                                <p className="text-neutral-300 break-all">
                                    📧 {u.email}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            )}
        </section>
    );
};

export default About;