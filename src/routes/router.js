const express = require("express");
const router = express.Router();
const multer = require("multer");

const homeController = require("../controllers/homeController");
const contactController = require("../controllers/contactController");
const aboutController = require("../controllers/aboutController");
const productsController = require("../controllers/productsController");
//const cartController = require("../controllers/cartController");
//const sessionController = require("../controllers/sessionController");
//const userController = require("../controllers/userController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/img/contact"));
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
// Home Page
router.get("/", homeController.home);

// // All Products
// router.get("/products", productsController.products);

// Product Detail
// router.get("/order/:id", productsController.order);
// router.post("/order/:id", productsController.orderChoice);

// // Create a new Product
// router.get("/create", productsController.create);
// router.post("/create", productsController.store);

// // Edit a product
// router.get("/edit/:id", productsController.editProduct);
// router.put('/order/:productId', productsController.update);

// // Delete a product
// router.delete('/order/:productId', productsController.delete)

// //Users
// router.get("/login", sessionController.login);
// router.get("/register", sessionController.register);
// router.get("/user", userController.userProfile);

// Others
router.get("/about", aboutController.about);
router.get("/contact", contactController.contact);
router.post("/contact", contactController.send);
// router.get("/cart", cartController.cart);

module.exports = router;
