
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
        <div className="df justify-between mb-8">
          <h6 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Latest Blog</h6>
          <button className="px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold bg-gradient-to-r from-[#1FB64C] to-[#0E5021] rounded">
            View All
          </button>
        </div>

        <div className="md:flex md:space-x-4 grid grid-cols-1 gap-6 md:gap-0 md:overflow-x-auto no-scroll-bar">
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