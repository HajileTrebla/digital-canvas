
import Canvas from "../assets/home/purple-canvas.jpg";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <main className="flex flex-col bg-amber-100 min-h-screen text-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 bg-violet-600 h-full max-h-200">

                {/* Hero Content */}
                <div className="flex flex-col justify-center items-center px-6 py-16 text-center">
                    <h1 className="font-bold text-white text-5xl tracking-tight">
                        My Digital Canvas
                    </h1>

                    <p className="mt-4 max-w-xl text-gray-200 text-lg">
                        A collection of simple website designs and concepts.
                    </p>

                    <a
                        href="#projects"
                        className="bg-amber-400 hover:bg-amber-100 mt-8 px-6 py-3 border-4 border-amber-600 rounded-lg font-bold text-black transition"
                    >
                        Explore Projects
                    </a>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center items-center p-6">
                    <img
                        src={Canvas}
                        alt="Purple canvas artwork"
                        className="rounded-lg w-full h-full max-h-150 object-cover"
                    />
                </div>

            </section>

            {/* Projects */}
            <section
                id="projects"
                className="mx-auto px-6 py-16 max-w-6xl"
            >
                <h2 className="mb-8 font-bold text-3xl">
                    Featured Projects
                </h2>

                <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
                    {/* Project cards go here */}
                </div>
            </section>

        </main>
    );
}
