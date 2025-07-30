import PlaylistDetail from "../../../playlist-detail"

interface PageProps {
  params: {
    id: string
  }
}

export default function PlaylistPage({ params }: PageProps) {
  return <PlaylistDetail playlistId={params.id} />
}
