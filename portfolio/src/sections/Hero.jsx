function Hero() {
    return (
            <section
                id="hero"
                className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-6 px-6"
                >
                <h1 className="text-4xl md:text-6xl font-bold">
                    Ronik Joshi
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                    Front-End Developer | Creating Modern Interfaces | Lifelong Learner
                </p>

                <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="Ronik Joshi - Profile Picture"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-2 border-cyan-400 shadow-lg"
                />
            </section>
        )
}

export default Hero;