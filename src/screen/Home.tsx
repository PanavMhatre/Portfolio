import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className='bg-white'>
            <div className="portfolio-container animate-fade-up">
                <NavBar></NavBar>
                <section className="bg-white">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                Hi, my name is Panav 👋
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                                I have a strong enthusiasm for creating innovative algorithms and
                                programs, driven by a deep passion for the fields of AI, Robotics,
                                and Computer Science.
                            </p>

                            <div className="flex space-x-4">
                                
                            </div>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="" alt="Panav Mhatre" />
                        </div>
                    </div>
                </section>
                <section className="bg-white">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <img
                                className="h-60 w-90 rounded-lg rotate-3"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg rotate--6"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg rotate-3"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;