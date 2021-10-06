import { Request, Response } from 'express';
import pool from '../database/db';
import * as query from '../database/queries';

export function getProducts(req: Request, res: Response): void {
  pool.query(query.getProducts)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.error(err.stack));
}

export function getProductById(req: Request, res: Response): void {
  const productId = parseInt(req.params.id, 10);
  pool.query(query.getProductById, [productId])
    .then((data) => res.status(200).json(data.rows[0]))
    .catch((err) => console.error(err.stack));
}

export function getProductStyles(req: Request, res: Response): void {
  const productId = parseInt(req.params.id, 10);
  pool.query(query.getProductStyles, [productId])
    .then((data) => res.status(200).json(data.rows[0]))
    .catch((err) => console.error(err.stack));
}

export function getRelatedProducts(req: Request, res: Response): void {
  const productId = parseInt(req.params.id, 10);
  pool.query(query.getRelatedProducts, [productId])
    .then((data) => res.status(200).json(data.rows[0].json_agg))
    .catch((err) => console.error(err.stack));
}
