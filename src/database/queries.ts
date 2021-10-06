export const getProducts = `
  SELECT
    id,
    name,
    slogan,
    description,
    category,
    default_price,
    TO_CHAR(created_at, 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS created_at,
    TO_CHAR(updated_at, 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS updated_at
  FROM product
  LIMIT 10`;

export const getProductById = `
  SELECT
    id,
    name,
    slogan,
    description,
    category,
    default_price,
    TO_CHAR(created_at, 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS created_at,
    TO_CHAR(updated_at, 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS updated_at,
  (
    SELECT array(
      SELECT json_build_object(
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

export const getProductStyles = `
  SELECT product_id::text, (
    SELECT array(
      SELECT json_build_object(
        'style_id', id,
        'name', name,
        'original_price', TO_CHAR(original_price, 'FM999999999.00'),
        'sale_price', COALESCE(TO_CHAR(sale_price, 'FM999999999.00'), '0'),
        'default?', default_style,
        'photos', (
          SELECT array(
            SELECT json_build_object(
              'thumbnail_url', thumbnail_url,
              'url', url
            )
            FROM photos
            WHERE style_id = s.id
          ) AS photos
        ),
        'skus', (
          SELECT (
            json_object_agg(
              id, json_build_object(
                'quantity', quantity,
                'size', size
              )
            )
          )
          FROM skus
          WHERE style_id = styles.id
        )
      )
      FROM styles s
      WHERE product_id = $1
    ) AS results
  )
  FROM styles
  WHERE product_id = $1
`;

export const getRelatedProducts = `
  SELECT json_agg(related_product_id)
  FROM related
  WHERE product_id = $1
`;
