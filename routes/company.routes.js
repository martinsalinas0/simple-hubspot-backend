import express from "express";
import {
  getCompanies,
  addCompany,
  deleteComp,
  updateComp,
  getCompById,
} from "../controllers/companies.controllers.js";

const router = express.Router();
// route is "api/company/----"
router.get("/company/all", getCompanies);
router.post("/company/new", addCompany);
router.delete("/company/:id", deleteComp);
router.put("/company/:id", updateComp);
router.get("/company/:id", getCompById)

export default router; 


export { router as CompanyRoutes };