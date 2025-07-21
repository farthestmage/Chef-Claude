import React from "react"
import IngredientsList from "../Ingrideints/IngredientsList"
import ClaudeRecipe from "../Clauderecp/ClaudeRecipe"
import "./Main.css"
import { getRecipeFromMistral } from "../ai/ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
       []
    )
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

           {ingredients.length > 0 ? (
    <IngredientsList
        ingredients={ingredients}
        getRecipe={getRecipe}
    />
) : (
    <section className="no-ingredients">
        <h2>No ingredients added yet</h2>
        <p>Start by adding some ingredients you have on hand.</p>
    </section>
)}


            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}