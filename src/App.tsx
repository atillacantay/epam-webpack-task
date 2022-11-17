import React from "react"

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Hello world!</h1>
      <b>{process.env.SECRET}!!</b>
    </div>
  )
}
