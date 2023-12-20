
function NavBar() {
  const isDarkTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;


  return (
    <div className={`flex justify-center mt-5`}>
      <div className="flex-wrap">
        <div className="w-11/12 rounded-xl">
          <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-5 px-5">
            <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
              <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
                <div
                  className={`flex space-x-7 ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <a href="/about/">
                    <span className="text-[1.15rem]">
                      About
                    </span>
                  </a>
                  <a href="/projects/">
                    <span className="text-[1.15rem]">Projects</span>
                  </a >
                  <a href="/blog/">
                    <span className="text-[1.15rem]">Blog</span>
                  </a>
                  <a href="/portfolio/">
                    <span className="text-[1.15rem]">Portfolio</span>
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
