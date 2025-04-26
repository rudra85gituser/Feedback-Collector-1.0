import mongoose, { Schema, type Document } from "mongoose"

export interface IFeedback extends Document {
  name: string
  email: string
  message: string
  timestamp: Date
}

const FeedbackSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

// Check if the model is already defined to prevent overwriting during hot reloads
export default mongoose.models.Feedback || mongoose.model<IFeedback>("Feedback", FeedbackSchema)
