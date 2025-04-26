import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { getFeedbackModel } from "@/models/Feedback"

export async function GET() {
  try {
    // Mock data for build time
    if (!process.env.MONGODB_URI) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json({ error: "Database not configured" }, { status: 500 })
      } else {
        // Return mock data for development/build
        return NextResponse.json([
          {
            _id: "1",
            name: "Mock User",
            email: "mock@example.com",
            message: "This is mock feedback data for development",
            timestamp: new Date().toISOString(),
          },
        ])
      }
    }

    await connectToDatabase()
    const Feedback = getFeedbackModel()
    const feedbacks = await Feedback.find({}).sort({ timestamp: -1 })

    return NextResponse.json(feedbacks)
  } catch (error) {
    console.error("Error fetching feedback:", error)
    return NextResponse.json({ error: "Failed to fetch feedback" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // Mock response for build time
    if (!process.env.MONGODB_URI) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json({ error: "Database not configured" }, { status: 500 })
      } else {
        // Return mock success for development/build
        return NextResponse.json(
          {
            _id: "mock-id",
            success: true,
          },
          { status: 201 },
        )
      }
    }

    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    await connectToDatabase()
    const Feedback = getFeedbackModel()

    const feedback = new Feedback({
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date(),
    })

    await feedback.save()
    return NextResponse.json(feedback, { status: 201 })
  } catch (error) {
    console.error("Error creating feedback:", error)
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 })
  }
}
