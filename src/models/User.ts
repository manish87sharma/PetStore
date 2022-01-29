import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param name:string
 */
export interface IUser extends Document {
  name: string
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    required: true,
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User: Model<any> = model("User", userSchema);

export default User;
