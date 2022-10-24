const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authenticate");
const { create } = require("../models/userModel");


router.route("/product").get(getAllProducts);

router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"), createProduct);

router.route("/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"), updateProduct);

router.route("/product/:id").delete(isAuthenticatedUser,authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getSingleProduct);

router.route("/product/review").post(isAuthenticatedUser, createProductReview );

router.route("/review:id").get(getSingleProductReviews)

router.route("/review:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);


module.exports = router;
