import {useState} from "react";
import AddCategory from "./componets/AddCategory";
import {GifGrid} from "./componets/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['star wars']);

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>

          {
            categories.map(category => <GifGrid key={category} category={category} />)
          }
      </>
  );
};

export default GifExpertApp
