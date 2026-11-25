import Stool from "../assets/home/stool.jpg";

export default function Header() {
    return (
        <header className="bg-gray-900 py-2 text-white">
            <div className="mx-auto px-6 container">
                <a className="flex flex-row items-center gap-4 font-bold hover:text-gray-300 text-xl transition" href="/">
                    <img src={Stool} alt="logo" className="w-12 h-12" />
                    <span>My Digital Canvas</span>
                </a>
            </div>
        </header>
    );
}