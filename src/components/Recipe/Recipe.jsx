import React from 'react';

const Recipe = ({recipe}) => {
    const {id,recipe_name,recipe_image,description,ingredients,preparing_time,calories}=recipe
    return (
        <div>
            <h1>{recipe_name}</h1>
        </div>
    );
};

export default Recipe;