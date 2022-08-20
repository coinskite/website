import React from 'react'

function Switch({ active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`dc pr cp switch ${active ? "active" : ""}`}
    >
    </div>
  )
}

export default Switch