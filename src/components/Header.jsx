import MoonIcon from "./icons/IconMoon";
const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between text-3xl font-bold tracking-[0.3em]">
                <h1 className="uppercase text-white">Todo</h1>
                <button>
                    <MoonIcon className="fill-red-600"></MoonIcon>
                </button>
            </div>
        </header>
    );
};

export default Header;
