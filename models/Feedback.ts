import mongoose, { Schema, type Document, type Model } from "mongoose"

export interface IFeedback extends Document {
  name: string
  email: string
  message: string
  timestamp: Date
}

// Define the schema outside of any function
const FeedbackSchema = new Schema({
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

// This is a workaround to prevent model compilation during build time
let FeedbackModel: Model<IFeedback>

export function getFeedbackModel(): Model<IFeedback> {
  if (mongoose.models.Feedback) {
    return mongoose.models.Feedback as Model<IFeedback>
  }

  // Only create the model if it doesn't exist
  FeedbackModel = mongoose.model<IFeedback>("Feedback", FeedbackSchema)
  return FeedbackModel
}
