import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';

import { Breadcrumb } from '~/base/Breadcrumb';

const EditProduct = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.patch(`http://localhost:5000/products/${id}`, {
      name,
      price: Number(price),
    });

    router.push('/');
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setName(response.data.name);
      setPrice(response.data.price);
    };
    getProductById();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <Breadcrumb
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name, path: `/edit/${id}` },
        ]}
      />
      <form onSubmit={handleSubmit} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label htmlFor="productName" className="font-bold text-slate-700">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Product Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="price" className="font-bold text-slate-700">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
