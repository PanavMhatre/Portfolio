import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NavBar from "../components/NavBar";
import PanavImage from "../assets/PanavSquare.png";
import Footer from "../components/Footer";
function About() {
    return (
        <div className="w-full">
            <NavBar></NavBar>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                <section className="bg-white animate-fade-up">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                About Me
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl" style={{ lineHeight: "1.5" }}>
                                    Hi, I'm Panav! I am deeply passionate about the fields of AI, Robotics, and Computer Science, with a strong foundation in various programming languages such as Python, Java, SQL, XML, Dart, and Git. My experience includes working with technologies such as Flutter, Swift, Numpy, Matplotlib, Seaborn, and Pandas. While I am proud of what I have accomplished so far, I am eager to delve deeper into more advanced coding languages, engineering concepts, and ML/AI concepts to further develop my skills and keep pace with the latest developments in these exciting fields. Specifically, I am interested in exploring natural language processing and machine learning applications in robotics. I am highly motivated to continue my education and training, and I am excited to contribute my skills and knowledge to the rapidly evolving landscape of AI, Robotics, and Computer Science.
                                </p>
                            </p>
                        </div>
                        <div className="lg:col-span-5 lg:flex lg:items-start ml-5">
                            <div className="">
                                <Image
                                    width={400}
                                    alt="NextUI hero Image"
                                    src={PanavImage}
                                    className="rotate-2"
                                />
                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-10 flex"
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
            <Footer />
        </div>
    );
}

export default About;
