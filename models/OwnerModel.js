import mongoose from "mongoose";

const OwnerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    // Prevents accidental spaces when users enter their names, emails, etc. Keeps data clean and consistent.
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: Number,
});

export default mongoose.model("Owner", OwnerSchema);
