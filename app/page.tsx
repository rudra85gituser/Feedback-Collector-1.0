"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Toaster } from "@/components/ui/toaster"
import FeedbackForm from "@/components/feedback-form"
import FeedbackList from "@/components/feedback-list"

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Feedback Collector
            </h1>
            <p className="text-gray-400 mt-2">We value your thoughts and suggestions</p>
          </div>

          <div className="flex justify-end mb-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="admin-mode" className="text-sm text-gray-400">
                View Submitted Feedback
              </Label>
              <Switch id="admin-mode" checked={showAdmin} onCheckedChange={setShowAdmin} />
            </div>
          </div>

          {showAdmin ? <FeedbackList /> : <FeedbackForm />}
        </div>
      </main>

      <footer className="py-6 border-t border-gray-800 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Feedback Collector | Created with MongoDB Atlas</p>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
