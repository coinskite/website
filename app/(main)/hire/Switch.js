"use client";

function Switch({ active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`dc relative cursor-pointer switch ${active ? "active" : ""}`}
    >
    </div>
  )
}

export default Switch