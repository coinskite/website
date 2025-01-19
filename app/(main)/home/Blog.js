// const list = [
//   {
//     id: "1",
//     src: "/img/home_new/read articles/1.png",
//     title: "Artificial Intelligence",
//     subtitle: "'Godfather of AI' resigns from Google, warns of the dangers of AI'",
//     para: "Dr. Geoffrey Hinton is understood to have worked on artificial intelligence his whole life and is now warning how dangerous the technology could be.",
//     date: "20/05/2023"

//   },
//   {
//     id: "2",
//     src: "/img/home_new/read articles/2.png",
//     title: "Investment",
//     subtitle: "MicroStrategy's Bitcoin conviction 'strong' as it posts Q1 profit",
//     para: "Dr. Geoffrey Hinton is understood to have worked on artificial intelligence his whole life and is now warning how dangerous the technology could be.",
//     date: '20/05/2023'
//   },
//   {
//     id: "3",
//     src: "/img/home_new/read articles/3.png",
//     title: "Artificial Intelligence",
//     subtitle: "7,800 jobs at IBM could be replaced by AI within years, CEO suggests",
//     para: "IBM CEO Arvind Krishna says that roughly 30% of their non-customer-facing positions could be covered by artificial intelligence over a five-year period.",
//     date: "20/05/2023"
//   },
// ]


// function Card({ src, title, para, subtitle, date }) {
//   return (
//     <div className="grid w-[246px] xl:w-[310px] border border-primary-900 rounded-t-[10px]">
//       <img
//         className="w-full rounded-t-[10px]"
//         src={src}
//         alt=""
//       />

//       <div className="p-3 text-[#505050] bg-[#BFFFD3] rounded-t-[10px]">
//         <p className="df justify-between mt-2 text-xs xl:text-sm text-[#A4A4A4]">
//           <span>{title}</span>
//           <span>{date}</span>
//         </p>
//         <p className="my-1.5 mdb:my-2 text-[10px] xl:text-xs text-[#505050]">
//           {subtitle}
//         </p>
//         <p className="text-[8px] xl:text-[10px] text-[#505050]">
//           {para}
//         </p>
//       </div>
//     </div>
//   )
// }

// function Blog() {
//   return (
//     <div className="pad-main-3 2xl:py-14">
//       <div className="max-w-7xl mx-auto relative">
//         <div className="flex items-center justify-center lg:justify-start">
//           <div className="mb-6 mdb:mb-10 text-xs md:text-[22px] lg:text-[36px] font-semibold">
//             Latest Blog
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8">
//           {list.map(l => <Card key={l.id} {...l} />)}
//         </div>

//         <a
//           className="portfolio-btn active block w-fit mt-5 lg:mt-0 mx-auto px-2 py-1 xs:px-4 xs:py-1.5 rounded-[5px] xs:rounded-[5px] lg:absolute lg:right-0 lg:top-4 lg:mx-0"
//           href="/blog"
//         >
//           View All
//         </a>

//         <div className="absolute w-56 h-32 top-0 left-0 blured-bg z-[1]"></div>
//       </div>
//     </div>
//   )
// }

// export default Blog


import React from 'react';

const NewsCard = ({ date }) => (
  <div className="w-[350px] overflow-hidden bg-[#1F232D] rounded-[10px]">
    <div className="mb-4">
      <img
        src="/img/home/blog.png"
        alt="Growth Games Logo"
        className="h-full w-full"
      />
    </div>
    <div className='p-4'>
      <div className='flex justify-between'>
        <h3 className="text-white text-[7px] md:text-[10px] lg:text-xs font-semibold mb-2">
          Wyoming proposes bill for Strategic Bitcoin Reserve
        </h3>
        <p className="text-gray-400 text-[4px] md:text-[6px] lg:text-[8px] whitespace-nowrap mt-1">{date}</p>
      </div>
      <p className="text-gray-300 text-[6px] md:text-[8px] lg:text-[10px] mb-3">
        Wyoming has become the latest US state to propose a bill for a Strategic Bitcoin Reserve, just days before Donald Trump's US presidential inauguration day. The $1.2 billion repayment is seen as a significant liquidity event for the industry that may bolster cryptocurrency valuations.
      </p>
    </div>
  </div>
);

const Blog = () => {
  const news = [
    { id: 1, date: '18-01-2025' },
    { id: 2, date: '18-01-2025' },
    { id: 3, date: '18-01-2025' },
    { id: 4, date: '18-01-2025' }
  ];

  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto relative">
        <div className="md:flex md:overflow-x-auto md:space-x-4 grid grid-cols-1 gap-6 md:gap-0">
          {news.map((item) => (
            <div key={item.id} className="md:flex-shrink-0 flex justify-center items-center">
              <NewsCard date={item.date} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;