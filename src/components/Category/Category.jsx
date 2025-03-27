
const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="p-4 bg-sky-100 rounded-md mt-5 space-y-2">
            <img className="w-1/3 rounded-md" src={logo} alt="" />
            <h2 className="text-lg font-semibold">{category_name}</h2>
            <p className="text-gray-500 text-sm">{availability}</p>
        </div>
    );
};

export default Category;