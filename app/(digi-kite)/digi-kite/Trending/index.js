import list from './list';

function Trending() {
  return (
    <section>
      <h1>Trending in <strong className="text-digi-primary">all categories</strong></h1>

      <div className='grid gap-4 md:grid-cols-3'>
        {
          list.map(l => (
            <div
              key={l.title}
              className="relative max-w-xs mx-auto"
            >
              <img src={l.img} alt={l.title} />
              <div className="absolute bottom-4 p-2 lg:px-4">
                <p className="df mb-1">{l.title} <span className='text-xs'>{l.by}</span> <img src="./img/digi/trending/bluetick.png" alt="bluetick" /> </p>
                <p className='text-digi-light leading-5'>{l.info}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Trending