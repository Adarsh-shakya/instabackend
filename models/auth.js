import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    oldpassword: { type: String, required: true },
    newpassword: { type: String, required: true },
    joinedOn: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
