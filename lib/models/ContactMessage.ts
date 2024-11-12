import mongoose, { model, models } from "mongoose";

const ContactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
}, { timestamps: true });

const ContactMessage = models?.ContactMessage || model("ContactMessage", ContactMessageSchema);

export default ContactMessage;