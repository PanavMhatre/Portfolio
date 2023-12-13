
function NavBar() {



  return (
    <div className="flex justify-center mt-5">
      <div className="flex-wrap">
        <div className="w-11/12 bg-white rounded-xl">
          <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-5 px-5">
            <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
              <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
                <div className="flex space-x-7">
                  <span className="text-[1.15rem]">About</span>
                  <span className="text-[1.15rem]">Projects</span>
                  <span className="text-[1.15rem]">Resume</span>
                  <span className="text-[1.15rem]">Portfolio</span>
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
