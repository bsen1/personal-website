"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Shuffle, Plus, Download, MoreHorizontal, Search, Clock, ArrowLeft } from "lucide-react"
import { useState } from "react"

interface PlaylistDetailProps {
  playlistId: string
}

export default function PlaylistDetail({ playlistId }: PlaylistDetailProps) {
  // Mock data - in a real app this would come from an API
  const playlist = {
    id: playlistId,
    title: "lucid",
    author: "brendan",
    type: "Public Playlist",
    songCount: 22,
    duration: "1 hr 9 min",
    image: "/placeholder.svg?height=300&width=300",
  }

  const tracks = [
    {
      id: 1,
      title: "SLOW DANCING IN THE DARK",
      artist: "Joji",
      album: "BALLADS 1",
      dateAdded: "Mar 8, 2025",
      duration: "3:29",
      explicit: true,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "Nauseous / Devilish",
      artist: "Vegyn, JPEGMAFIA",
      album: "Nauseous / Devilish",
      dateAdded: "Mar 8, 2025",
      duration: "2:23",
      explicit: true,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      title: "HAZARD DUTY PAY!",
      artist: "JPEGMAFIA",
      album: "OFFLINE!",
      dateAdded: "Mar 8, 2025",
      duration: "2:37",
      explicit: true,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      title: "Polynesian",
      artist: "Smino",
      album: "Polynesian",
      dateAdded: "Mar 8, 2025",
      duration: "3:00",
      explicit: true,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      title: "WHAT KIND OF RAPPIN' IS THIS?",
      artist: "JPEGMAFIA",
      album: "LP!",
      dateAdded: "Mar 8, 2025",
      duration: "1:52",
      explicit: true,
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const [expandedTracks, setExpandedTracks] = useState<Set<number>>(new Set())
  const [playingTracks, setPlayingTracks] = useState<Set<number>>(new Set())

  const toggleTrackDetails = (trackId: number) => {
    const newExpanded = new Set<number>()
    const newPlaying = new Set<number>()

    if (expandedTracks.has(trackId)) {
      // If clicking the same track, close it
      setExpandedTracks(newExpanded)
      setPlayingTracks(newPlaying)
    } else {
      // Open only this track, close all others
      newExpanded.add(trackId)
      newPlaying.add(trackId)
      setExpandedTracks(newExpanded)
      setPlayingTracks(newPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 via-red-900 to-gray-900 text-white">
      <div className="px-8 pt-8 pb-6">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Profile
        </Link>

        {/* Playlist Header */}
        <div className="flex items-end gap-6 mb-8">
          <div className="relative">
            <Image
              src={playlist.image || "/placeholder.svg"}
              alt={playlist.title}
              width={300}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium mb-2">{playlist.type}</p>
            <h1 className="text-7xl font-black mb-6 tracking-tight">{playlist.title}</h1>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Profile"
                width={24}
                height={24}
                className="rounded-full"
              />
              <Link href="/" className="font-semibold hover:underline cursor-pointer">
                {playlist.author}
              </Link>
              <span className="text-gray-300">
                • {playlist.songCount} songs, {playlist.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold h-14 w-14 p-0"
            >
              <Play className="h-6 w-6 fill-current" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
              <Shuffle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
              <Plus className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
              <Download className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
              <MoreHorizontal className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <span className="text-gray-300 text-sm">Custom order</span>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Track List Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-700 mb-4">
          <div className="col-span-1"></div>
          <div className="col-span-5">Title</div>
          <div className="col-span-3">Album</div>
          <div className="col-span-2">Date added</div>
          <div className="col-span-1 text-center">
            <Clock className="h-4 w-4 mx-auto" />
          </div>
        </div>

        {/* Track List */}
        <div className="space-y-1">
          {tracks.map((track, index) => (
            <div key={track.id} className="rounded-md overflow-hidden">
              <div className="grid grid-cols-12 gap-4 px-4 py-2 hover:bg-white/10 group cursor-pointer">
                <div className="col-span-1 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleTrackDetails(track.id)
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                  >
                    {playingTracks.has(track.id) ? (
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-1 h-3 bg-green-500 mr-0.5"></div>
                        <div className="w-1 h-3 bg-green-500"></div>
                      </div>
                    ) : (
                      <Play className="h-4 w-4 fill-current" />
                    )}
                  </button>
                </div>

                <div className="col-span-5 flex items-center gap-3">
                  <Image
                    src={track.image || "/placeholder.svg"}
                    alt={track.title}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <div>
                    <div className={`font-medium ${playingTracks.has(track.id) ? "text-green-500" : "text-white"}`}>
                      {track.title}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      {track.explicit && (
                        <span className="bg-gray-600 text-xs px-1 rounded text-white font-bold">E</span>
                      )}
                      {track.artist}
                    </div>
                  </div>
                </div>

                <div className="col-span-3 text-gray-400 flex items-center">{track.album}</div>

                <div className="col-span-2 text-gray-400 flex items-center">{track.dateAdded}</div>

                <div className="col-span-1 text-gray-400 text-center flex items-center justify-center">
                  {track.duration}
                </div>
              </div>

              {/* Accordion Details Section */}
              {expandedTracks.has(track.id) && (
                <div className="px-4 pb-4 bg-white/5 border-t border-gray-700 animate-in slide-in-from-top-2 duration-300">
                  <div className="pt-4 text-sm text-gray-300">
                    <h4 className="text-white font-medium mb-3">Track Details</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Released: March 15, 2023</li>
                      <li>Genre: Alternative Hip-Hop, R&B</li>
                      <li>Producer: {track.artist}</li>
                      <li>Label: Independent</li>
                      <li>Plays: 2.4M streams</li>
                      <li>Added to 15,432 playlists</li>
                      <li>Peak chart position: #47 on Alternative Charts</li>
                      <li>Recording location: Los Angeles, CA</li>
                      <li>Tempo: 120 BPM</li>
                      <li>Key: C Major</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
