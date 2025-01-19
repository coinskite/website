const list = [
  {
    id: "1",
    name: "Ganeshan",
    src: "/img/home_new/testimonials/1.png",
    role: "Founder & CEO"

  },
  {
    id: "2",
    name: "Raj Kumar",
    src: "/img/home_new/testimonials/2.png",
    role: "Founder & CEO"

  },
  {
    id: "3",
    name: "Beljin Jarosh",
    src: "/img/home_new/testimonials/3.png",
    role: "Founder & CEO"

  }
];

function Card({ src, name, role, }) {
  return (
    <div className="bg-[#1F232D] rounded p-4">
      <div className="flex flex-col items-center justify-start gap-4 mb-4">
        <div className="relative w-32 h-32">
          {/* Profile Image */}
          <img
            src={src} // Replace 'src' with your image source
            alt=""
            className="absolute w-28 h-28 object-cover rounded-full top-2 left-2"
          />

          {/* Left and Right Colored Border */}
          <div className="absolute inset-0 rounded-full">
            {/* Left Half (Green) */}
            <div className="absolute top-0 left-0 w-1/2 h-full border-l-4 border-t-4 border-b-4 border-green-500 rounded-bl-full rounded-tl-full"></div>
            {/* Right Half (Yellow) */}
            <div className="absolute top-0 right-0 w-1/2 h-full border-r-4 border-t-4 border-b-4 border-yellow-500 rounded-br-full rounded-tr-full"></div>
          </div>
        </div>
        <button className="font-normal text-[10px] xs:text-xs sm:text-sm md:text-sm lg:text-xs xl:text-sm bg-[#22C954] p-1 rounded-[5px]">
          {role}
        </button>


        <div className="text-left w-fit">
          <p className="text-white font-normal text-[8px] xs:text-xs sm:text-sm">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

function Member() {
  return (
    <div className="pad-main-3">
      <div className="max-w-5xl mx-auto relative">
        <div className='grid lg:grid-cols-3 justify-center gap-8 relative'>
          {list.map(l => <Card key={l.id} {...l} />)}
        </div>
      </div>

    </div>
  );
}

export default Member;