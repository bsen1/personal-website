import PlaylistDetail from "../../../playlist-detail"

interface PlaylistPageProps {
  params: {
    id: string
  }
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  return <PlaylistDetail playlistId={params.id} />
}
