import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const playlists = [
    {
      id: 1,
      title: "suite",
      author: "brendan",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "locked in the lib",
      author: "brendan",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      title: "lucid",
      author: "brendan",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      title: "so silly",
      author: "brendan",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      title: "oldies",
      author: "brendan",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      title: "bop bop bop",
      author: "brendan",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-700 to-gray-900 text-white">
      <div className="px-8 pt-8 pb-6">
        {/* Profile Header */}
        <div className="flex items-end gap-6 mb-8">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile picture"
              width={200}
              height={200}
              className="rounded-full shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium mb-2">Profile</p>
            <h1 className="text-7xl font-black mb-6 tracking-tight">brendan</h1>
            <p className="text-sm text-gray-300">8 Public Playlists • 25 Followers • 129 Following • (Follows you)</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 border-gray-400 text-white hover:bg-white/10 hover:border-white bg-transparent"
          >
            Following
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </div>

        {/* Public Playlists Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Public Playlists</h2>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto font-medium">
              Show all
            </Button>
          </div>

          {/* Playlists Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
  )
}
