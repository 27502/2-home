 import "./CategoryFilter.css";

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <div className="categories">
        <a href="#">Home</a>
        <a href="#">Breaking news</a>
        <a href="#">Regular news</a>
        <a href="#">International news</a>
        <a href="#">Sports</a>
        <a href="#" className="active">Entertainment</a>
        <a href="#">Culture</a>
        <a href="#">Arts</a>
        <a href="#">All news</a>
      </div>
      <div className="filter-section">
        <p>4 items found for category <b>Entertainment</b></p>
        <div className="filters">
          <div className="sort">
            <label>Sort By View:</label>
            <select>
              <option>Default</option>
              <option>Most Viewed</option>
              <option>Least Viewed</option>
            </select>
          </div>
          <div className="buttons">
            <button className="active">Today's Pick</button>
            <button className="active">Trending</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
