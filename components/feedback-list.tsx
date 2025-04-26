"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { formatDistanceToNow } from "date-fns"

// Define the Feedback type
interface Feedback {
  _id: string
  name: string
  email: string
  message: string
  timestamp: string
}

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFeedback()
  }, [])

  const loadFeedback = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/feedback")
      if (!response.ok) {
        throw new Error("Failed to fetch feedback")
      }
      const data = await response.json()
      setFeedbacks(data)
    } catch (error) {
      console.error("Error loading feedback:", error)
      toast({
        title: "Error",
        description: "Failed to load feedback data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (feedbacks.length === 0) {
    return (
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="pt-6">
          <p className="text-center text-gray-400">No feedback submissions yet.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl">Submitted Feedback</CardTitle>
        </CardHeader>
      </Card>

      {feedbacks.map((feedback) => (
        <Card key={feedback._id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-lg">{feedback.name}</h3>
              <span className="text-xs text-gray-500">
                {feedback.timestamp
                  ? formatDistanceToNow(new Date(feedback.timestamp), { addSuffix: true })
                  : "Unknown time"}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">{feedback.email}</p>
            <p className="text-gray-300 border-t border-gray-800 pt-4">{feedback.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
