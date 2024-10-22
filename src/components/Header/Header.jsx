import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex justify-between mt-5 '>
            <h1 className='text-3xl font-bold'>Recipe Calories</h1>
            <div className='flex'>
                <a  href="">Home</a>
                <a className='ml-4' href="">Recipies</a>
                <a className='ml-4' href="">About</a>
                <a className='ml-4' href="">Search</a>
            </div>
            <div className='bg-gray-200 flex w-64 h-12 rounded-lg justify-center '>
                <CiSearch className='mt-4'></CiSearch>
                <h1 className='mt-3'>Search</h1>
            </div>
            <FaRegUserCircle className='w-12 h-12'/>
        </div>
    );
};

export default Header;