function Card({ i, starting, img, title, point, profit, avg, isPulse }) {
  return (
    <div
      className={`df p-2 ${starting + i + 1 < 10 ? "pl-4" : ""}`}
      style={{ borderBottom: "1px solid rgba(255,255,255,.4)" }}
    >
      <div>{starting + i + 1}</div>

      <div className="df flex-auto text-sm">
        <div>
          <img
            src={img}
            alt="collection"
            className="w-8"
          />
        </div>

        <div className="flex-auto">
          <p>{title}</p>
          <p className="text-digi-light df"><span className="text-xs">Floor price:</span> {point}</p>
        </div>

        <div className="text-right">
          <p className={isPulse ? 'text-digi-primary' : profit !== "-" ? "text-[#EB5757]" : "text-digi-light"}>{profit}</p>
          <p className="text-digi-light">{avg}</p>
        </div>
      </div>
    </div>
  )
}

export default Card