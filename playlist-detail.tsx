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
              title: "Background & Education",
              artist: "Computer Science Graduate",
              album: "Student",
              duration: "4:00",
              dateRange: "Aug 2019 - May 2023",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 2,
              title: "Technical Skills",
              artist: "Full Stack Development",
              album: "Developer",
              duration: "3:30",
              dateRange: "Jan 2020 - Present",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 3,
              title: "Personal Interests",
              artist: "Music & Technology",
              album: "Hobbyist",
              duration: "2:45",
              dateRange: "Ongoing",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 4,
              title: "Career Goals",
              artist: "Software Engineering",
              album: "Aspiring Engineer",
              duration: "3:15",
              dateRange: "Future",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 5,
              title: "Philosophy & Values",
              artist: "Continuous Learning",
              album: "Lifelong Learner",
              duration: "2:30",
              dateRange: "Always",
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
              title: "Interdimensional Corp",
              artist: "Senior Quantum Developer",
              album: "Time Traveler",
              duration: "12:00",
              dateRange: "Jun 2023 - May 2024",
              location: "San Francisco, CA",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 2,
              title: "CryptoMagic Inc",
              artist: "Blockchain Wizard",
              album: "Spell Caster",
              duration: "8:30",
              dateRange: "Jan 2023 - Dec 2023",
              location: "Austin, TX",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 3,
              title: "Robot Friends LLC",
              artist: "AI Whisperer",
              album: "Machine Translator",
              duration: "6:45",
              dateRange: "Sep 2022 - Mar 2023",
              location: "Seattle, WA",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 4,
              title: "Sky Computing Co",
              artist: "Cloud Shepherd",
              album: "Weather Controller",
              duration: "10:20",
              dateRange: "Apr 2022 - Aug 2022",
              location: "Denver, CO",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 5,
              title: "Ancient Bytes Museum",
              artist: "Data Archaeologist",
              album: "Digital Explorer",
              duration: "5:15",
              dateRange: "Nov 2021 - Feb 2022",
              location: "Boston, MA",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 6,
              title: "Pest Control Systems",
              artist: "Bug Exterminator",
              album: "Code Cleaner",
              duration: "7:30",
              dateRange: "Jul 2021 - Oct 2021",
              location: "Portland, OR",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 7,
              title: "Digital Canvas Studio",
              artist: "Pixel Artist",
              album: "Visual Magician",
              duration: "4:45",
              dateRange: "Mar 2021 - Jun 2021",
              location: "Los Angeles, CA",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 8,
              title: "Information Palace",
              artist: "Database Librarian",
              album: "Data Keeper",
              duration: "9:15",
              dateRange: "Oct 2020 - Feb 2021",
              location: "Chicago, IL",
              explicit: true,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 9,
              title: "Literary Programming Inc",
              artist: "Code Poet",
              album: "Syntax Songwriter",
              duration: "3:40",
              dateRange: "May 2020 - Sep 2020",
              location: "New York, NY",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 10,
              title: "Clean Code Custodial",
              artist: "Digital Janitor",
              album: "Maintenance Master",
              duration: "6:20",
              dateRange: "Jan 2020 - Apr 2020",
              location: "Miami, FL",
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
              title: "E-Commerce Platform",
              artist: "React, Node.js, MongoDB",
              album: "Full Stack",
              duration: "15:30",
              dateRange: "Mar 2024 - Jun 2024",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 2,
              title: "Task Management App",
              artist: "Vue.js, Firebase",
              album: "Frontend",
              duration: "8:45",
              dateRange: "Jan 2024 - Feb 2024",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 3,
              title: "Machine Learning Model",
              artist: "Python, TensorFlow",
              album: "AI/ML",
              duration: "20:15",
              dateRange: "Oct 2023 - Dec 2023",
              explicit: true,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 4,
              title: "Mobile Weather App",
              artist: "React Native, API Integration",
              album: "Mobile",
              duration: "6:30",
              dateRange: "Aug 2023 - Sep 2023",
              explicit: false,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 5,
              title: "Blockchain Voting System",
              artist: "Solidity, Web3.js",
              album: "Blockchain",
              duration: "25:00",
              dateRange: "May 2023 - Jul 2023",
              explicit: true,
              image: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 6,
              title: "Portfolio Website",
              artist: "Next.js, Tailwind CSS",
              album: "Frontend",
              duration: "4:20",
              dateRange: "Mar 2023 - Apr 2023",
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
              "Graduated with honors from Computer Science program",
              "Specialized in software engineering and algorithms",
              "Active in coding competitions and hackathons",
              "Strong foundation in mathematics and problem-solving",
              "Passionate about creating efficient, scalable solutions",
            ]
          case 2:
            return [
              "Proficient in JavaScript, Python, Java, and C++",
              "Experience with React, Vue.js, Node.js, and Express",
              "Database management with SQL and NoSQL systems",
              "Cloud platforms: AWS, Google Cloud, Azure",
              "DevOps tools: Docker, Kubernetes, CI/CD pipelines",
            ]
          case 3:
            return [
              "Avid music listener and playlist curator",
              "Enjoys hiking and outdoor photography",
              "Board game enthusiast and strategy game player",
              "Volunteer at local coding workshops for kids",
              "Always exploring new technologies and frameworks",
            ]
          case 4:
            return [
              "Seeking full-time software engineering position",
              "Interested in backend systems and architecture",
              "Goal to contribute to impactful, user-focused products",
              "Aspiring to mentor junior developers",
              "Long-term interest in technical leadership roles",
            ]
          case 5:
            return [
              "Believes in writing clean, maintainable code",
              "Values collaboration and knowledge sharing",
              "Committed to continuous learning and growth",
              "Advocates for inclusive and diverse tech teams",
              "Prioritizes user experience in all development work",
            ]
          default:
            return ["No additional details available"]
        }
      case "2": // Experience
        const experienceDetails: { [key: number]: string[] } = {
          1: [
            "Developed quantum algorithms for parallel universe debugging",
            "Managed temporal databases across multiple timelines",
            "Led a team of interdimensional developers",
            "Implemented blockchain solutions for multiverse transactions",
            "Achieved 99.9% uptime across all reality branches",
          ],
          2: [
            "Created smart contracts for magical spell transactions",
            "Built decentralized applications for wizard communities",
            "Optimized gas fees for potion brewing processes",
            "Integrated NFT marketplaces for enchanted items",
            "Developed cryptocurrency for fairy tale economies",
          ],
          3: [
            "Trained neural networks to understand robot emotions",
            "Built chatbots that could pass the Turing test backwards",
            "Implemented machine learning for predicting human behavior",
            "Created AI systems for automated coffee brewing",
            "Developed algorithms for translating binary to feelings",
          ],
          4: [
            "Managed cloud infrastructure for weather manipulation",
            "Built serverless functions for rainbow generation",
            "Implemented auto-scaling for storm systems",
            "Developed APIs for controlling wind patterns",
            "Created monitoring systems for cloud happiness levels",
          ],
          5: [
            "Excavated legacy databases from the digital stone age",
            "Restored corrupted data from ancient civilizations",
            "Catalogued prehistoric programming languages",
            "Discovered lost algorithms in digital ruins",
            "Preserved historical code for future generations",
          ],
          6: [
            "Eliminated critical bugs using advanced debugging spells",
            "Implemented automated testing for pest detection",
            "Created bug tracking systems with 100% accuracy",
            "Developed preventive measures against code infestations",
            "Trained junior exterminators in proper debugging techniques",
          ],
          7: [
            "Designed user interfaces with artistic flair",
            "Created pixel-perfect designs for mobile applications",
            "Developed interactive animations for web experiences",
            "Built responsive layouts that adapt to any screen size",
            "Collaborated with designers to bring visions to life",
          ],
          8: [
            "Organized massive datasets with library science precision",
            "Implemented indexing systems for rapid information retrieval",
            "Created backup strategies for critical data preservation",
            "Developed search algorithms for complex queries",
            "Maintained data integrity across multiple systems",
          ],
          9: [
            "Wrote elegant code that reads like beautiful poetry",
            "Created documentation that tells compelling stories",
            "Developed naming conventions based on literary themes",
            "Built applications with narrative-driven user flows",
            "Mentored developers in the art of expressive programming",
          ],
          10: [
            "Cleaned up messy codebases with meticulous attention",
            "Refactored legacy systems for improved maintainability",
            "Implemented coding standards across development teams",
            "Created automated tools for code quality enforcement",
            "Established best practices for clean architecture",
          ],
        }
        return experienceDetails[trackId] || ["No additional details available"]
      case "3": // Projects
        switch (trackId) {
          case 1:
            return [
              "Full-featured online store with user authentication",
              "Shopping cart, payment processing, and order management",
              "Admin dashboard for inventory and sales analytics",
              "Responsive design optimized for mobile and desktop",
              "Deployed on AWS with automated CI/CD pipeline",
            ]
          case 2:
            return [
              "Kanban-style task board with drag-and-drop functionality",
              "Real-time collaboration features using WebSockets",
              "User authentication and team management",
              "Progressive Web App with offline capabilities",
              "Clean, intuitive interface following Material Design",
            ]
          case 3:
            return [
              "Predictive model for customer behavior analysis",
              "Data preprocessing and feature engineering pipeline",
              "Model training, validation, and hyperparameter tuning",
              "REST API for model inference and predictions",
              "Comprehensive documentation and performance metrics",
            ]
          case 4:
            return [
              "Cross-platform weather app for iOS and Android",
              "Integration with multiple weather APIs for accuracy",
              "Location-based forecasts and severe weather alerts",
              "Beautiful animations and intuitive user interface",
              "Offline caching for previously viewed locations",
            ]
          case 5:
            return [
              "Decentralized voting system ensuring transparency",
              "Smart contracts written in Solidity for Ethereum",
              "Web interface for voter registration and ballot casting",
              "Cryptographic security and vote anonymity features",
              "Comprehensive testing suite and security audit",
            ]
          case 6:
            return [
              "Personal portfolio showcasing projects and skills",
              "Server-side rendering for optimal SEO performance",
              "Responsive design with smooth animations",
              "Contact form with email integration",
              "Blog section with markdown support and syntax highlighting",
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
              <div className="col-span-11">Organization</div>
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
                </div>
              </div>
            </>
          ),
        }
      case "2": // Experience - remove role column, swap clock and location (clock on right edge)
        return {
          header: (
            <>
              <div className="col-span-1"></div>
              <div className="col-span-6">Organization</div>
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

              <div className="col-span-2 text-gray-400 flex items-center">
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
      default: // Projects and others - keep original layout
        return {
          header: (
            <>
              <div className="col-span-1"></div>
              <div className="col-span-4">Organization</div>
              <div className="col-span-2">Role</div>
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

              <div className="col-span-2 text-gray-400 flex items-center">{track.album}</div>

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
