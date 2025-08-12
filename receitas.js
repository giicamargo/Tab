const recipes = [
    {
        id: 1,
        title: "Omelete",
        image: "https://www.kitano.com.br/wp-content/uploads/2019/08/SSP_2014-Ometele-de-frios-com-cebolinha-e-salsa-1.jpg",
        time: "20 min",
        difficulty: "Fácil",
        servings: "1 porções",
        category: "Saudáveis",
        ingredients: [
            "2 ovos",
            "1 fatia de presunto",
            "tempero verde a gosto",
            "1 pitada de sal",
            "2 fatias de queijo",
            "caldo de galinha a gosto"
        ],
        instructions: [
            "Amasse a banana em uma tigela até ficar bem pastosa.",
            "Adicione o ovo e misture bem.",
            "Incorpore a farinha de aveia, canela e fermento em pó.",
            "Aqueça uma frigideira antiaderente em fogo médio.",
            "Despeje pequenas porções da massa na frigideira.",
            "Cozinhe por 2-3 minutos de cada lado até dourar.",
            "Sirva com mel por cima, se desejar."
        ]
    },
    {
         id: 2,
        title: "Café gelado",
        image: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/6ce10070ca590097bf7241c8cd5951d9.jpg?itok=u4POTa93",
        time: "10 min",
        difficulty: "Fácil",
        servings: "1 porção",
        category: "Bebidas",
        ingredients: [
            "2 colheres de sopa de café solúvel",
            "1/2 colher de sopa de açúcar",
            "200 ml de leite gelado",
            "2 colheres de sopa de água bem gelada",
            "Gelo a gosto",
            "Essência de baunilha a gosto (opcional)"
        ],
        instructions: [
            "Reúna todos os ingredientes para preparar um delicioso café gelado cremoso superfácil.",
            "Em um recipiente, adicione o café, o açúcar, a água gelada e, com um batedor de arame (fouet), bata rapidamente por cerca 5 minutos, ou até formar um creme brilhoso e espesso - você também pode utilizar uma batedeira ou mixer para facilitar;",
            "Em um copo ou xícara, coloque algumas pedras de gelo, o leite e a essência de baunilha. Misture para gelar bem;",
            "Em seguida, acrescente cerca de 2 a 3 colheres de sopa de café cremoso e mexa levemente para incorporar os ingredientes;",
            "Se quiser, adicione mais pedras de gelo e sirva. A receita rende até três copos, então, aproveite junto de quem você ama estar perto. Caso não utilize tudo, você pode reservar em um pote com tampa na geladeira."
        ]
    },
    {
        id: 3,
        title: "Bolo de chocolate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoFYy5QiD_uYiCIjnNklTDFcXwD7ogq9CwA&s",
        time: "30 min",
        difficulty: "Médio",
        servings: "10 porção",
        category: "doces",
        ingredients: [
            "2 ovos",
            "1 punhado de espinafre fresco",
            "1 colher de sopa de queijo ralado",
            "Sal e pimenta a gosto",
            "1 colher de chá de azeite"
        ],
        instructions: [
            "Lave e pique o espinafre.",
            "Bata os ovos em uma tigela e tempere com sal e pimenta.",
            "Aqueça o azeite em uma frigideira em fogo médio.",
            "Adicione o espinafre e refogue por 1 minuto.",
            "Despeje os ovos batidos sobre o espinafre.",
            "Polvilhe o queijo ralado por cima.",
            "Cozinhe até os ovos firmarem, cerca de 3-4 minutos.",
            "Dobre a omelete ao meio e sirva quente."
        ]
    },
    {
        id: 4,
        title: "Sanduíche Natural",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdVM9EBAzWhcCHK6NUL_uQwXTvBdWMRulXgXFtgaBFEFZTYQuFSJfb7lu&s=10",
        time: "5 min",
        difficulty: "Muito Fácil",
        servings: "1 porção",
        category: "rapidas",
        ingredients: [
            "1 polpa de açaí congelado",
            "1 banana",
            "2 colheres de sopa de granola",
            "1 colher de sopa de mel",
            "1 colher de sopa de leite em pó (opcional)"
        ],
        instructions: [
            "Bata o açaí congelado no liquidificador até obter uma consistência cremosa.",
            "Despeje em uma tigela.",
            "Corte a banana em rodelas e coloque sobre o açaí.",
            "Polvilhe a granola por cima.",
            "Regue com mel e, se desejar, adicione leite em pó.",
            "Sirva imediatamente."
        ]
    },
    {
        id: 5,
        title: "Tofu Mexido",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        time: "10 min",
        difficulty: "Médio",
        servings: "2 porções",
        category: "veganas",
        ingredients: [
            "200g de tofu firme",
            "1 colher de sopa de azeite",
            "1/2 cebola picada",
            "1/2 pimentão vermelho picado",
            "1 colher de chá de cúrcuma",
            "Sal e pimenta a gosto",
            "Salsinha picada para decorar"
        ],
        instructions: [
            "Escorra o tofu e esmague com um garfo.",
            "Aqueça o azeite em uma frigideira em fogo médio.",
            "Refogue a cebola e o pimentão por 2 minutos.",
            "Adicione o tofu esmagado e a cúrcuma, mexendo bem.",
            "Tempere com sal e pimenta.",
            "Cozinhe por mais 5 minutos, mexendo ocasionalmente.",
            "Finalize com salsinha picada e sirva quente."
        ]
    },
    {
        id: 6,
        title: "Smoothie de Frutas",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        time: "5 min",
        difficulty: "Muito Fácil",
        servings: "2 porções",
        category: "saudaveis",
        ingredients: [
            "1 banana congelada",
            "1/2 xícara de morangos",
            "1/2 xícara de iogurte natural",
            "1/2 xícara de leite (ou leite vegetal)",
            "1 colher de sopa de mel",
            "1 colher de sopa de linhaça (opcional)"
        ],
        instructions: [
            "Coloque todos os ingredientes no liquidificador.",
            "Bata até obter uma mistura homogênea e cremosa.",
            "Se necessário, adicione mais leite para ajustar a consistência.",
            "Sirva imediatamente em copos altos.",
            "Polvilhe com linhaça se desejar."
        ]
    },
    {
        id: 7,
        title: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
        time: "10 min",
        difficulty: "Fácil",
        servings: "1 porção",
        category: "rapidas",
        ingredients: [
            "1 fatia de pão integral",
            "1/2 abacate maduro",
            "Suco de 1/2 limão",
            "Sal e pimenta a gosto",
            "Pimenta vermelha em flocos (opcional)",
            "1 ovo poché (opcional)"
        ],
        instructions: [
            "Toaste o pão até ficar crocante.",
            "Amasse o abacate com um garfo e misture com o suco de limão.",
            "Tempere com sal e pimenta a gosto.",
            "Espalhe a mistura de abacate sobre o pão torrado.",
            "Se desejar, adicione um ovo poché por cima.",
            "Polvilhe com pimenta vermelha em flocos para servir."
        ]
     },
      {
        id: 8,
        title: "Chocolate Quente",
        image: "https://www.sabornamesa.com.br/media/k2/items/cache/e9fe550ba3c0c201d69e3bc0a455b623_XL.jpg",
        time: "10 min",
        difficulty: "Fácil",
        servings: "1 porção",
        category: "Bebidas",
        ingredients: [
            "2 xícaras de chá de leite",
            "2 colheres de sopa de amido de milho",
            "3 colheres de sopa de chocolate em pó",
            "4 colheres de sopa de açúcar",
            "1 pau de canela",
            "1 caixa de creme de leite (200 gramas)"
        ],
        instructions: [
            "Toaste o pão até ficar crocante.",
            "Amasse o abacate com um garfo e misture com o suco de limão.",
            "Tempere com sal e pimenta a gosto.",
            "Espalhe a mistura de abacate sobre o pão torrado.",
            "Se desejar, adicione um ovo poché por cima.",
            "Polvilhe com pimenta vermelha em flocos para servir."
        ]
     },
     {
        id: 9,
        title: "Vitamina",
        image: "https://static.itdg.com.br/images/auto-auto/8483b317c23c9aed6ae9dd7d91790f87/vitamina-de-banana-e-morango.jpg",
        time: "20 min",
        difficulty: "Fácil",
        servings: "1 porções",
        category: "Saudáveis",
        ingredients: [
            "2 ovos",
            "1 fatia de presunto",
            "tempero verde a gosto",
            "1 pitada de sal",
            "2 fatias de queijo",
            "caldo de galinha a gosto"
        ],
        instructions: [
            "Amasse a banana em uma tigela até ficar bem pastosa.",
            "Adicione o ovo e misture bem.",
            "Incorpore a farinha de aveia, canela e fermento em pó.",
            "Aqueça uma frigideira antiaderente em fogo médio.",
            "Despeje pequenas porções da massa na frigideira.",
            "Cozinhe por 2-3 minutos de cada lado até dourar.",
            "Sirva com mel por cima, se desejar."
        ]
    },
     {
        id: 10,
        title: "Pão de queijo",
        image: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/GQBT6W6M2FCTBAHRCFPYPBN5IA.jpeg",
        time: "20 min",
        difficulty: "Médio",
        servings: "1 porções",
        category: "doces",
        ingredients: [
            "2 ovos",
            "1 fatia de presunto",
            "tempero verde a gosto",
            "1 pitada de sal",
            "2 fatias de queijo",
            "caldo de galinha a gosto"
        ],
        instructions: [
            "Amasse a banana em uma tigela até ficar bem pastosa.",
            "Adicione o ovo e misture bem.",
            "Incorpore a farinha de aveia, canela e fermento em pó.",
            "Aqueça uma frigideira antiaderente em fogo médio.",
            "Despeje pequenas porções da massa na frigideira.",
            "Cozinhe por 2-3 minutos de cada lado até dourar.",
            "Sirva com mel por cima, se desejar."
        ]
    }
];