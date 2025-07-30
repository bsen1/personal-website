"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

const playlists = [
  {
    id: "1",
    title: "About",
    author: "Brian Sen",
    image: "/placeholder.svg?height=200&width=200",
    songCount: 5,
  },
  {
    id: "2",
    title: "Experience",
    author: "Brian Sen",
    image: "/placeholder.svg?height=200&width=200",
    songCount: 10,
  },
  {
    id: "3",
    title: "Projects",
    author: "Brian Sen",
    image: "/placeholder.svg?height=200&width=200",
    songCount: 6,
  },
]

export default function SpotifyProfile() {
  return (
    <div className="text-white relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-800"></div>

      {/* Fade to Black Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 60%, black 75%)",
        }}
      ></div>

      <div className="relative z-10 px-8 pt-8 pb-6">
        {/* Profile Header */}
        <div className="flex items-end gap-6 mb-8">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=232&width=232"
              alt="Profile"
              width={232}
              height={232}
              className="rounded-full shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium mb-2">Profile</p>
            <h1 className="text-8xl font-black mb-6 tracking-tight">Brian Sen</h1>
            <div className="flex items-center gap-1 text-sm">
              <span>3 Public Playlists</span>
              <span>•</span>
              <span>25 Followers</span>
              <span>•</span>
              <span>129 Following</span>
              <span>•</span>
              <span className="text-gray-300">(Follows you)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 mb-12">
          <Button
            variant="outline"
            className="rounded-full border-gray-400 text-white hover:bg-white/10 px-8 py-2 bg-transparent"
          >
            Following
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </div>

        {/* Public Playlists Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Public Playlists</h2>
            <button className="text-sm text-gray-300 hover:text-white hover:underline">Show all</button>
          </div>

          {/* Playlist Grid with max width constraint */}
          <div className="max-w-4xl">
            <div className="grid grid-cols-3 gap-6">
              {playlists.map((playlist) => (
                <Link key={playlist.id} href={`/playlist/${playlist.id}`} className="group cursor-pointer">
                  <div className="bg-gray-800/40 p-4 rounded-lg hover:bg-gray-700/40 transition-all duration-300 group-hover:scale-105">
                    <div className="relative mb-4">
                      <Image
                        src={playlist.image || "/placeholder.svg"}
                        alt={playlist.title}
                        width={200}
                        height={200}
                        className="w-full aspect-square object-cover rounded-md shadow-lg"
                      />
                    </div>
                    <h3 className="font-semibold text-white mb-2 truncate">{playlist.title}</h3>
                    <p className="text-sm text-gray-400">By {playlist.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
