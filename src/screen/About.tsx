import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NavBar from "../components/NavBar";

function About() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <div>
            <NavBar></NavBar>
            <div style={{ marginLeft: "0", display: "block", justifyContent: "center" }}>
                <section className={`bg-white ${isDarkMode ? "dark:bg-gray-900" : ""}`}>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto lg:col-span-7">
                            <h1 className={`max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ${isDarkMode ? "dark:text-white" : ""}`}>
                                Hi, my name is Panav 👋
                            </h1>
                            <p className={`max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ${isDarkMode ? "dark:text-gray-400" : ""}`}>
                                I have a strong enthusiasm for creating innovative algorithms and
                                programs, driven by a deep passion for the fields of AI, Robotics,
                                and Computer Science.
                            </p>
                        </div>
                        <div className="lg:col-span-5 lg:flex lg:items-start">
                            <div className="">
                                <Image
                                    width={400}
                                    alt="NextUI hero Image"
                                    src="src/assets/PanavSquare.png"
                                    className="rotate-2"
                                />

                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-4 flex"
                                >
                                    Follow on Twitter
                                </Link>
                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-4 flex"
                                >
                                    Follow on Github
                                </Link>
                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-4 flex"
                                >
                                    Follow on LinkedIn
                                </Link>
                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-4"
                                >
                                    Follow on Instagram
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
