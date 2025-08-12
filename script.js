const recipesContainer = document.getElementById('recipes-container');
const categoryButtons = document.querySelectorAll('.category-btn');
const modal = document.getElementById('recipe-modal');
const closeModal = document.getElementById('close-modal');
const form = document.getElementById('feedbackForm');
const input = document.getElementById('feedbackInput');
const message = document.getElementById('feedbackMsg');
const printButton = document.getElementById('print-recipe');

// Inicializa a exibição das receitas
displayRecipes(recipes);

// Evento de clique para os botões de categoria
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active-category'));
        button.classList.add('active-category');
        
        const category = button.dataset.category;
        if (category === 'all') {
            displayRecipes(recipes);
        } else {
            const filteredRecipes = recipes.filter(recipe => recipe.category === category);
            displayRecipes(filteredRecipes);
        }
    });
});

// Função para exibir as receitas no container
function displayRecipes(recipesToDisplay) {
    recipesContainer.innerHTML = '';
    
    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-amber-800">${recipe.title}</h3>
                    <span class="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600 mb-3">
                    <i class="fas fa-clock mr-1"></i>
                    <span class="mr-3">${recipe.time}</span>
                    <i class="fas fa-utensils mr-1"></i>
                    <span>${recipe.servings}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm font-medium ${getDifficultyColor(recipe.difficulty)}">${recipe.difficulty}</span>
                    <button class="view-recipe-btn bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm transition" data-id="${recipe.id}">
                        Ver Receita <i class="fas fa-arrow-right ml-1"></i>
                    </button>
                </div>
            </div>
        `;
        recipesContainer.appendChild(recipeCard);
    });

    document.querySelectorAll('.view-recipe-btn').forEach(button => {
        button.addEventListener('click', () => {
            const recipeId = parseInt(button.dataset.id);
            const recipe = recipes.find(r => r.id === recipeId);
            openRecipeModal(recipe);
        });
    });
}

// Retorna a cor com base na dificuldade
function getDifficultyColor(difficulty) {
    switch(difficulty) {
        case 'Muito Fácil': return 'text-green-600';
        case 'Fácil': return 'text-amber-600';
        case 'Médio': return 'text-orange-600';
        case 'Difícil': return 'text-red-600';
        default: return 'text-gray-600';
    }
}

// Abre o modal com os detalhes da receita
function openRecipeModal(recipe) {
    document.getElementById('modal-title').textContent = recipe.title;
    document.getElementById('modal-image').src = recipe.image;
    document.getElementById('modal-image').alt = recipe.title;
    document.getElementById('modal-time').textContent = recipe.time;
    document.getElementById('modal-difficulty').textContent = recipe.difficulty;
    document.getElementById('modal-servings').textContent = recipe.servings;
    document.getElementById('modal-category').textContent = recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1);
    
    const ingredientsList = document.getElementById('modal-ingredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    const instructionsList = document.getElementById('modal-instructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    modal.classList.remove('invisible');
    modal.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
}

// Evento para fechar o modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('opacity-100');
    modal.classList.add('invisible');
    document.body.style.overflow = 'auto';
});

// Evento para fechar o modal ao clicar fora dele
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('opacity-100');
        modal.classList.add('invisible');
        document.body.style.overflow = 'auto';
    }
});

// Evento de envio do formulário de feedback
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value.trim() !== "") {
        message.classList.remove('hidden');
        input.value = "";
    }
});