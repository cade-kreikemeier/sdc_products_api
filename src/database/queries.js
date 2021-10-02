"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = void 0;
exports.getProducts = 'SELECT * FROM product LIMIT 10';
exports.getProductById = `
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
//# sourceMappingURL=queries.js.map