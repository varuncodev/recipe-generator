import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import toast from "react-hot-toast"
import { GoogleGenAI } from "@google/genai";
import { addRecipe } from "../Utils/CacheSlice";

const ai = new GoogleGenAI({apiKey : import.meta.env.VITE_API_KEY});

const Form = ({selectedItem, setSelectedItem, aiRes, setAiRes, showBtn, setShowBtn}) => {


  const data = useSelector(store => store.recipe)
  const data2 = useSelector(store => store.cache)
  const[temp, setTemp] = useState(-1)
  const[text, setText] = useState("")
  const dispatch = useDispatch()
  const[suggestions, setSuggestions] = useState([])
  // console.log(text)

  useEffect(() => {
    let temp = text.trim().toLowerCase()
    if(temp.length == 0){
      setSuggestions([])
      return
    }
    let ans = data2.filter((item) => {
      return item.query.includes(temp)
    })
    setSuggestions(ans)
  }, [text])

  return (
    <div className="w-[50vw] bg-white rounded-2xl shadow-md p-6 border border-red-200 min-h-[40vh]">
      <h2 className="text-xl font-semibold text-red-500 mb-4">Add Recipe</h2>
      <div className="flex flex-col gap-4">
        {/* Text Input */}
       <input 
          type="text" 
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          placeholder="Recipe Name" 
          className="rounded-lg px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />

       {suggestions.length > 0 && <div className="border border-gray-300">

          {suggestions.map((item) => {
            return (
              <p onClick={() => {
                setText(item.query)
              }} className="hover:bg-gray-300 cursor-pointer">{item.query}</p>
            )
          })}
          {/* <p className="hover:bg-gray-300 cursor-pointer">Chai</p> */}
          {/* <p className="hover:bg-gray-300 cursor-pointer">Chai Rusk</p> */}
          {/* <p className="hover:bg-gray-300 cursor-pointer">Chai Toast</p> */}
        </div>}


        {/* OR Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Dropdown */}
        <select
        value={selectedItem}
        onChange={(e) => {
          // console.log(e.target.value)
          // setSelectedItem(e.target.value)
          setTemp(e.target.value)
        }}
          className=" rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-gray-700"
        >
          <option selected disabled value="">Select Recipe</option>

          {data.map((item) => {
            return (
              <option value={item.id} key={item.id}>{item.name}</option>
            )
          })}
        </select>

        {/* Button */}
        {showBtn && <button
        onClick={() => {
          setAiRes({})
          setSelectedItem("")
          setTemp(-1)
          if(text.length > 0)
          {

            async function getGeminiSeData()
            {
              setShowBtn(false)
              const res = await ai.models.generateContent({
                model : "gemini-2.5-flash",
                contents : prompt + text
              })
              dispatch(addRecipe({query : text, aiResult : JSON.parse(res.text.slice(8, res.text.length - 4))}))
              setShowBtn(true)
              setAiRes(JSON.parse(res.text.slice(8, res.text.length - 4)))
              setText("")
            }
            const foundItem = data2.find((item) => {
              return item.query == text.toLowerCase()
            })
            console.log(foundItem)
            if(!foundItem){
              getGeminiSeData()
              return 
            }
            else
            {
              setAiRes(foundItem?.aiResult)
              setText("")

            }
          }
          else if(temp != -1)
          {
           setSelectedItem(temp)

          }
          else
          {
            toast.error("Please select a valid dish")
          }
         
        }}
        className="bg-red-500 text-white cursor-pointer rounded-lg py-2 font-medium hover:bg-orange-600 transition">
          Generate
        </button>}
      </div>
    </div>
  )
}

export default Form




let prompt = `You are a recipe generator.  
I will provide the name of a dish, and you must return a JSON object with the following structure:  

{
  id: <unique integer>,
  name: "<dish name>",
  ingredients: [<list of ingredients with measurements>],
  process: [<step-by-step cooking instructions as an array of strings with each string being numbered>]
}

Rules:
- Return only JSON. No extra text, no code blocks, no explanations.  
- Ensure the JSON is valid and can be parsed directly with JSON.parse().  


Dish name: `