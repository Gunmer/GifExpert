import {useState} from "react";
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {
  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(c => [value, ...c]);
    setValue('');
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
        />
      </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
