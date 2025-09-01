export default {
  app: {
    getRecipe: "/api/getRecipe",
    getRecipeInfoById: "/api/getRecipeInfoById",
    getMoreRecipes: "/api/getMoreRecipes",
  },
  spoonacular: {
    complexSearch: "/recipes/complexSearch",
    getRecipeInfoById: "/recipes/{?}/information",
    autoCompleteSearchDetails: '/recipes/autocomplete'
  },
};
