import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className="lg:px-20">
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Job Category List</h1>
                <p className='text-gray-500 text-sm mt-1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    category.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;