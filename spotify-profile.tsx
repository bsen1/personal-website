import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Music } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const playlists = [
    {
      id: 1,
      title: "About",
      author: "Brian Sen",
      image: "/placeholder.svg?height=200&width=200",
      songCount: 5,
    },
    {
      id: 2,
      title: "Experience",
      author: "Brian Sen",
      image: "/placeholder.svg?height=200&width=200",
      songCount: 3,
    },
    {
      id: 3,
      title: "Projects",
      author: "Brian Sen",
      image: "/placeholder.svg?height=200&width=200",
      songCount: 3,
    },
  ]

  return (
    <div className="h-screen overflow-hidden text-white relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-700 to-purple-800"></div>

      {/* Fade to Black Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.7) 80%, black 100%)",
        }}
      ></div>

      <div className="relative z-10 h-full overflow-y-auto px-8 pt-8 pb-6">
        {/* Profile Header */}
        <div className="flex items-end gap-6 mb-8">
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/images/profile-photo.jpg"
              alt="Brian Sen profile picture"
              width={400}
              height={400}
              className="object-cover scale-150"
              style={{
                objectPosition: "center 10%",
                transformOrigin: "center center",
              }}
            />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium mb-2">Profile</p>
            <h1 className="text-7xl font-black mb-6 tracking-tight">Brian Sen</h1>
            <p className="text-sm text-gray-300">
              3 Public Playlists • <span className="text-white">Computer Science @ UC Santa Barbara</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-white font-medium text-lg border border-gray-600 hover:border-white hover:scale-110 transition-all duration-200 rounded-full px-6 py-2 cursor-pointer">
            Connect
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white border border-gray-600 hover:border-white hover:scale-110 transition-all duration-200 rounded-full h-12 w-12"
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white border border-gray-600 hover:border-white hover:scale-110 transition-all duration-200 rounded-full h-12 w-12"
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white border border-gray-600 hover:border-white hover:scale-110 transition-all duration-200 rounded-full h-12 w-12"
          >
            <Music className="h-6 w-6" />
          </Button>
        </div>

        {/* Public Playlists Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Public Playlists</h2>
          </div>

          {/* Playlists Grid - Capped width */}
          <div className="max-w-4xl">
            <div className="grid grid-cols-3 gap-6">
              {playlists.map((playlist) => (
                <Link
                  key={playlist.id}
                  href={`/playlist/${playlist.id}`}
                  className="group cursor-pointer bg-gray-800/20 hover:bg-gray-700/30 p-4 rounded-lg transition-colors block"
                >
                  <div className="aspect-square mb-4 relative overflow-hidden rounded-lg">
                    <Image
                      src={playlist.image || "/placeholder.svg"}
                      alt={playlist.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-1 truncate">{playlist.title}</h3>
                  <p className="text-sm text-gray-400 truncate">By {playlist.author}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
