import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String,
});

export const Contact = mongoose.models.contacts || mongoose.model('contacts' , contactSchema);