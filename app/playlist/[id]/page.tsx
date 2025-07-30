import PlaylistDetail from "../../../playlist-detail"

interface PlaylistPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PlaylistPage({ params }: PlaylistPageProps) {
  const { id } = await params
  return <PlaylistDetail playlistId={id} />
}
