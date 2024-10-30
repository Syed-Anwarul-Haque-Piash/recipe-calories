import React from 'react';
import Ingredients from '../Ingredients/Ingredients';
import { CiStopwatch } from 'react-icons/ci';
import { AiOutlineFire } from 'react-icons/ai';

const Recipe = ({recipe}) => {
    const {id,recipe_name,recipe_image,description,ingredients,preparing_time,calories}=recipe
    return (
        <div className='w-96 h-[685] border p-4 m-4'>
            <img className='w-80 h-48 rounded-lg' src={recipe_image} alt="" />
            <h1 className='text-xl font-bold'>{recipe_name}</h1>
            <h1 className='text-gray-400'>{description}</h1>
            <hr className='my-4 w-80'/>
            {/* {
                ingredients.map(ing=><Ingredients ing={ing}></Ingredients>)
            } */}
            <h1 className='text-xl font-bold'>Ingredients</h1>
            {
                ingredients.map((ing,idx)=><li className='text-gray-400' key={idx}>{ing}</li>)
            }
            <div className='md:flex '>
                <div className='md:flex mr-5'>
                    <CiStopwatch className='w-6 h-6'></CiStopwatch>
                    <h1 className='text-gray-400 ml-2'>{preparing_time}</h1>
                </div>
                <div className='md:flex'>
                    <AiOutlineFire className='w-6 h-6'></AiOutlineFire>
                    <h1 className='text-gray-400 ml-2'>{calories}</h1>
                </div>
            </div>
            <button className='bg-green-400 w-40 h-12 rounded-lg mt-4'>Want to cook</button>
            
        </div>
    );
};

export default Recipe;