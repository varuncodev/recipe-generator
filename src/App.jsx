import { useState } from "react"
import Form from "./Components/Form"
import Output from "./Components/Output"
import {Toaster} from "react-hot-toast"


const App = () => {
  const[selectedItem, setSelectedItem] = useState()
  const[aiRes, setAiRes] = useState({})
  const[showBtn, setShowBtn] = useState(true)

  // console.log(aiRes)

  return (
    <div className="min-h-[100vh] bg-gradient-to-br from-cyan-200 to-pink-300 p-6">
      <Toaster />
      <h1 className="text-4xl font-bold text-center mb-6 text-pink-600 drop-shadow-sm">
        Recipe Generator
      </h1>
      <div className="flex flex-wrap gap-5 justify-center items-start">
        <Form showBtn={showBtn} setShowBtn={setShowBtn} aiRes={aiRes} setAiRes={setAiRes} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <Output showBtn={showBtn} setShowBtn={setShowBtn} aiRes={aiRes} selectedItem={selectedItem} />
      </div>
    </div>
  )
}

export default App