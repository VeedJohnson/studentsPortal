const mongoose = require("mongoose");

const BiodataSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "firstname is required"],
      trim: true,
    },

    lastname: {
      type: String,
      required: [true, "lastname is required"],
      trim: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      required: [true, "gender is required"],
      trim: true,
    },

    nationality: {
      type: String,
      required: [true, "Nationality is required"],
      trim: true,
    },

    stateOfOrigin: {
      type: String,
      required: [true, "state is required"],
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: [true, "phone number is required"],
      trim: true,
    },

    
    image: {
      type: String,
      required: true,
      trim: true,
    },

    parentFirstname: {
      type: String,
      required: [true, "firstname is required"],
      trim: true,
    },
    
    parentLastname: {
      type: String,
      required: [true, "lastname is required"],
      trim: true,
    },
    
    parentPhoneNumber: {
      type: String,
      required: [true, "phone number  is required"],
      trim: true,
    },
    
    jambRegNumber: {
      type: String,
      required: [true, "JAMB Registration number is required"],
      trim: true,
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "a biodata must belong to a user"],
    },

  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Biodata = mongoose.model("Biodata", BiodataSchema);

module.exports = Biodata;
