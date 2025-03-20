import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/BagProject")
  .then(() => console.log("DataBase Connected Successfully"))
  .catch((err) => console.error("Error In Database Connection:", err));

export default mongoose.connection;