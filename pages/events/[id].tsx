import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import events from '../../data/events.json'
import { EventType } from '../../types'
import { CalendarDays, MapPin } from 'lucide-react'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = events.map((event) => ({
    params: { id: event.id }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = events.find((e) => e.id === params?.id)
  return { props: { event } }
}

export default function EventDetail({ event }: { event: EventType & { details: string } }) {
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>

      <div className="relative min-h-screen flex justify-center items-start p-6 overflow-hidden animated-bg">

        <div className="relative z-10 bg-white/60 backdrop-blur-lg max-w-2xl w-full rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h1>

          <div className="mb-4 text-sm text-gray-600 space-y-1">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-gray-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{event.description}</p>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">Event Details</h2>
          <p className="text-gray-700 mb-6 whitespace-pre-line">{event.details}</p>

          <Link
            href="/"
            className="inline-block bg-green-500 hover:bg-black text-white px-4 py-2 rounded-md font-medium transition"
          >
            ← Back to Events
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .animated-bg {
          background: linear-gradient(-45deg,rgb(21, 91, 60),rgb(35, 107, 61),rgb(98, 166, 130),rgb(167, 208, 194));
          background-size: 400% 400%;
          animation: gradientMove 06s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
}
