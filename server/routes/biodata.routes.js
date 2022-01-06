const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
// const cloudinary = require("cloudinary").v2;

const Biodata = require("../models/Biodata");
const BiodataController = require("../controller/BiodataController");
const { authorization } = require("../controller/authController");

const router = express.Router();

//RETRIEVE
router.get("/", BiodataController.getAllBiodata);
router.get("/:id", BiodataController.getSingleBiodata);
router.get("/student/:id", BiodataController.getStudentData);

router.use(authorization);
router.post("/new", BiodataController.fillBiodata);
// router.put("/:id", BiodataController.updatePost);

module.exports = router;
