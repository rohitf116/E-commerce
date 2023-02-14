const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const product = require("./routes/productRoutes");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
console.log(process.env, "process.env.MONGO_STRING");
mongoose
  .connect(
    process.env.MONGO_STRING ||
      "mongodb+srv://rohit_sonawane:SuperSu@cluster0.e9hjfiy.mongodb.net/new-db"
  )
  .then(() => console.log("MongaDB connected"))
  .catch((error) => console.log(error));
const port = 3001;
app.use("/v1/api/", product);

app.listen(port, () => {
  console.log(`listning on port: ${port}`);
});
