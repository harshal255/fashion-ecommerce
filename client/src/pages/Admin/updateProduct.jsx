import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const UpdateProduct = ({ productId }) => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    images: {
      public_id: "",
      url: "",
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/product/${productId}`
        );
        const product = response.data;
        setInitialValues(product);
      } catch (error) {
        console.error(error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/product/${productId}`,
        values
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
      <h1 className="text-center mb-6 text-2xl font-bold">Update Product Form</h1>
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
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
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
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
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
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
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
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
            />
          </div>
          <div className="my-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Update multiple files</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
          >
            Update
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateProduct;
