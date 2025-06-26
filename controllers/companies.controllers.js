

import Companies from "../models/company.model.js";

const getCompanies = async (req, res) => {
  try {
    const companies = await Companies.find();
    const companyCount = await Companies.countDocuments();
    if (!companies) {
      return res.status(404).json({ message: error.message, error: 'cant find companies', success: false })
    }


    res.status(200).json({ companies, count: companyCount, success: 'true' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCompany = async (req, res) => {
  try {
    const { name, logoURL, location, pointOfContact, email, phoneNumber, dealAmount } = req.body;

    if (!name || !email || !location) {
      return res.status(400).json({
        message: "Company name, logoURL, and location are required.",
        success: false,
      });
    }

    const newCompany = await Companies.create({
      name, 
      logoURL: logoURL || '',
      location, 
      pointOfContact, 
      email, 
      phoneNumber, 
      dealAmount
    });

    res.status(201).json({
      message: "New Company Created",
      success: true,
      company: newCompany,

    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const deleteComp = async (req, res) => {
  try {
    const { id } = req.params;

    const company = await Companies.findById(id);

    if (!company) {
      return res
        .status(404)
        .json({ message: "Company does not exist", success: false });
    }

    await Companies.findByIdAndDelete(id);

    res.status(200).json({
      message: "Company Deleted:",
      company,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid company ID", success: false });
  }
};

const updateComp = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      logoURL,
      location,
      status,
      pointOfContact,
      email,
      phoneNumber,
      dealAmount
    } = req.body;

    const company = await Companies.findById(id);

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }


    const updateFields = {};

    if (name !== undefined) updateFields.name = name;
    if (logoURL !== undefined) updateFields.logoURL = logoURL;
    if (location !== undefined) updateFields.location = location;
    if (status !== undefined) updateFields.status = status;
    if (pointOfContact !== undefined) updateFields.pointOfContact = pointOfContact;
    if (email !== undefined) updateFields.email = email;
    if (phoneNumber !== undefined) updateFields.phoneNumber = phoneNumber;
    if (dealAmount !== undefined) updateFields.dealAmount = dealAmount;

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        message: "No value has been added to update",
        success: false,
      });
    }

    const updated = await Companies.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    return res.status(200).json({
      message: "Company Updated",
      success: true,
      updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};


const getCompById = async (req, res) => {
  try {
    const { id } = req.params;

    const company = await Companies.findById(id);

    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }

    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};






export { getCompanies, addCompany, deleteComp, updateComp, getCompById };
