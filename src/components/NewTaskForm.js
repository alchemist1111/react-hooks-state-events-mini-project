import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      text: text,
      category: category,
    };
    onTaskFormSubmit(newTask);
    setText("");
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
