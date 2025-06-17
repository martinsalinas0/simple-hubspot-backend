import Companies from "../models/company.model.js";

const getCompanies = async (req, res) => {
  try {
    const companies = await Companies.find();
    if(!companies){ 
      return res.status(404).json({message: error.message, error: 'cant find companies', success: false})
    }


    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCompany = async (req, res) => {
  try {
    const { name, logoURL, location } = req.body;

    if (!name || !logoURL || !location) {
      return res.status(400).json({
        message: "Company name, logoURL, and location are required.",
        success: false,
      });
    }

    await Companies.create({ name, logoURL, location});

    res.status(201).json({
      message: "New Company Created",
      success: true,
      name: name,
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
    const { name, logoURL, location, status } = req.body;

    const company = await Companies.findById(id);

    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }

    if (!name && !logoURL && !location && !status) {
      return res
        .status(400)
        .json({ message: "No value has been added to update" });
    }

    const updated = await Companies.findByIdAndUpdate(
      id,
      { name, logoURL, location, status },
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
