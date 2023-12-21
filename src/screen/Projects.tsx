function Projects() {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-screen-lg mt-10">
                <div className="card bg-base-100 shadow-xl flex-row">
                    <figure className="inline flex px-10 w-40 h-40">
                        <img
                            src=""
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body">
                        <div className="flex items-center">
                            <h1 className="mr-5 text-2xl font-bold">Project 1</h1>
                            <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white mr-2">
                                <span className="">Web Design</span>
                            </div>
                            <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white mr-2">
                                <span className="">React</span>
                            </div>
                            <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white mr-2">
                                <span className="">Typescript</span>
                            </div>
                            <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                                <span className="">Tailwind</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.

</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;