import "./App.css"; // Import the CSS file
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// import About from "./screen/About";
import Projects from "./screen/Projects";
export default function App() {
  return (
    // <div className="portfolio-container">
    //   <NavBar></NavBar>
    //   <section className="bg-white dark:bg-gray-900">
    //     <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    //       <div className="mr-auto place-self-center lg:col-span-7">
    //         <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
    //           Hi, my name is Panav 👋
    //         </h1>
    //         <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
    //           I have a strong enthusiasm for creating innovative algorithms and
    //           programs, driven by a deep passion for the fields of AI, Robotics,
    //           and Computer Science.
    //         </p>

    //         <div className="flex space-x-4">
    //           <svg
    //             href="#"
    //             width="50px"
    //             height="50px"
    //             viewBox="0 0 16 16"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //           >
    //             <path
    //               fill="#0A66C2"
    //               d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
    //             />
    //           </svg>
    //           <svg
    //             width="50px"
    //             height="50px"
    //             viewBox="0 0 16 16"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //           >
    //             <path
    //               fill="#000000"
    //               fill-rule="evenodd"
    //               d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
    //               clip-rule="evenodd"
    //             />
    //           </svg>
    //           <svg
    //             width="50px"
    //             height="50px"
    //             viewBox="0 0 16 16"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //           >
    //             <path
    //               fill="#FC6D26"
    //               d="M14.975 8.904L14.19 6.55l-1.552-4.67a.268.268 0 00-.255-.18.268.268 0 00-.254.18l-1.552 4.667H5.422L3.87 1.879a.267.267 0 00-.254-.179.267.267 0 00-.254.18l-1.55 4.667-.784 2.357a.515.515 0 00.193.583l6.78 4.812 6.778-4.812a.516.516 0 00.196-.583z"
    //             />
    //             <path fill="#E24329" d="M8 14.296l2.578-7.75H5.423L8 14.296z" />
    //             <path
    //               fill="#FC6D26"
    //               d="M8 14.296l-2.579-7.75H1.813L8 14.296z"
    //             />
    //             <path
    //               fill="#FCA326"
    //               d="M1.81 6.549l-.784 2.354a.515.515 0 00.193.583L8 14.3 1.81 6.55z"
    //             />
    //             <path
    //               fill="#E24329"
    //               d="M1.812 6.549h3.612L3.87 1.882a.268.268 0 00-.254-.18.268.268 0 00-.255.18L1.812 6.549z"
    //             />
    //             <path fill="#FC6D26" d="M8 14.296l2.578-7.75h3.614L8 14.296z" />
    //             <path
    //               fill="#FCA326"
    //               d="M14.19 6.549l.783 2.354a.514.514 0 01-.193.583L8 14.296l6.188-7.747h.001z"
    //             />
    //             <path
    //               fill="#E24329"
    //               d="M14.19 6.549H10.58l1.551-4.667a.267.267 0 01.255-.18c.115 0 .217.073.254.18l1.552 4.667z"
    //             />
    //           </svg>
    //         </div>
    //       </div>
    //       <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
    //         <img src="" alt="Panav Mhatre" />
    //       </div>
    //     </div>
    //   </section>
    //   <section className="bg-white dark:bg-gray-900">
    //     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    //       <div>
    //         <img
    //           className="h-auto max-w-full rounded-lg rotate-3	"
    //           src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div>
    //         <img
    //           className="h-auto max-w-full rounded-lg rotate--6"
    //           src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div>
    //         <img
    //           className="h-auto max-w-full rounded-lg rotate-3	"
    //           src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </section>
    //   <Footer></Footer>
    // </div>
    <Projects></Projects>
  );
}
