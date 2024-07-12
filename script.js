const recipes = [
    {
        title: "Pav Bhaji",
        ingredients: ["Pav Bread", "Potatoes", "Tomatoes", "Onions", "Capsicum", "Peas", "Butter", "Pav Bhaji Masala"],
        instructions: "Boil and mash vegetables. Saute onions and capsicum in butter. Add tomatoes and pav bhaji masala. Mix in mashed vegetables. Serve hot with buttered pav.",
        image: './photos/pav-bhaji.jpg'
    },
    {
        title: "Masala Dosa",
        ingredients: ["Dosa Batter", "Potatoes", "Onions", "Green Chilies", "Mustard Seeds", "Turmeric", "Curry Leaves"],
        instructions: "Prepare dosa batter. Cook dosa on a hot griddle. Fill with spiced mashed potato mixture. Fold and serve with chutney and sambar.",
        image: './photos/masala-dosa.jpg'
    },
    {
        title: "Palak Paneer",
        ingredients: ["Spinach", "Paneer", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices", "Cream"],
        instructions: "Blanch and puree spinach. Saute onions, ginger, and garlic. Add tomatoes and spices. Mix in spinach puree and paneer cubes. Cook until paneer is soft. Add cream and serve hot.",
        image: './photos/palak-paneer.jpg'
    },
    {
        title: "Chole",
        ingredients: ["Chickpeas", "Onions", "Tomatoes", "Ginger", "Garlic", "Chole Masala", "Spices"],
        instructions: "Soak and cook chickpeas. Saute onions, ginger, and garlic. Add tomatoes and chole masala. Mix in cooked chickpeas. Simmer until thick. Serve with rice or bhature.",
        image: './photos/chole.jpg'
    },
    {
        title: "Aloo Gobi",
        ingredients: ["Potatoes", "Cauliflower", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
        instructions: "Saute onions, ginger, and garlic. Add tomatoes and spices. Mix in potatoes and cauliflower. Cook until vegetables are tender. Serve hot.",
        image: './photos/Aloo-Gobi.jpg'
    },
    {
        title: "Paneer Tikka",
        ingredients: ["Paneer", "Yogurt", "Spices", "Bell Peppers", "Onions", "Skewers"],
        instructions: "Marinate paneer and vegetables in spiced yogurt. Skewer and grill until charred. Serve with mint chutney.",
        image: './photos/Paneer-Tikka.jpg'
    },
    {
        title: "Baingan Bharta",
        ingredients: ["Eggplant", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
        instructions: "Roast and peel eggplant. Saute onions, ginger, and garlic. Add tomatoes and spices. Mix in mashed eggplant. Cook until well blended. Serve hot.",
        image: './photos/baingan-bhartha.jpg'
    },
    {
        title: "Rajma",
        ingredients: ["Kidney Beans", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
        instructions: "Soak and cook kidney beans. Saute onions, ginger, and garlic. Add tomatoes and spices. Mix in cooked beans. Simmer until thick. Serve with rice.",
        image: './photos/Rajma.jpg'
    },
    {
        title: "Bhindi Masala",
        ingredients: ["Okra", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
        instructions: "Saute okra until tender. Set aside. Sauté onions, ginger, and garlic. Add tomatoes and spices. Mix in cooked okra. Cook until well blended. Serve hot.",
        image: './photos/Bhindi-masala.jpg'
    },
    {
        title: "Dum Aloo",
        ingredients: ["Baby Potatoes", "Yogurt", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
        instructions: "Fry baby potatoes. Saute onions, ginger, and garlic. Add tomatoes and spices. Mix in fried potatoes and yogurt. Cook until thick. Serve hot.",
        image: './photos/dum-aloo.jpg'
    },
    {
        title: "Vegetable Biryani",
        ingredients: ["Basmati Rice", "Mixed Vegetables", "Yogurt", "Spices", "Fried Onions", "Mint", "Cilantro"],
        instructions: "Layer cooked rice with spiced vegetables and fried onions. Cook on low heat until flavors meld. Garnish with mint and cilantro. Serve hot.",
        image: './photos/vegetable-biryani.jpg'
    },
    {
        title: "Malai Kofta",
        ingredients: ["Paneer", "Potatoes", "Cream", "Tomatoes", "Onions", "Spices"],
        instructions: "Make koftas from paneer and potatoes. Fry until golden. Sauté onions and tomatoes with spices. Add cream and blend. Simmer koftas in sauce. Serve hot.",
        image: './photos/malai-kofta.jpg'
    },
    {
        title: "Pani Puri",
        ingredients: ["Puri", "Potatoes", "Chickpeas", "Spiced Water", "Tamarind Chutney"],
        instructions: "Fill puris with spiced potato and chickpea mixture. Serve with spiced water and tamarind chutney.",
        image: './photos/PaniPuri.jpg'
    },
    {
        title: "Rasam",
        ingredients: ["Tomatoes", "Tamarind", "Spices", "Garlic", "Curry Leaves", "Mustard Seeds"],
        instructions: "Boil tomatoes and tamarind with spices. Temper with garlic, curry leaves, and mustard seeds. Serve hot.",
        image: './photos/rasam.jpg'
    },
    {
        title: "Kadai Paneer",
        ingredients: ["Paneer", "Bell Peppers", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
        instructions: "Saute onions, ginger, and garlic. Add bell peppers and tomatoes. Mix in paneer and spices. Cook until well blended. Serve hot.",
        image: './photos/kadai-paneer.jpg'
    }
];


function displayRecipes(recipesToShow) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    if (recipesToShow.length === 0) {
        recipeList.innerHTML = '<p>No recipes found. Please search by an ingredient.</p>';
        return;
    }

    recipesToShow.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.ingredients.join(', ')}</p>
        `;

        recipeCard.addEventListener('click', () => {
            showRecipeModal(recipe);
        });

        recipeList.appendChild(recipeCard);
    });
}


function showRecipeModal(recipe) {
    document.getElementById('modalTitle').innerHTML = `${recipe.title}`;
    document.getElementById('modalInstructions').innerHTML = `<b>Instructions:</b> ${recipe.instructions}`;
    document.getElementById('recipeModal').style.display = 'block';
}


document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );

    displayRecipes(filteredRecipes);
});


document.querySelector('.close').addEventListener('click', () =>{
 document.getElementById('recipeModal').style.display = 'none';
});

displayRecipes();
