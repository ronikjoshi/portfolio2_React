export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-[#2A2A2A] text-white"
    >
      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Ronik Joshi
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
        Front-End Developere | Creating Modern Interfaces | Lifelong Learner
      </p>

      {/* Profile Image */}
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Ronik Joshi - Profile Picture"
        className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border border-neutral-700 shadow-lg"
      />
    </section>
  );
}
