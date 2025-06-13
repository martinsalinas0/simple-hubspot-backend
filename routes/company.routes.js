import express from "express";
import {
  getCompanies,
  addCompany,
  deleteComp,
  updateComp,
} from "../controllers/companies.controllers.js";

const router = express.Router();

router.get("/companies", getCompanies);
router.post("/companies", addCompany);
router.delete("/companies/:id", deleteComp);
router.put("/companies/:id", updateComp);

export default router; 