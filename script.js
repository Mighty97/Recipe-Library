  const recipes = [
            {
                id: 1,
                title: "Classic Spaghetti Carbonara",
                image: "images/1.jpg",
                summary: "A traditional Italian pasta dish with eggs, cheese, and pancetta",
                prepTime: "20 min",
                servings: "4",
                ingredients: [
                    "400g spaghetti pasta",
                    "200g pancetta or guanciale, diced",
                    "4 large eggs",
                    "100g Pecorino Romano cheese, grated",
                    "2 cloves garlic, minced",
                    "Black pepper to taste",
                    "Salt for pasta water"
                ],
                instructions: [
                    "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
                    "While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy.",
                    "In a bowl, whisk together eggs, grated cheese, and black pepper.",
                    "Drain pasta, reserving 1 cup of pasta water.",
                    "Add hot pasta to the skillet with pancetta and toss quickly.",
                    "Remove from heat and quickly stir in egg mixture, adding pasta water as needed.",
                    "Serve immediately with extra cheese and black pepper."
                ]
            },
            {
                id: 2,
                title: "Thai Green Curry",
                image: "images/2.jpg",
                summary: "Aromatic and spicy Thai curry with coconut milk and fresh herbs",
                prepTime: "30 min",
                servings: "4",
                ingredients: [
                    "2 tbsp green curry paste",
                    "400ml coconut milk",
                    "500g chicken breast, sliced",
                    "1 Thai eggplant, chopped",
                    "1 red bell pepper, sliced",
                    "2 tbsp fish sauce",
                    "1 tbsp palm sugar",
                    "Thai basil leaves",
                    "2 kaffir lime leaves"
                ],
                instructions: [
                    "Heat 2 tbsp of thick coconut cream in a wok over medium heat.",
                    "Add green curry paste and fry until fragrant, about 2 minutes.",
                    "Add chicken and cook until no longer pink.",
                    "Pour in remaining coconut milk and bring to a simmer.",
                    "Add vegetables and seasonings, cook for 10-15 minutes.",
                    "Stir in Thai basil and lime leaves just before serving.",
                    "Serve hot with jasmine rice."
                ]
            },
            {
                id: 3,
                title: "Chocolate Lava Cake",
                image: "images/3.jpg",
                summary: "Decadent individual chocolate cakes with molten centers",
                prepTime: "25 min",
                servings: "4",
                ingredients: [
                    "100g dark chocolate, chopped",
                    "100g unsalted butter",
                    "2 large eggs",
                    "2 large egg yolks",
                    "50g caster sugar",
                    "2 tbsp plain flour",
                    "Butter for ramekins",
                    "Cocoa powder for dusting"
                ],
                instructions: [
                    "Preheat oven to 200°C. Butter 4 ramekins and dust with cocoa powder.",
                    "Melt chocolate and butter in a double boiler until smooth.",
                    "In a bowl, whisk whole eggs, egg yolks, and sugar until thick.",
                    "Stir in melted chocolate mixture, then fold in flour.",
                    "Divide mixture between prepared ramekins.",
                    "Bake for 12-14 minutes until edges are firm but centers still jiggle.",
                    "Let cool for 2 minutes, then run knife around edges and invert onto plates."
                ]
            },
            {
                id: 4,
                title: "Mediterranean Quinoa Bowl",
                image: "images/4.jpg",
                summary: "Healthy and colorful bowl with quinoa, vegetables, and feta",
                prepTime: "25 min",
                servings: "2",
                ingredients: [
                    "1 cup quinoa, cooked",
                    "1 cucumber, diced",
                    "2 tomatoes, chopped",
                    "1/2 red onion, thinly sliced",
                    "100g feta cheese, crumbled",
                    "1/4 cup kalamata olives",
                    "3 tbsp olive oil",
                    "2 tbsp lemon juice",
                    "Fresh herbs (parsley, mint)"
                ],
                instructions: [
                    "Cook quinoa according to package directions and let cool.",
                    "Prepare all vegetables and place in a large bowl.",
                    "Add cooled quinoa to the bowl with vegetables.",
                    "Whisk together olive oil, lemon juice, salt, and pepper for dressing.",
                    "Pour dressing over quinoa mixture and toss well.",
                    "Top with crumbled feta, olives, and fresh herbs.",
                    "Serve chilled or at room temperature."
                ]
            },
            {
                id: 5,
                title: "Classic Beef Tacos",
                image: "images/5.jpg",
                summary: "Authentic Mexican-style tacos with seasoned ground beef",
                prepTime: "20 min",
                servings: "4",
                ingredients: [
                    "500g ground beef",
                    "8 corn tortillas",
                    "1 onion, diced",
                    "2 cloves garlic, minced",
                    "2 tsp cumin",
                    "1 tsp chili powder",
                    "1 tsp paprika",
                    "Lettuce, shredded",
                    "Cheddar cheese, grated",
                    "Sour cream and salsa for serving"
                ],
                instructions: [
                    "Heat a large skillet over medium-high heat.",
                    "Cook ground beef, breaking it up with a spoon, until browned.",
                    "Add onion and garlic, cook until softened.",
                    "Stir in spices and cook for 1 minute until fragrant.",
                    "Warm tortillas in a dry skillet or microwave.",
                    "Fill tortillas with beef mixture and desired toppings.",
                    "Serve immediately with lime wedges."
                ]
            },
            {
                id: 6,
                title: "Mushroom Risotto",
                image: "images/1.jpg",
                summary: "Creamy Italian rice dish with wild mushrooms and parmesan",
                prepTime: "35 min",
                servings: "4",
                ingredients: [
                    "300g Arborio rice",
                    "1L chicken or vegetable stock",
                    "300g mixed wild mushrooms",
                    "1 onion, finely chopped",
                    "3 cloves garlic, minced",
                    "150ml white wine",
                    "100g Parmesan cheese, grated",
                    "3 tbsp butter",
                    "Fresh thyme and parsley"
                ],
                instructions: [
                    "Heat stock in a saucepan and keep warm over low heat.",
                    "Sauté mushrooms in butter until golden, season and set aside.",
                    "In the same pan, cook onion until softened, add garlic.",
                    "Add rice and stir for 2 minutes until edges become translucent.",
                    "Pour in wine and stir until absorbed.",
                    "Add warm stock one ladle at a time, stirring constantly.",
                    "After 18-20 minutes, stir in mushrooms, cheese, and herbs."
                ]
            }
        ];

        let filteredRecipes = [...recipes];

        function renderRecipes(recipesToRender = filteredRecipes) {
            const grid = document.getElementById('recipesGrid');
            
            if (recipesToRender.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; color: white; padding: 60px 20px;">
                        <h3 style="font-size: 2rem; margin-bottom: 20px;">No recipes found</h3>
                        <p style="font-size: 1.1rem; opacity: 0.8;">Try searching with different keywords</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = recipesToRender.map(recipe => `
                <div class="recipe-card" onclick="toggleRecipeDetails(${recipe.id})">
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.title}</h3>
                        <p class="recipe-summary">${recipe.summary}</p>
                        <div class="recipe-meta">
                            <span class="prep-time">⏱️ ${recipe.prepTime}</span>
                            <span class="servings">🍽️ ${recipe.servings} servings</span>
                        </div>
                        <p class="click-hint">Click to see ingredients & instructions</p>
                        <div class="recipe-details" id="details-${recipe.id}">
                            <div class="ingredients">
                                <h3>🥘 Ingredients</h3>
                                <ul>
                                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="instructions">
                                <h3>👨‍🍳 Instructions</h3>
                                <ol>
                                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            // Add staggered animation delay
            const cards = grid.querySelectorAll('.recipe-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        }

        function toggleRecipeDetails(recipeId) {
            const details = document.getElementById(`details-${recipeId}`);
            details.classList.toggle('expanded');
        }

        function searchRecipes() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            
            if (searchTerm === '') {
                filteredRecipes = [...recipes];
            } else {
                filteredRecipes = recipes.filter(recipe => 
                    recipe.title.toLowerCase().includes(searchTerm) ||
                    recipe.summary.toLowerCase().includes(searchTerm) ||
                    recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
                );
            }
            
            renderRecipes(filteredRecipes);
        }

        // Search on Enter key press
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchRecipes();
            }
        });

        // Real-time search
        document.getElementById('searchInput').addEventListener('input', function() {
            setTimeout(searchRecipes, 300); // Debounce search
        });

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            renderRecipes();
        });