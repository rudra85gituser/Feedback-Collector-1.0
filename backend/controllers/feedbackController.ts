import { type NextRequest, NextResponse } from "next/server"
import connectToDatabase from "../db/connection"
import Feedback from "../models/Feedback"

export async function getAllFeedback() {
  try {
    await connectToDatabase()
    const feedbacks = await Feedback.find({}).sort({ timestamp: -1 })
    return feedbacks
  } catch (error) {
    console.error("Error fetching feedback:", error)
    throw new Error("Failed to fetch feedback")
  }
}

export async function createFeedback(data: { name: string; email: string; message: string }) {
  try {
    await connectToDatabase()
    const feedback = new Feedback({
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date(),
    })

    await feedback.save()
    return feedback
  } catch (error) {
    console.error("Error creating feedback:", error)
    throw new Error("Failed to create feedback")
  }
}

// API route handlers
export async function handleGetAllFeedback() {
  try {
    const feedbacks = await getAllFeedback()
    return NextResponse.json(feedbacks)
  } catch (error) {
    console.error("Error in handleGetAllFeedback:", error)
    return NextResponse.json({ error: "Failed to fetch feedback" }, { status: 500 })
  }
}

export async function handleCreateFeedback(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const feedback = await createFeedback(data)
    return NextResponse.json(feedback, { status: 201 })
  } catch (error) {
    console.error("Error in handleCreateFeedback:", error)
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 })
  }
}
