import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const userSchema = new Schema({
  name: { type: "string", required: true },
  number: { type: "number", required: true}
});

export const UserModel =
  mongoose.models.Users ||
  mongoose.model("Users", userSchema);
