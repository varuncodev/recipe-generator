import { createSlice } from "@reduxjs/toolkit";


const recipes = [
  {
    id: 1,
    name: "Chole Bhature",
    ingredients: [
      "2 cups chickpeas (soaked overnight)",
      "2 onions (chopped)",
      "2 tomatoes (pureed)",
      "1 tbsp ginger-garlic paste",
      "Spices: cumin, turmeric, coriander powder, garam masala",
      "Oil",
      "For Bhature: flour, yogurt, salt, baking soda, oil"
    ],
    process: [
      "1. Soak chickpeas overnight and pressure cook with salt until soft.",
      "2. Heat oil in a pan, add cumin seeds and let them splutter.",
      "3. Add onions and sauté until golden brown.",
      "4. Stir in ginger-garlic paste and cook until raw smell disappears.",
      "5. Add tomato puree, turmeric, coriander powder, and garam masala. Cook until oil separates.",
      "6. Add boiled chickpeas and simmer for 15–20 minutes.",
      "7. For bhature, knead dough with flour, yogurt, baking soda, salt, and oil. Rest for 1 hour.",
      "8. Roll out dough balls into discs and deep fry until puffed and golden.",
      "9. Serve hot chole with bhature, onions, and pickle."
    ]
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    ingredients: [
      "250g paneer (cubed)",
      "2 onions (chopped)",
      "3 tomatoes (pureed)",
      "1 tbsp ginger-garlic paste",
      "2 tbsp butter",
      "1/4 cup cream",
      "Spices: chili powder, garam masala, kasuri methi"
    ],
    process: [
      "1. Heat butter in a pan, add onions and sauté until translucent.",
      "2. Add ginger-garlic paste and cook for 1 minute.",
      "3. Stir in tomato puree and cook until oil begins to separate.",
      "4. Add chili powder, garam masala, and kasuri methi.",
      "5. Pour in cream and mix well to form a rich gravy.",
      "6. Add paneer cubes, cover, and simmer for 5–7 minutes.",
      "7. Garnish with fresh cream and serve hot with naan or rice."
    ]
  },
  {
    id: 3,
    name: "Dal Tadka",
    ingredients: [
      "1 cup toor dal",
      "2 onions (sliced)",
      "2 tomatoes (chopped)",
      "1 tbsp ginger-garlic paste",
      "Spices: turmeric, cumin seeds, chili powder",
      "2 tbsp ghee",
      "Curry leaves, green chilies"
    ],
    process: [
      "1. Wash dal and pressure cook with turmeric and salt until soft.",
      "2. Mash the cooked dal lightly and keep aside.",
      "3. Heat ghee in a pan, add cumin seeds, curry leaves, and green chilies.",
      "4. Add onions and sauté until golden brown.",
      "5. Stir in ginger-garlic paste and cook for 1 minute.",
      "6. Add tomatoes, chili powder, and cook until tomatoes soften.",
      "7. Pour this tadka over the cooked dal and mix well.",
      "8. Garnish with coriander leaves and serve with rice."
    ]
  },
  {
    id: 4,
    name: "Masala Dosa",
    ingredients: [
      "Dosa batter",
      "3 potatoes (boiled & mashed)",
      "1 onion (sliced)",
      "2 green chilies (chopped)",
      "Spices: turmeric, mustard seeds, curry leaves",
      "Oil"
    ],
    process: [
      "1. Heat oil in a pan, add mustard seeds and curry leaves.",
      "2. Add onions, chilies, and turmeric, sauté until onions turn soft.",
      "3. Mix in boiled potatoes and salt, cook for 5 minutes.",
      "4. Heat a tawa, spread dosa batter thinly into a circle.",
      "5. Drizzle oil on edges and cook until crispy.",
      "6. Place potato masala in the center, fold dosa, and remove.",
      "7. Serve hot with chutney and sambar."
    ]
  },
  {
    id: 5,
    name: "Palak Paneer",
    ingredients: [
      "250g paneer (cubed)",
      "2 cups spinach leaves",
      "1 onion (chopped)",
      "1 tomato (chopped)",
      "1 tbsp ginger-garlic paste",
      "Spices: cumin, chili powder, garam masala"
    ],
    process: [
      "1. Wash spinach thoroughly and blanch in boiling water for 2 minutes.",
      "2. Blend spinach into a smooth puree and keep aside.",
      "3. Heat oil, add cumin seeds and onions, sauté until golden.",
      "4. Stir in ginger-garlic paste and cook for 1 minute.",
      "5. Add chopped tomatoes, chili powder, and garam masala, cook until soft.",
      "6. Stir in spinach puree and simmer for 5 minutes.",
      "7. Add paneer cubes and cook for another 5 minutes.",
      "8. Garnish with cream and serve with roti or naan."
    ]
  },
  {
    id: 6,
    name: "Aloo Paratha",
    ingredients: [
      "2 cups wheat flour",
      "4 potatoes (boiled)",
      "2 green chilies (chopped)",
      "Coriander leaves",
      "Spices: ajwain, chili powder, garam masala",
      "Ghee or oil"
    ],
    process: [
      "1. Knead wheat flour with water to make a soft dough. Rest for 20 minutes.",
      "2. Peel and mash boiled potatoes.",
      "3. Add chilies, coriander, ajwain, chili powder, garam masala, and mix well.",
      "4. Divide dough into balls, stuff with potato mixture, and seal properly.",
      "5. Roll gently into flat parathas.",
      "6. Cook on hot tawa with ghee until golden brown on both sides.",
      "7. Serve with curd and pickle."
    ]
  },
  {
    id: 7,
    name: "Rajma Chawal",
    ingredients: [
      "1 cup rajma (soaked overnight)",
      "2 onions (chopped)",
      "2 tomatoes (pureed)",
      "1 tbsp ginger-garlic paste",
      "Spices: cumin, turmeric, chili powder, garam masala",
      "Cooked rice"
    ],
    process: [
      "1. Pressure cook soaked rajma with salt until soft.",
      "2. Heat oil, add cumin seeds and onions, sauté until golden.",
      "3. Add ginger-garlic paste and cook for 1 minute.",
      "4. Stir in tomato puree, turmeric, chili powder, garam masala, and cook until oil separates.",
      "5. Add rajma with stock, simmer for 20 minutes until thick.",
      "6. Serve hot with steamed rice."
    ]
  },
  {
    id: 8,
    name: "Samosa",
    ingredients: [
      "2 cups flour",
      "3 boiled potatoes",
      "1/2 cup green peas",
      "2 green chilies",
      "Spices: cumin, coriander powder, garam masala",
      "Oil"
    ],
    process: [
      "1. Make dough with flour, water, salt, and oil. Rest for 30 minutes.",
      "2. Heat oil, add cumin, chilies, and green peas. Cook for 2 minutes.",
      "3. Add mashed potatoes, coriander powder, garam masala, and mix well.",
      "4. Roll dough into circles, cut in halves, and form cones.",
      "5. Stuff with filling and seal edges.",
      "6. Deep fry until golden brown and crispy.",
      "7. Serve with chutney."
    ]
  },
  {
    id: 9,
    name: "Biryani",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken or mixed vegetables",
      "2 onions (sliced)",
      "2 tomatoes (chopped)",
      "Spices: biryani masala, saffron, bay leaf, cardamom, cloves",
      "1/2 cup yogurt"
    ],
    process: [
      "1. Wash and soak rice for 30 minutes, cook till 70% done.",
      "2. Heat oil, fry onions until golden brown, remove half for garnishing.",
      "3. Add tomatoes, yogurt, and spices. Cook until masala thickens.",
      "4. Add chicken/vegetables and cook until tender.",
      "5. In a heavy pot, layer rice and masala alternately.",
      "6. Sprinkle saffron milk and fried onions on top.",
      "7. Cover tightly and cook on low flame (dum) for 20 minutes.",
      "8. Serve hot with raita."
    ]
  },
  {
    id: 10,
    name: "Butter Naan",
    ingredients: [
      "2 cups flour",
      "1/2 cup yogurt",
      "1/2 tsp baking powder",
      "Salt",
      "Butter"
    ],
    process: [
      "1. Mix flour, yogurt, baking powder, and salt to form dough.",
      "2. Knead well and rest for 2 hours.",
      "3. Divide dough into balls and roll into oval shapes.",
      "4. Cook on hot tawa until bubbles appear.",
      "5. Flip and cook until golden brown spots appear.",
      "6. Brush with butter and serve hot."
    ]
  },
  {
    id: 11,
    name: "Pav Bhaji",
    ingredients: [
      "4 pav buns",
      "3 potatoes (boiled)",
      "1 cup mixed vegetables (carrot, peas, beans)",
      "2 onions (chopped)",
      "2 tomatoes (chopped)",
      "Spices: pav bhaji masala",
      "Butter"
    ],
    process: [
      "1. Boil and mash potatoes with other vegetables.",
      "2. Heat butter in a pan, sauté onions until soft.",
      "3. Add tomatoes, pav bhaji masala, and cook until pulpy.",
      "4. Mix in mashed vegetables and simmer with water to desired consistency.",
      "5. Toast pav buns with butter on a tawa.",
      "6. Serve bhaji with buttered pav, onions, and lemon wedges."
    ]
  },
  {
    id: 12,
    name: "Idli",
    ingredients: [
      "Idli batter",
      "Oil (for greasing)"
    ],
    process: [
      "1. Grease idli molds with oil.",
      "2. Pour idli batter into molds.",
      "3. Steam in an idli steamer for 10–12 minutes.",
      "4. Remove and let cool slightly.",
      "5. Serve hot with coconut chutney and sambar."
    ]
  },
  {
    id: 13,
    name: "Dhokla",
    ingredients: [
      "1 cup gram flour",
      "1 tbsp lemon juice",
      "1 tsp eno fruit salt",
      "Spices: mustard seeds, curry leaves, green chilies",
      "Oil"
    ],
    process: [
      "1. Mix gram flour with water, salt, and lemon juice to make a smooth batter.",
      "2. Add eno fruit salt and mix gently.",
      "3. Pour batter into a greased steaming tray.",
      "4. Steam for 15 minutes until spongy.",
      "5. Heat oil, add mustard seeds, curry leaves, and green chilies.",
      "6. Pour tempering over dhokla and cut into pieces.",
      "7. Serve with green chutney."
    ]
  },
  {
    id: 14,
    name: "Malai Kofta",
    ingredients: [
      "Paneer & potatoes (for kofta)",
      "Onions",
      "Tomatoes",
      "Cashews",
      "Cream",
      "Spices: garam masala, turmeric, chili powder"
    ],
    process: [
      "1. Mash paneer and potatoes together, season, and shape into balls.",
      "2. Deep fry until golden brown and keep aside.",
      "3. Heat oil, sauté onions until golden.",
      "4. Add tomatoes, cashews, and cook until soft. Blend into paste.",
      "5. Cook paste with spices and cream until thick.",
      "6. Add fried koftas just before serving.",
      "7. Garnish with cream and coriander."
    ]
  },
  {
    id: 15,
    name: "Kadhi Pakora",
    ingredients: [
      "2 cups yogurt",
      "1/2 cup gram flour",
      "Onions",
      "Spices: turmeric, chili powder, cumin, curry leaves",
      "For pakora: gram flour, onions, chili, salt"
    ],
    process: [
      "1. Mix yogurt, gram flour, turmeric, salt, and water to make kadhi base.",
      "2. Heat oil, sauté cumin, curry leaves, and chili powder.",
      "3. Add yogurt mixture and cook on low flame for 30 minutes.",
      "4. Make pakora batter with gram flour and onions.",
      "5. Deep fry pakoras until golden brown.",
      "6. Add pakoras into kadhi and simmer for 5 minutes.",
      "7. Serve with steamed rice."
    ]
  },
  {
    id: 16,
    name: "Bhindi Masala",
    ingredients: [
      "250g bhindi (okra)",
      "1 onion (sliced)",
      "1 tomato (chopped)",
      "Spices: turmeric, coriander powder, chili powder"
    ],
    process: [
      "1. Wash and dry bhindi completely. Cut into pieces.",
      "2. Heat oil, sauté bhindi until sticky texture is gone.",
      "3. Remove and keep aside.",
      "4. In same pan, add onions, tomatoes, and spices.",
      "5. Cook until masala thickens.",
      "6. Add fried bhindi and cook for 5 more minutes.",
      "7. Serve with chapati."
    ]
  },
  {
    id: 17,
    name: "Baingan Bharta",
    ingredients: [
      "2 large brinjals",
      "1 onion (chopped)",
      "2 tomatoes (chopped)",
      "2 green chilies",
      "Spices: chili powder, garam masala"
    ],
    process: [
      "1. Roast brinjals on open flame until skin is charred.",
      "2. Peel skin and mash pulp.",
      "3. Heat oil, sauté onions, chilies until golden.",
      "4. Add tomatoes, chili powder, and cook until soft.",
      "5. Mix in mashed brinjal and cook for 10 minutes.",
      "6. Add garam masala, stir, and serve with roti."
    ]
  },
  {
    id: 18,
    name: "Chicken Curry",
    ingredients: [
      "500g chicken",
      "2 onions",
      "2 tomatoes",
      "1/2 cup yogurt",
      "Spices: turmeric, chili powder, garam masala, coriander powder"
    ],
    process: [
      "1. Marinate chicken with yogurt, turmeric, and chili powder for 30 minutes.",
      "2. Heat oil, sauté onions until golden.",
      "3. Add tomatoes and cook until soft.",
      "4. Stir in coriander powder and garam masala.",
      "5. Add marinated chicken and mix well.",
      "6. Cover and simmer until chicken is cooked through.",
      "7. Garnish with coriander leaves and serve."
    ]
  },
  {
    id: 19,
    name: "Fish Curry",
    ingredients: [
      "500g fish pieces",
      "1 onion (chopped)",
      "2 tomatoes (chopped)",
      "1 cup coconut milk",
      "Spices: turmeric, chili powder, curry leaves"
    ],
    process: [
      "1. Marinate fish with turmeric and chili powder, keep aside.",
      "2. Heat oil, add curry leaves and onions, sauté until soft.",
      "3. Add tomatoes and cook until mushy.",
      "4. Stir in coconut milk and simmer.",
      "5. Add fish pieces and cook gently for 10 minutes.",
      "6. Serve hot with rice."
    ]
  },
  {
    id: 20,
    name: "Pani Puri",
    ingredients: [
      "Puris",
      "Boiled potatoes",
      "Boiled chickpeas",
      "Tamarind chutney",
      "Spiced mint water"
    ],
    process: [
      "1. Prepare potato and chickpea stuffing with salt and spices.",
      "2. Make spiced mint water with mint, tamarind, chili, and spices.",
      "3. Crack the top of each puri carefully.",
      "4. Stuff with potato-chickpea filling.",
      "5. Add tamarind chutney.",
      "6. Dip into spiced mint water and serve immediately."
    ]
  },
  {
    id: 21,
    name: "Gulab Jamun",
    ingredients: [
      "1 cup khoya",
      "2 tbsp maida",
      "Sugar",
      "Cardamom",
      "Oil (for frying)"
    ],
    process: [
      "1. Mix khoya and maida to form a soft dough.",
      "2. Shape into small smooth balls.",
      "3. Heat oil on low flame and deep fry until golden brown.",
      "4. Make sugar syrup with sugar, water, and cardamom.",
      "5. Soak fried balls in warm syrup for at least 2 hours.",
      "6. Serve warm or chilled."
    ]
  }
];



const myRecipeSlice =  createSlice({
    name : "recipeSlice",
    initialState : recipes,
    reducers : {

    }
})

export default myRecipeSlice.reducer