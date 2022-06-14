// import { config } from "dotenv";
// config();
// console.log(process.env.REACT_APP_API_URL);
// console.log(import.meta.env.VITE_API_URL);

import { v4 as uuid } from "uuid";

interface Product {
  name: string;
  value: number;
}

async function callAPIs() {
  const githubUserProfile = await getGithubProfile();
  const movies = await searchMovie("batman");
  const createdProduct = await createProduct("cachecol azul", 70);

  console.log(githubUserProfile);
  console.log(movies);
  console.log(createdProduct);

  return { githubUserProfile, movies };
}

async function getGithubProfile() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const githubUser = "fkbral";

  const response = await fetch(`${apiUrl}/users/${githubUser}`);

  // return fetch(`${apiUrl}/users/${githubUser}`).then((response) => {
  //   return response.json().then((githubUserProfile) => {
  //     // console.log(githubUserProfile);
  //     return githubUserProfile;
  //   });
  // });
  // console.log("Rodo antes")

  const githubUserProfile = await response.json();

  return githubUserProfile;
}

async function searchMovie(title: string) {
  const apiUrl = import.meta.env.VITE_MOVIE_API_URL;
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  const response = await fetch(`${apiUrl}?s=${title}&apiKey=${apiKey}`);

  const movies = await response.json();

  console.log(movies);

  return movies;
}

async function getProducts() {
  const productsApi = import.meta.env.VITE_PRODUCTS_API;

  const response = await fetch(`${productsApi}/products`);

  const products: Product[] = await response.json();

  console.log(products);
}

async function createProduct(name: string, value: number) {
  const productsApi = import.meta.env.VITE_PRODUCTS_API;

  const id = uuid();
  const response = await fetch(`${productsApi}/products`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      name: name,
      value: value,
    } as Product),
  });

  const product = await response.json();

  return product;
}

callAPIs();

export {};
