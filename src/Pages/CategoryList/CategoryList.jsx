import { useEffect, useState } from "react";
import "./CategoryList.css";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch(`Categories.json`)
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div>
      <div className="py-14 max-w-7xl mx-auto">
        <div className="text-center space-y-3">
          <h1 className=" text-3xl md:text-5xl font-bold">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10 mx-10 md:mx-0 ">
          {categorys.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
