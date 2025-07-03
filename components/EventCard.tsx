'use client'

import Link from 'next/link'
import { CalendarDays, MapPin, Heart } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

type EventType = {
  id: string
  title: string
  date: string
  location: string
  description: string
}

function getTag(title: string, location: string) {
  const text = `${title} ${location}`.toLowerCase()

  if (text.includes('health')) return '#Health'
  if (text.includes('tech') || text.includes('conference') || text.includes('expo')) return '#Tech'
  if (text.includes('game') || text.includes('esports')) return '#Gaming'
  if (text.includes('education') || text.includes('learn')) return '#Education'
  if (text.includes('festival') || text.includes('yatra')) return '#Culture'
  if (text.includes('auto') || text.includes('car')) return '#Auto'

  return '#Events'
}

export default function EventCard({ event }: { event: EventType }) {
  const [liked, setLiked] = useState(false)
  const tag = getTag(event.title, event.location)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-sm border border-transparent hover:border-green-400 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-5 flex flex-col justify-between h-full"
    >
      <div>
        {/* Tag badge and heart */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">{tag}</span>
          <button
            onClick={() => setLiked(!liked)}
            aria-label="Add to favorites"
            className="text-gray-400 hover:text-red-500 transition"
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 stroke-red-500' : ''}`} />
          </button>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h2>

        <div className="text-sm text-gray-600 space-y-1">
          <p className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> {event.date}
          </p>
          <p className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {event.location}
          </p>
        </div>

        <p className="mt-3 text-gray-700 text-sm leading-relaxed">{event.description}</p>
      </div>

      <Link
        href={`/events/${event.id}`}
        className="mt-4 text-center bg-green-500 hover:bg-black text-white px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out"
      >
        View Details
      </Link>
    </motion.article>
  )
}
