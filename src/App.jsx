import { useState } from "react";
import "./App.css";
import { snacks } from "./snackDB";
import { getUpdatedList } from "./helper";

function App() {
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("id");

  const filters = { searchText, sort };

  const snackList = getUpdatedList(snacks, filters);

  const idSortHandler = () => {
    if (sort === "id") {
      setSort("id_desc");
    } else {
      setSort("id");
    }
  };

  const productNameSortHandler = () => {
    if (sort === "product_name") {
      setSort("product_name_desc");
    } else {
      setSort("product_name");
    }
  };

  const productWeightSortHandler = () => {
    if (sort === "product_weight") {
      setSort("product_weight_desc");
    } else {
      setSort("product_weight");
    }
  };

  const priceSortHandler = () => {
    if (sort === "price") {
      setSort("price_desc");
    } else {
      setSort("price");
    }
  };

  const caloriesSortHandler = () => {
    if (sort === "calories") {
      setSort("calories_desc");
    } else {
      setSort("calories");
    }
  };

  const ingredientsSortHandler = () => {
    if (sort === "ingredients") {
      setSort("ingredients_desc");
    } else {
      setSort("ingredients");
    }
  };

  console.log(sort);

  return (
    <div className="App">
      <h1>Snack Table</h1>
      <input
        type="text"
        value={searchText}
        placeholder="Search with Products or Ingredients"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={idSortHandler}>ID</th>
            <th onClick={productNameSortHandler}>Product Name</th>
            <th onClick={productWeightSortHandler}>Product Weight</th>
            <th onClick={priceSortHandler}>Price</th>
            <th onClick={caloriesSortHandler}>Calories</th>
            <th onClick={ingredientsSortHandler}>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {snackList.map((snack) => (
            <tr key={snack.id}>
              <td>{snack.id}</td>
              <td>{snack.product_name}</td>
              <td>{snack.product_weight}</td>
              <td>{snack.price}</td>
              <td>{snack.calories}</td>
              <td>{snack.ingredients.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
