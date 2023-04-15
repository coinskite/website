import lists from './lists';

function Category() {
  return (
    <section>
      <h1>CATEGORIES</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          lists.map(list => (
            <div
              className='df p-2 text-sm rounded-lg bg-[#0B0A0A]'
              key={list.title}
            >
              <img
                className="w-8 ml-2"
                src={list.img}
                alt="category"
              />
              {list.title}
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Category