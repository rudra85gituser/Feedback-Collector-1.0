import type { NextRequest } from "next/server"
import { handleGetAllFeedback, handleCreateFeedback } from "@/backend/controllers/feedbackController"

export async function GET() {
  return handleGetAllFeedback()
}

export async function POST(request: NextRequest) {
  return handleCreateFeedback(request)
}
