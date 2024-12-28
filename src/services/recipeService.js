import axios from 'axios';

// const API_BASE_URL = 'http://127.0.0.1:8000/recipes';
const apiBaseUrl = process.env.REACT_APP_API_URL || 'https://chefbot-api-sb0f.onrender.com/recipes';


const recipeService = {
    async generateRecipe(data) {
        try {
            const response = await axios.post(`${apiBaseUrl}/generate`, data);
            return response.data.recipe;
        } catch (error) {
            console.error('Error generating recipe:', error);
            throw error;
        }
    }
};

export default recipeService;