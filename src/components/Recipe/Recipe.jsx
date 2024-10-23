import React from 'react';

const Recipe = ({recipe}) => {
    const {id,recipe_name,recipe_image,description,ingredients,preparing_time,calories}=recipe
    return (
        <div>
            <img className='w-80 h-48 rounded-lg' src={recipe_image} alt="" />
            <h1 >{recipe_name}</h1>
        </div>
    );
};

export default Recipe;