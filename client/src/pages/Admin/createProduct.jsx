import React from "react";
import { Formik, Form, Field } from "formik";

const CreateProduct = () => {
  const initialValues = {
    name: "",
    price: 0,
    description: "",
    category: "",
    images: {
      public_id: "",
      url: "",
    },
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/product/new",
        values
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
    return (
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
        <h1 className="text-center mb-6 text-2xl font-bold">Product Form</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-green-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-1 font-medium">
                Price:
              </label>
              <Field
                type="number"
                id="price"
                name="price"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-green-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-1 font-medium">
                Description:
              </label>
              <Field
                type="text"
                id="description"
                name="description"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-green-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block mb-1 font-medium">
                Category:
              </label>
              <Field
                type="text"
                id="category"
                name="category"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-green-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="images.public_id" className="block mb-1 font-medium">
                Public ID:
              </label>
              <Field
                type="text"
                id="images.public_id"
                name="images.public_id"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-green-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="images.url" className="block mb-1 font-medium">
                URL:
              </label>
              <Field
                type="text"
                id="images.url"
                name="images.url"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-green-200"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  };
export default CreateProduct