import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import CompanyRoutes from "./routes/company.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

const PORT = process.env.PORT || 8000;

//ROUTES

//app.use(mainRoutes);
app.get("/api", (req, res) => {
  res.send("MAIN HOME PAGE");
});

// console.log(process.env.MONGDB_URI);\
console.log("this is a simpliefied application of HubSpot CRM")

app.use("/api/company", CompanyRoutes);

const serverConnect = async () => {
  try {
    await connectDB();
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(
        "Server has been connected succesfully. \nServer connected at http://localhost:" +
          PORT
      );
    });
  } catch (error) {
    console.error("Database Connection failed", error);
    process.exit(1);
  }
};

serverConnect();
