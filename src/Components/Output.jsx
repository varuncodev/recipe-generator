import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from './Loader'

const Output = ({ selectedItem, aiRes, showBtn, setShowBtn }) => {
  const recipes = useSelector(store => store.recipe)
  const myRecipe = recipes[selectedItem - 1]

  return (
    <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border border-pink-200 w-[50vw] overflow-y-auto min-h-[40vh] ">
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
        Your Recipe
      </h2>

      {myRecipe && (
        <div className="space-y-6">
          {/* Recipe Title */}
          <h1 className="text-3xl font-semibold text-gray-800 text-center">
            {myRecipe?.name}
          </h1>

          {/* Ingredients */}
          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              🛒 Ingredients
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {myRecipe?.ingredients.map((item, idx) => (
                <li key={idx} className="pl-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              👩‍🍳 Steps
            </h3>
            <ol className="space-y-3 text-gray-700 leading-relaxed">
              {myRecipe?.process.map((step, idx) => (
                <li key={idx} className="pl-2">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {
        aiRes.id && (
          <div className="space-y-6">
          {/* Recipe Title */}
          <h1 className="text-3xl font-semibold text-gray-800 text-center">
            {aiRes?.name}
          </h1>

          {/* Ingredients */}
          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              🛒 Ingredients
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {aiRes?.ingredients.map((item, idx) => (
                <li key={idx} className="pl-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              👩‍🍳 Steps
            </h3>
            <ol className="space-y-3 text-gray-700 leading-relaxed">
              {aiRes?.process.map((step, idx) => (
                <li key={idx} className="pl-2">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        )
      }

      {!showBtn && (
        <div className='h-[100%] w-[100%] flex justify-center items-center'>
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default Output