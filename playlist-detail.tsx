"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Shuffle, Plus, Download, MoreHorizontal, Clock, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

interface PlaylistDetailProps {
  playlistId: string
}

export default function PlaylistDetail({ playlistId }: PlaylistDetailProps) {
  // Different content based on playlist ID
  const getPlaylistData = (id: string) => {
    switch (id) {
      case "1":
        return {
          id: id,
          title: "About",
          author: "Brian Sen",
          type: "Public Playlist",
          image: "/placeholder.svg?height=300&width=300",
          tracks: [
            {
              id: 1,
              title: "Education",
              artist: "University of California - Santa Barbara",
              album: "Computer Science Student",
              duration: "4:00",
              dateRange: "Expected June 2026",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 2,
              title: "Academic Excellence",
              artist: "Engineering Honors Program",
              album: "Dean's List Scholar",
              duration: "3:30",
              dateRange: "GPA: 3.96",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 3,
              title: "Technical Skills",
              artist: "Full Stack Development",
              album: "Software Engineer",
              duration: "2:45",
              dateRange: "Multiple Languages",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 4,
              title: "Contact Information",
              artist: "San Francisco, CA",
              album: "Available for Opportunities",
              duration: "3:15",
              dateRange: "(415) 794-2214",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 5,
              title: "Professional Focus",
              artist: "Machine Learning & AI",
              album: "Research & Development",
              duration: "2:30",
              dateRange: "Continuous Learning",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
          ],
        }
      case "2":
        return {
          id: id,
          title: "Experience",
          author: "Brian Sen",
          type: "Public Playlist",
          image: "/placeholder.svg?height=300&width=300",
          tracks: [
            {
              id: 1,
              title: "Capital One",
              artist: "Software Engineer Intern",
              album: "Technology",
              duration: "12:00",
              dateRange: "June 2025 - Present",
              location: "Richmond, VA",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 2,
              title: "UCSB Information Technology",
              artist: "IT Software Engineer",
              album: "University Technology",
              duration: "8:30",
              dateRange: "May 2024 - Present",
              location: "Santa Barbara, CA",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 3,
              title: "UCSB College of Engineering",
              artist: "Gen AI Research Assistant",
              album: "Academic Research",
              duration: "6:45",
              dateRange: "Sep 2024 - June 2025",
              location: "Santa Barbara, CA",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
          ],
        }
      case "3":
        return {
          id: id,
          title: "Projects",
          author: "Brian Sen",
          type: "Public Playlist",
          image: "/placeholder.svg?height=300&width=300",
          tracks: [
            {
              id: 1,
              title: "EasyReply",
              artist: "React, Node, Express, AWS, REST API, TailwindCSS",
              album: "AI-Powered Email Tool",
              duration: "15:30",
              dateRange: "Mar 2025",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 2,
              title: "HopIn Ridesharing App",
              artist: "React Native, Firebase, Expo Go, Git",
              album: "Mobile Application",
              duration: "8:45",
              dateRange: "Jan 2025",
              explicit: false,
              image: "/placeholder.svg?header=40&width=40",
            },
            {
              id: 3,
              title: "Puzzle Diary",
              artist: "React.js, Firebase, OAuth, Cloud Firestore",
              album: "Web Application",
              duration: "20:15",
              dateRange: "Summer 2024",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
          ],
        }
      default:
        return {
          id: id,
          title: "About",
          author: "Brian Sen",
          type: "Public Playlist",
          image: "/placeholder.svg?height=300&width=300",
          tracks: [],
        }
    }
  }

  const playlist = getPlaylistData(playlistId)
  const [expandedTracks, setExpandedTracks] = useState<Set<number>>(new Set())
  const [playingTracks, setPlayingTracks] = useState<Set<number>>(new Set())
  const [sortState, setSortState] = useState<"asc" | "desc">("asc") // Default to "asc" (down arrow)

  // Open first track by default
  useEffect(() => {
    if (playlist.tracks.length > 0) {
      const firstTrackId = playlist.tracks[0].id
      // Only set if not already set to avoid infinite loop
      setExpandedTracks((prevExpanded) => {
        if (prevExpanded.size === 0) {
          return new Set([firstTrackId])
        }
        return prevExpanded
      })
      setPlayingTracks((prevPlaying) => {
        if (prevPlaying.size === 0) {
          return new Set([firstTrackId])
        }
        return prevPlaying
      })
    }
  }, [playlist.id]) // Only run when playlist ID changes

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

  const handleSortClick = () => {
    setSortState(sortState === "asc" ? "desc" : "asc")
  }

  const getSortedTracks = () => {
    if (sortState === "asc") {
      return [...playlist.tracks]
    } else {
      return [...playlist.tracks].reverse()
    }
  }

  const getTrackDetails = (trackId: number, playlistId: string) => {
    switch (playlistId) {
      case "1": // About
        switch (trackId) {
          case 1:
            return [
              "Bachelor of Science (BS), Computer Science at UC Santa Barbara",
              "Expected Graduation: June 2026 with GPA: 3.96",
              "Relevant Coursework: Data Structures and Algorithms, Application Programming, Machine Learning",
              "Located in Santa Barbara, CA during studies",
              "Strong foundation in computer science fundamentals and practical application",
            ]
          case 2:
            return [
              "Engineering Honors Program participant",
              "Dean's List All Quarters (6x consecutive)",
              "Promise Scholar recognition",
              "Consistent academic excellence with 3.96 GPA",
              "Demonstrated commitment to high-quality work and continuous improvement",
            ]
          case 3:
            return [
              "Languages: Python, C++, Go (Golang), JavaScript, TypeScript, Java, SQL, C, R, HTML, CSS",
              "Frameworks: React.js, React Native, SwiftUI, Hugging Face, PyTorch, Express, Tailwind, Spring Boot, OpenTelemetry",
              "Tools: Git, Docker, Firebase, Maven, Drupal, PowerBI, Node.js, AWS, Ogen, Expo, Hoppscotch, MongoDB, PostgreSQL",
              "Full-stack development capabilities across multiple technology stacks",
              "Experience with both frontend and backend technologies, databases, and cloud platforms",
            ]
          case 4:
            return [
              "Based in San Francisco, CA",
              "Phone: (415) 794-2214",
              "Email: briansen142@gmail.com",
              "LinkedIn and GitHub profiles available",
              "Open to software engineering opportunities and collaborations",
            ]
          case 5:
            return [
              "Specializing in Machine Learning and Artificial Intelligence",
              "Research experience in Gen AI and LLM watermarking",
              "Focus on practical applications of AI in real-world problems",
              "Committed to continuous learning and staying current with technology trends",
              "Passionate about creating efficient, scalable, and impactful software solutions",
            ]
          default:
            return ["No additional details available"]
        }
      case "2": // Experience
        const experienceDetails: { [key: number]: string[] } = {
          1: [
            "Unified USPS barcode generation across 4 high-traffic services by migrating to enterprise API",
            "Saved 20% in management costs through shared infrastructure and eliminated legacy architectures",
            "Delivered API Gateways with oTel tracing and Go middlewares for real-time logging and security",
            "Improved validation accuracy by 30% through enhanced security and performance measures",
            "Composed test suites with 90%+ coverage and feature flags for seamless integration",
            "Authored comprehensive technical documentation in Java, Go, and Python",
          ],
          2: [
            "Developed PyTorch NLP pipeline that auto-clustered 12,000+ IT chat transcripts into 15 support topics",
            "Achieved approximately 90% precision and deployed real-time dashboards",
            "Cut resolution times by 25% through data-driven insights and automation",
            "Automated 1800+ service audits in ServiceNow through Chrome Extension and Python scripts",
            "Reduced audit times by 75% while achieving 0% error rate handling 2,000+ monthly requests",
            "Led development of 2 UCSB IT websites using HTML, CSS, and Drupal CMS",
          ],
          3: [
            "Research focus on watermarking for Gen AI outputs (LLMs, Diffusion Models)",
            "Working on minimal detection errors, strong security guarantees, and adversarial robustness",
            "Implemented 5 distinct LLM Watermarking schemes using Hugging Face and PyTorch",
            "Identified vulnerabilities in existing watermarking approaches",
            "Contributing to cutting-edge research in AI security and authenticity verification",
            "Collaborating with Dr. Prabhanjan Ananth on theoretical and practical implementations",
          ],
        }
        return experienceDetails[trackId] || ["No additional details available"]
      case "3": // Projects
        switch (trackId) {
          case 1:
            return [
              "AI-powered tool to generate context-aware email responses in seconds",
              "Built with React frontend and Node.js/Express backend for API calls to various LLMs",
              "Extensive customization and fine-tuning options with engineered prompts",
              "Deployed on AWS utilizing EC2 and S3 for reliable hosting and dynamic scalability",
              "Achieved 99% uptime with robust cloud infrastructure",
              "Streamlines email communication with intelligent, contextual response generation",
            ]
          case 2:
            return [
              "Real-time, cross-platform (Web/iOS) ridesharing app using React Native and Expo",
              "Dynamic ride request/confirmation system with integrated driver dashboard",
              "Achieved 50% faster ride matching for students through optimized algorithms",
              "Integrated OAuth and Cloud Firestore for streamlined authentication and data management",
              "Boosted data management efficiency by 35% through Firebase integration",
              "Designed for university communities with focus on safety and convenience",
            ]
          case 3:
            return [
              "Digital diary application to track 100+ daily puzzle game activities",
              "Built with React.js, HTML, and CSS, optimized for mobile and desktop viewing",
              "Followed UI/UX principles to improve navigation efficiency",
              "Leveraged Firebase for OAuth Secure Login supporting 30+ users",
              "Personalized puzzle data tracking for 75+ different games",
              "Clean, intuitive interface designed for daily use and habit tracking",
            ]
          default:
            return ["No additional details available"]
        }
      default:
        return ["No additional details available"]
    }
  }

  const sortedTracks = getSortedTracks()

  // Get grid layout based on playlist type
  const getGridLayout = () => {
    switch (playlistId) {
      case "1": // About - remove role and clock columns
        return {
          header: (
            <>
              <div className="col-span-1"></div>
              <div className="col-span-11">Information</div>
            </>
          ),
          row: (track: any) => (
            <>
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

              <div className="col-span-11 flex items-center gap-3">
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
                  <div className="text-sm text-gray-400">{track.artist}</div>
                </div>
              </div>
            </>
          ),
        }
      case "2": // Experience - include role column, swap clock and location (clock on right edge)
        return {
          header: (
            <>
              <div className="col-span-1"></div>
              <div className="col-span-4">Organization</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-3 flex items-center justify-center">
                <button
                  onClick={handleSortClick}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Clock className="h-4 w-4" />
                  {sortState === "asc" && <ChevronDown className="h-3 w-3 text-green-500" />}
                  {sortState === "desc" && <ChevronUp className="h-3 w-3 text-green-500" />}
                </button>
              </div>
            </>
          ),
          row: (track: any) => (
            <>
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

              <div className="col-span-4 flex items-center gap-3">
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
                </div>
              </div>

              <div className="col-span-2 text-white flex items-center pr-4">{track.artist}</div>

              <div className="col-span-2 text-gray-400 flex items-center pl-4">
                <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">{(track as any).location}</div>
              </div>

              <div className="col-span-3 text-gray-400 flex items-center justify-center">
                <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis text-center">
                  {track.dateRange}
                </div>
              </div>
            </>
          ),
        }
      case "3": // Projects - remove role column
        return {
          header: (
            <>
              <div className="col-span-1"></div>
              <div className="col-span-6">Project</div>
              <div className="col-span-5 flex items-center justify-center">
                <button
                  onClick={handleSortClick}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Clock className="h-4 w-4" />
                  {sortState === "asc" && <ChevronDown className="h-3 w-3 text-green-500" />}
                  {sortState === "desc" && <ChevronUp className="h-3 w-3 text-green-500" />}
                </button>
              </div>
            </>
          ),
          row: (track: any) => (
            <>
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

              <div className="col-span-6 flex items-center gap-3">
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
                  <div className="text-sm text-gray-400">{track.artist}</div>
                </div>
              </div>

              <div className="col-span-5 text-gray-400 flex items-center justify-center">
                <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis text-center">
                  {track.dateRange}
                </div>
              </div>
            </>
          ),
        }
      default: // Default layout without role column
        return {
          header: (
            <>
              <div className="col-span-1"></div>
              <div className="col-span-6">Information</div>
              <div className="col-span-5 flex items-center justify-center">
                <button
                  onClick={handleSortClick}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Clock className="h-4 w-4" />
                  {sortState === "asc" && <ChevronDown className="h-3 w-3 text-green-500" />}
                  {sortState === "desc" && <ChevronUp className="h-3 w-3 text-green-500" />}
                </button>
              </div>
            </>
          ),
          row: (track: any) => (
            <>
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

              <div className="col-span-6 flex items-center gap-3">
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
                </div>
              </div>

              <div className="col-span-5 text-gray-400 flex items-center justify-center">
                <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis text-center">
                  {track.dateRange}
                </div>
              </div>
            </>
          ),
        }
    }
  }

  const gridLayout = getGridLayout()

  return (
    <div className="h-screen overflow-hidden text-white relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-red-900 to-red-800"></div>

      {/* Fade to Black Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 70%, black 85%)",
        }}
      ></div>

      <div className="relative z-10 h-full overflow-y-auto px-8 pt-8 pb-6">
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
              <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Brian Sen profile"
                  width={48}
                  height={48}
                  className="object-cover scale-150"
                  style={{
                    objectPosition: "center 10%",
                    transformOrigin: "center center",
                  }}
                />
              </div>
              <Link href="/" className="font-semibold hover:underline cursor-pointer">
                {playlist.author}
              </Link>
              <span className="text-gray-300">• {playlist.tracks.length} songs</span>
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
        </div>

        {/* Track List Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-700 mb-4">
          {gridLayout.header}
        </div>

        {/* Track List */}
        <div className="space-y-1">
          {sortedTracks.map((track, index) => (
            <div key={track.id} className="rounded-md overflow-hidden">
              <div className="grid grid-cols-12 gap-4 px-4 py-2 hover:bg-white/10 group cursor-pointer">
                {gridLayout.row(track)}
              </div>

              {/* Accordion Details Section */}
              {expandedTracks.has(track.id) && (
                <div className="px-4 pb-4 bg-white/5 border-t border-gray-700 animate-in slide-in-from-top-2 duration-300">
                  <div className="pt-4 text-sm text-gray-300">
                    <h4 className="text-white font-medium mb-3">Details</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      {getTrackDetails(track.id, playlistId).map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
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
