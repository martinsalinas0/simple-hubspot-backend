import express from "express";
import {
  getCompanies,
  addCompany,
  deleteComp,
  updateComp,
} from "../controllers/companies.controllers.js";

const router = express.Router();
// route is "api/company/----"
router.get("/all", getCompanies);
router.post("/new", addCompany);
router.delete("/companies/:id", deleteComp);
router.put("/companies/:id", updateComp);

export default router; 


export { router as CompanyRoutes };