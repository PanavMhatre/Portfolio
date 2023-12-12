function NavBar() {
  return (
    <div>
      <div className=" flex-wrap -mx-3 mb-5">
        <div className="px-3 mb-6  mx-auto w-11/12 bg-white rounded-xl">
          <div className="sm:flex items-stretch justify-between grow lg:mb-0  py-5 px-5">
            <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
              <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
                <div className="flex space-x-4">
                  <span className="text-[1.15rem]">About</span>
                  <span className="text-[1.15rem]">Projects</span>
                  <span className="text-[1.15rem]">Resume</span>
                </div>
                <div className="relative flex items-center ml-2 lg:ml-4">
                  <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center w-12 h-12 text-base font-semibold leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark "
                  >
                    <a
                      href="javascript:void(0)"
                      className="flex p-2 items-center justify-center w-12 h-12 text-base font-semibold leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
