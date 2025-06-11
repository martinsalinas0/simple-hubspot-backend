//get all companies
const getCompanies = async (req, res) => {
  try {
    const companies = await Db.companies.find();
    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCompany = async (req, res) => {
  try {
    const { name, logoUrl, location } = req.body.params;

    const newCompany = Db.companies.create({ name, logoUrl, location });

    res.status(202).json({
      message: "New Company Created",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
