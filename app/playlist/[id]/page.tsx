import PlaylistDetail from "../../../playlist-detail"

export default function PlaylistPage({ params }: { params: { id: string } }) {
  return <PlaylistDetail playlistId={params.id} />
}
