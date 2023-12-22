
function Footer() {
    return (

<section className="relative bg-blueGray-200 pb-6">
    <div className="my-6 border-blueGray-300">
    <hr className="h-px my-8 bg-gray-200 border-0 "/>

    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span> <a className="text-blueGray-500 hover:text-gray-800" target="_blank"> Panav Mhatre</a>
          
        </div>
      </div>
    </div>
    </div>
</section>
    );
}

export default Footer;