import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/recipes';

const recipeService = {
    async generateRecipe(data) {
        try {
            const response = await axios.post(`${API_BASE_URL}/generate`, data);
            return response.data.recipe;
        } catch (error) {
            console.error('Error generating recipe:', error);
            throw error;
        }
    }
};

export default recipeService;