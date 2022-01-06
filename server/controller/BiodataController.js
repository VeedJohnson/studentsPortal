const Biodata = require("../models/Biodata");
const upload = require("../utils/upload");
const ApiError = require("../utils/errorHandler");
const { request } = require("express");

//create biodata
exports.fillBiodata = (req, res, next) => {
  const ImageFile = upload.single("image");
  ImageFile(req, res, async (err) => {
    try {
      const { file, body } = req;
      if (err) {
        return next(new ApiError(err, 400));
      }

      if (!file) {
        return next(new ApiError("upload an image", 400));
      }

      const data = { image: `uploads/${file.filename}`, ...req.body };
      const biodata = await Biodata.create(data);
      res.status(201).json({
        status: "success",
        message: biodata,
      });
    } catch (error) {
      return next(error);
    }
  });
};

//read biodata
exports.getAllBiodata = async (req, res, next) => {
  try {
    let biodata = await Biodata.find()
      .populate({
        path: "user",
        select: "username _id",
      })
      .sort({ updatedAt: -1 });

    if (posts.length === 0) {
      return next(new ApiError("no data found", 404));
    }
    return res.status(200).json({
      status: "success",
      data: biodata,
    });
  } catch (error) {
    return next(error);
  }
};

//get all biodata of a student
exports.getStudentData = async (req, res, next) => {
  try {
    let biodata = await Biodata.find({ user: req.params.id });
    return res.status(200).json({
      status: "success",
      data: biodata,
    });
  } catch (error) {
    next(error);
  }
};

//get a single biodata
exports.getSingleBiodata = async (req, res, next) => {
  try {
    let { id } = req.params;
    let biodata = await Biodata.findById({ _id: id })
      .populate({
        path: "user",
        select: "email _id",
      });

    return res.status(200).json({
      status: "success",
      data: biodata,
    });
  } catch (error) {
    return next(error);
  }
};


//update posts
// exports.updatePost = async (req, res, next) => {
//   let { id } = req.params;

//   const { title, description } = req.body;
//   try {
//     let post = await Post.findByIdAndUpdate(
//       { _id: id },
//       {
//         title: title,
//         description: description,
//       }
//     );
//     return res.status(200).json({
//       status: "success",
//       data: post,
//     });
//   } catch (error) {
//     next(error);
//   }
// }; 

exports.logMethod = (req, res, next) => {
  // .. //
  console.log(req.method, "/", req.get("host") + "/" + req.url);
  next();
};
