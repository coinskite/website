
const list = [
    {
        key: "1",
        title: "Innovative Solutions",
        para: "Impressed with Coinskite's innovative blockchain solutions. They have transformed our business operations",
        src: "/img/home_new/testimonials/1.png",
        name: "Jane Cooper",
        role: "CEO at ABC Corporation"

    },
    {
        key: "2",
        title: "Reliable and Trustworthy",
        para: "Trustworthy blockchain solutions provided. They have boosted our productivity and fostered transparency",
        src: "/img/home_new/testimonials/2.png",
        name: "martin luther",
        role: "CEO at ABC Corporation"

    },
    {
        key: "3",
        title: "Exceptional Service Provider",
        para: "Exceptional blockchain services offered. They have given us a competitive edge in the digital landscape",
        src: "/img/home_new/testimonials/3.png",
        name: "james william",
        role: "CEO at ABC Corporation"

    }
]
function Card({ src, title, para, name, role, }) {
    return (
        <div className='df'>
            <img
                className=''
                src={src}
                alt=''
            />
            <p className="text-lg lg:text-[22px] xl:text-lg font-bold text-[#2B2C3B]">
                {title}
            </p>
            <p className="text-sm md:text-base lg:text-sm font-normal">
                {para}
            </p>
            <p className="text-lg font-bold text-[#22C954]">
                {name}
            </p>
            <p className="text-sm font-normal">
                {role}
            </p>
        </div>
    )
}

function Clients() {
    return (
        <div>
            <div>
                <p className="text-sm xs:text-lg sm:text-[28px]  lg:text-[32px] xl:text-[34px] font-bold text-[#E8E00E]">
                    Our Clients Speak
                </p>
                <p className="text-[8px] xs:text-xs xl:text-base font-normal">
                    We have been working with clients around the world
                </p>
            </div>

            <div className='grid grid-cols-3 gap-8 bg-[#BFFFD3]'>
                {list.map(l => <Card {...l} />)}
            </div>
        </div>
    )
}

export default Clients