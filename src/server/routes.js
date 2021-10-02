"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get('/', controller_1.getProducts);
router.get('/:id(\\d+$)', controller_1.getProductById);
exports.default = router;
//# sourceMappingURL=routes.js.map