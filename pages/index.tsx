import events from '../data/events.json'
import EventCard from '../components/EventCard'
import { useState } from 'react'

export default function Home() {
  const [location, setLocation] = useState('')
  const filtered = events.filter(e =>
    e.location.toLowerCase().includes(location.toLowerCase())
  )

  return (
    <main className="p-6">

      {/* 🔍 Filter Input Section */}
      <section className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Events Explorer</h1>
        <input
          type="text"
          placeholder="Search by location"
          className="border border-gray-300 rounded-md p-3 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setLocation(e.target.value)}
        />
      </section>

      {/* 📋 Events Grid Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

    </main>
  )
}
