import React from "react";

function CategoryFilter({ categories, filter, setFilter }) {
  const handleFilterChange = (category) => {
    setFilter(category);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button
          key={category}
          className={filter === category ? "selected" : ""}
          onClick={() => handleFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
