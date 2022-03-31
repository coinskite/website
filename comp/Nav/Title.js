function Title({ title, children, active, updateAct }) {
  return (
    <div className="cp nav-dd-parent">
      <div className="df" style={{ gap: "3px" }}>
        <p className="flex1" onClick={() => updateAct(title)}>{title}</p>
      </div>

      <div className="nav-tri"></div>
      <div className={`nav-dd ${active === title ? "open" : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Title