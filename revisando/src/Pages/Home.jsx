
const Home = ({status, onName, onEmail, handleSubmit, email, name}) => {

    return (
        <section className="flex items-center justify-center px-4 layout bg-neutral-950">
            
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6 mt-10">
                
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white">
                        Cadastro 🚀
                    </h1>

                    <p className="text-neutral-400 mt-2">
                        Envie seu nome e email
                    </p>
                </div>


                <label className="block">
                    <span className="text-neutral-300 text-sm mb-2 block">
                        Nome
                    </span>

                    <input
                        type="text"
                        value={name}
                        onChange={onName}
                        placeholder="Digite seu nome..."
                        className="
                            w-full
                            bg-neutral-800
                            text-white
                            px-4
                            py-3
                            rounded-xl
                            outline-none
                            border
                            border-neutral-700
                            focus:border-white
                            duration-300
                        "
                    />
                </label>


                <label className="block">
                    <span className="text-neutral-300 text-sm mb-2 block">
                        Email
                    </span>

                    <input
                        type="email"
                        value={email}
                        onChange={onEmail}
                        placeholder="Digite seu email..."
                        className="
                            w-full
                            bg-neutral-800
                            text-white
                            px-4
                            py-3
                            rounded-xl
                            outline-none
                            border
                            border-neutral-700
                            focus:border-white
                            duration-300
                        "
                    />
                </label>


                <button
                    type="submit"
                    className="
                        w-full
                        bg-white
                        text-black
                        py-3
                        rounded-xl
                        font-semibold
                        cursor-pointer
                        hover:scale-[1.02]
                        duration-300
                        disabled:cursor-not-allowed
                    "

                    disabled={!name || !email}
                >
                    Enviar ✨
                </button>


                {status && (
                    <p className="text-center text-sm text-green-400">
                        {status}
                    </p>
                )}

            </form>

        </section>
    );
};

export default Home;