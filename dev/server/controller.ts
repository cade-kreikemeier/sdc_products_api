import { Request, Response } from 'express';
import pool from '../database/db';
import * as query from '../database/queries';

export function getProducts(req: Request, res: Response) {
  pool.query(query.getProducts, (err, data) => {
    if (err) throw err;
    res.status(200).json(data.rows);
  });
}

export function getProductById(req: Request, res: Response) {
  const productId = parseInt(req.params.id, 10);
  pool.query(query.getProductById, [productId], (err, data) => {
    if (err) throw err;
    res.status(200).json(data.rows[0]);
  });
}

export function getProductStyles(req: Request, res: Response) {
  const productId = parseInt(req.params.id, 10);
  pool.query(query.getProductStyles, [productId], (err, data) => {
    if (err) throw err;
    res.status(200).json(data.rows[0]);
  });
}
