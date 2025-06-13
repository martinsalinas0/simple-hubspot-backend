import Companies from "../models/company.model.js";

const getCompanies = async (req, res) => {
  try {
    const companies = await Companies.find();
    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCompany = async (req, res) => {
  try {
    const { name, logoUrl, location } = req.body;

    if (!name || !logoUrl || !location) {
      return res.status(400).json({ message: "Company name, logoURL, and location are required.", success: false });
    }

    await Companies.create({ name, logoUrl, location });

    res.status(201).json({
      message: "New Company Created",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const deleteComp = async (req, res) => {
  try {
    const { id } = req.params;
    await Companies.findByIdAndDelete(id);

    res.status(200).json({
      message: "Company Deleted",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const updateComp = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, logoUrl, location } = req.body.params;

    const company = Company.findById(id);

    if (!company) {
      res.status(404).json({ message: "Company not found", success: false });
    }

    const updated = await Companies.findByIdAndUpdate(
      id,
      { name, logoUrl, location },
      { new: true }
    );

    res.status(200).json({
      message: "Company Updated",
      success: true,
      updated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export { getCompanies, addCompany, deleteComp, updateComp };
