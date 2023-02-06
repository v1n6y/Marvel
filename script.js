const recipe = [
    { step: 'In a large saucepan or Dutch oven, heat the olive oil over medium heat.' },
    { step: 'Add the chopped onion and minced garlic to the pan and cook until the onion is soft and translucent, about 5 minutes.' },
    { step: 'Stir in the minced ginger, cumin, turmeric, coriander, cardamom, cinnamon, salt, and pepper. Cook for 2 minutes, stirring frequently.' },
    { step: 'Add the diced sweet potato, eggplant, red bell pepper, and yellow bell pepper to the pan. Stir to combine.' },
    { step: 'Add the diced tomatoes, chickpeas, and coconut milk. Stir to combine.' },
    { step: 'Add the diced tomatoes, chickpeas, and coconut milk. Stir to combine.' },
    { step: 'Stir in the honey.' },
    { step: 'Taste and adjust the seasoning as needed.' },
    { step: 'Serve over rice or with naan bread.' },
    { step: 'Garnish with chopped cilantro, if desired.' }
];

function displayRecipeStep(step, callback) {
    const recipeList = document.getElementById('recipe-list');
    const stepItem = document.createElement('li');
    stepItem.textContent = step.step;
    recipeList.appendChild(stepItem);
    setTimeout(callback, 1000);
}

function displayRecipe(recipe) {
    let i = 0;
    function next() {
        if (i < recipe.length) {
            displayRecipeStep(recipe[i], next);
            i++;
        }
    }
    next();
}

window.onload = function () {
    displayRecipe(recipe);
};