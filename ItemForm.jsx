import React, { useState } from "react";

function ItemForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    category: "",
    manufactureDate: "",
    expiryDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.itemName) tempErrors.itemName = "Item name is required";
    if (!formData.price) tempErrors.price = "Price is required";
    if (!formData.category) tempErrors.category = "Category is required";
    if (!formData.manufactureDate)
      tempErrors.manufactureDate = "Manufacturing date is required";
    if (!formData.expiryDate)
      tempErrors.expiryDate = "Expiry date is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Item Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
          />
          {errors.itemName && <p style={{ color: "red" }}>{errors.itemName}</p>}
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        </div>

        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          {errors.category && (
            <p style={{ color: "red" }}>{errors.category}</p>
          )}
        </div>

        <div>
          <label>Manufacturing Date:</label>
          <input
            type="date"
            name="manufactureDate"
            value={formData.manufactureDate}
            onChange={handleChange}
          />
          {errors.manufactureDate && (
            <p style={{ color: "red" }}>{errors.manufactureDate}</p>
          )}
        </div>

        <div>
          <label>Expiry Date:</label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          {errors.expiryDate && (
            <p style={{ color: "red" }}>{errors.expiryDate}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ItemForm;