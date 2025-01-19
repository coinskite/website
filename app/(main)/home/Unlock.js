
function Unlock() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid md:grid-cols-5 grid-cols-1 gap-6 bg-[#1C1C24]">
          <div className="bg-[#22C954] p-4 flex flex-col justify-center items-center">
            <div className="w-16 h-16 mb-2">
              <img
                src="/img/home/unlock1.png"
                alt="Blockchain Icon"
                className="w-full h-full"
              />
            </div>
            <p className="text-black text-sm font-bold text-center">Discover Our Services</p>
          </div>

          <div className="md:col-span-2 flex items-center p-4">
            <h2 className="text-white text-[26px] lg:text-3xl font-semibold">
              Unlock the Potential of<br />Blockchain
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <img
              src="/img/home/unlock2.png"
              alt="Industry Icon"
              className=" h-10 mb-2 object-cover"
            />
            <p className="text-gray-400 text-xs font-normal text-center">
              Revolutionize Your<br />Industry
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-16 h-10">
              <img
                src="/img/home/unlock4.png"
                alt="Industry Icon"
                className="mb-2 absolute inset-0 "
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">97</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs text-center mt-2">
              Accelerate Your Digital<br />Transformation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;