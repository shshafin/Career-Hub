const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    
      <div className="div rounded-lg">
        <div className="m-7">
          <img className="bg-violet-100 p-2 rounded-lg " src={logo} alt="" />
        </div>
        <div className="mx-7 mb-7 space-y-2">
          <div className="font-bold">{category_name}</div>
          <div className="text-sm text-gray-600">{availability}</div>
        </div>
      </div>
   
  );
};

export default Category;
