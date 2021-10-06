import { PoolClient } from 'pg';
import pool from '../database/db';
import * as query from '../database/queries';
import { Product, ProductStyles } from '../models/interfaces';
import { productData, productsData, productStylesData } from '../models/queriesTestData';

let client: PoolClient;

beforeEach(async () => {
  client = await pool.connect();
});

afterEach((done) => {
  client.release();
  done();
});

describe('a query to return a list of products', () => {
  it('returns an array of products from the database', async () => {
    let response!: Product[];

    await client.query(query.getProducts)
      .then((data) => { response = data.rows; })
      .catch((err) => console.error(err.stack));

    expect(response).toEqual(productsData);
  });
});

describe('a query to return product info given a product id', () => {
  it('returns an object of product info from the database', async () => {
    let response!: Product;

    await client.query(query.getProductById, [3])
      .then((data) => { [response] = data.rows; })
      .catch((err) => console.error(err.stack));

    expect(response).toEqual(productData);
  });
});

describe('a query to return product styles info given a product id', () => {
  it('returns an object with an array of results from the database', async () => {
    let response!: ProductStyles;

    await client.query(query.getProductStyles, [3])
      .then((data) => { [response] = data.rows; })
      .catch((err) => console.error(err.stack));

    expect(response).toEqual(productStylesData);
  });
});

describe('a query to return an array of related product given a product id', () => {
  it('returns an array of related products from the database', async () => {
    let response!: number[];

    await client.query(query.getRelatedProducts, [3])
      .then((data) => { response = data.rows[0].json_agg; })
      .catch((err) => console.error(err.stack));

    expect(response).toEqual([5, 9, 7, 2, 1]);
  });
});
