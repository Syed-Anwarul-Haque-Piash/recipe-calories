import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipies = ({handleCook}) => {
    const [recipies,setRecipies]=useState([])
    useEffect(()=>{
        fetch('recipe.json')
        .then(res=>res.json())
        .then(data=>setRecipies(data))
    },[])
    return (
        <div className='w-2/3'>
            <div className='md:grid grid-cols-2 gap-4 mt-2'>
                {
                    recipies.map(recipe=><Recipe recipe={recipe} handleCook={handleCook} key={recipe.id}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipies;