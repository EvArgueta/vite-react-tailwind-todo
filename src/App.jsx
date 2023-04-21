import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
            <header className="container mx-auto px-4 pt-8">

              <div className="flex justify-between text-3xl font-bold tracking-[0.3em]">
                <h1 className="uppercase text-white">Todo</h1>
                <button>
                  <MoonIcon className="fill-red-600"></MoonIcon>
                </button>

                
              </div>
                <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8">

                  <span className="rounded-full border-2 w-5 h-5 inline-block">

                  </span>
                    <input 
                    className="w-full text-gray-400 outline-none"
                    type="text" placeholder="Create a new year" />
                </form>
            </header>
            <main className="container mx-auto px-4 mt-8">

              <div className="bg-white rounded-md [&>article]:p-4">
                <article className="flex gap-4  border-b-gray-400 border-b ">
                  <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                  <p className="text-gray-600 grow">Complee online javascriopt course</p>
                  <button className="flex-none ml-auto">
                  <CrossIcon></CrossIcon>
                  </button>
                </article>
                <article className="flex gap-4  border-b-gray-400 border-b ">
                  <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                  <p className="text-gray-600 grow">Complee online javascriopt course</p>
                  <button className="flex-none ml-auto">
                  <CrossIcon></CrossIcon>
                  </button>
                </article>
                <article className="flex gap-4  border-b-gray-400 border-b ">
                  <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                  <p className="text-gray-600 grow">Complee online javascriopt course</p>
                  <button className="flex-none ml-auto">
                  <CrossIcon></CrossIcon>
                  </button>
                </article>
                <article className="flex gap-4  border-b-gray-400 border-b ">
                  <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                  <p className="text-gray-600 grow">Complee online javascriopt course</p>
                  <button className="flex-none ml-auto">
                  <CrossIcon></CrossIcon>
                  </button>
                </article>
                <article className="flex gap-4  border-b-gray-400 border-b ">
                  <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                  <p className="text-gray-600 grow">Complee online javascriopt course</p>
                  <button className="flex-none ml-auto">
                  <CrossIcon></CrossIcon>
                  </button>
                </article>
               
                <section className="py-4 px-4 flex justify-between">
                  <span className="text-gray-400">5 items left</span>
                  <button className="text-gray-400">Clear completed</button>
                </section>
              </div>
            </main>
            <section className="px-4 container mx-auto">
              <div className=" flex justify-center gap-6 p-4 rounded-md  bg-white mt-4">

              <button className="text-blue-700">All</button>
              <button className="hover:text-blue-700">Active</button>
              <button className="hover:text-blue-700">Completed</button>
              </div>
            </section>
            <p className="text-center mt-8">Drag and Drop</p>
        </div>
    );
};

export default App;
