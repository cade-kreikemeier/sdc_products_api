export const getProducts = 'SELECT * FROM product LIMIT 10';

export const getProductById = `
  SELECT *, (
      SELECT array(
        SELECT jsonb_build_object(
          'feature', feature,
          'value', value
        ) 
        FROM features
        WHERE product_id = $1
      ) AS features
    )
  FROM product
  WHERE id = $1
`;
