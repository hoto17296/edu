import { useState } from "react"
import "./App.css"

function App() {
  const [value, setValue] = useState<string>("")

  const onChangeValue: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let value = event.currentTarget.value
    value = value.replaceAll(",", "")
    if (value.match(/^-?\d*(\d\.)?\d*$/)) setValue(value)
  }

  return (
    <>
      <h1>Number</h1>
      <form>
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={onChangeValue}
        />
      </form>
    </>
  )
}

export default App
