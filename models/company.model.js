import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logoURL: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: [
        "initiated",
        "qualified",
        "contract sent",
        "negotiating",
        "closed won",
        "closed lost",
      ],
      default: "initiated",
      lowercase: true, 
      trim: true,
    },
    pointOfContact: { 
      type: String,
      required: false, 
      default: "none",
    }, 
    phoneNumber: { 
      type: String, 
      required: false, 
      default: "none",
    }, 
    email: { 
      type: String, 
      required: true, 
      default: "none",
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
