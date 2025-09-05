"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Clock, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

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
          title: "About Me",
          author: "Brian Sen",
          type: "Public Playlist",
          image: "/images/aboutme_cover.jpg",
          description: "Personal background, education, and core information.",
          tracks: [
            {
              id: 1,
              title: "Education",
              artist: "University of California - Santa Barbara",
              album: "Computer Science Student",
              duration: "4:00",
              dateRange: "Expected June 2027",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ucsantabarbara-MTfmhHErRgUWR30aY1fyKSQJDv1PeE.png",
            },
            {
              id: 2,
              title: "Awards & Scholarships",
              artist: "Academic Excellence",
              album: "Engineering Honors Program",
              duration: "3:30",
              dateRange: "GPA: 3.95",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scholarship-7llfVzJBUC1NWxoa4SwizwbjDRGJ6x.png",
            },
            {
              id: 3,
              title: "Skills and Career Focus",
              artist: "Languages, Tools, Interests",
              album: "Software Engineer",
              duration: "2:45",
              dateRange: "Multiple Languages",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coding-VWL8fjBV1aCGpOAYYqKKCshXM90WoF.png",
            },
            {
              id: 4,
              title: "Contact Information",
              artist: "San Francisco, CA",
              album: "Available for Opportunities",
              duration: "3:15",
              dateRange: "(415) 794-2214",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/email_logo.jpg-as2EZJYnwfMtFvfhVLSe4Y1kGtPqOD.jpeg",
            },
          ],
        }
      case "2":
        return {
          id: id,
          title: "Experience",
          author: "Brian Sen",
          type: "Public Playlist",
          image: "/images/experience_cover.jpg",
          description: "Professional work and research experience.",
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
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capital_one_logo-jzGIztVS8KiBrjHcdT9xdXlk1uoLDK.jpeg",
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
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ucsblogo-Fjv6tjAhCEK3pSqUfocLLSvyZ69sT2.png",
            },
            {
              id: 3,
              title: "UCSB College of Engineering",
              artist: "Gen AI Researcher",
              album: "Academic Research",
              duration: "6:45",
              dateRange: "Sep 2024 - June 2025",
              location: "Santa Barbara, CA",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/research_logo-iAjOBdxS5b3dLmpTi3Ut2Jgk5v1cjv.png",
            },
            {
              id: 4,
              title: "Each1Teach1",
              artist: "Youth Coding Instructor",
              album: "Education Technology",
              duration: "4:00",
              dateRange: "June 2023 - Sep 2023",
              location: "San Francisco, CA",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/each1teach1-ukJNLsWtodjZb9sa4avAbpM7jftMHO.png",
            },
          ],
        }
      case "3":
        return {
          id: id,
          title: "Projects",
          author: "Brian Sen",
          type: "Public Playlist",
          image: "/images/projects_cover.jpg",
          description: "Passion projects showcasing full-stack development and emerging technologies.",
          tracks: [
            {
              id: 1,
              title: "EasyReply",
              artist: "React, Node, Express, AWS, REST API, TailwindCSS",
              album: "AI-Powered Email Tool",
              duration: "15:30",
              dateRange: "March 2025",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_4z7ww54z7ww54z7w-MqeAU3ZOUF2xD4gEdOuoYDKekR9amb.png",
            },
            {
              id: 2,
              title: "HopIn Ridesharing App",
              artist: "React Native, Firebase, Expo Go, Git",
              album: "Mobile Application",
              duration: "8:45",
              dateRange: "January 2025",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HopIn_logo-PKeerufeL2sJ2J0FUTkDmqjzgKN7xo.png",
            },
            {
              id: 3,
              title: "PuzzleDiary",
              artist: "React.js, Firebase, OAuth, Cloud Firestore",
              album: "Web Application",
              duration: "20:15",
              dateRange: "Summer 2024",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/puzzlediary_logo-removebg-preview-GMTUyJpYXGZUipaEYYqy9ckfMKSO5R.png",
            },
            {
              id: 4,
              title: "AnimeWiki",
              artist: "React.js, Jikan REST API, React Router",
              album: "Web Application",
              duration: "12:30",
              dateRange: "January 2024",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/animewiki_logo-YnG0uCeR731HdanIbzbyc6y1b27HYn.png",
            },
            {
              id: 5,
              title: "ThreeWords",
              artist: "HTML, CSS, Javascript",
              album: "Word Puzzle Game",
              duration: "6:15",
              dateRange: "January 2022",
              explicit: false,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/threewords_logo-Swhhpkp04lwuByiv4HwmndzU9ViI0R.png",
            },
          ],
        }
      default:
        return {
          id: id,
          title: "About Me",
          author: "Brian Sen",
          type: "Public Playlist",
          image: "/images/aboutme_cover.jpg",
          description: "Personal background, education, and core information.",
          tracks: [],
        }
    }
  }

  const getProjectUrl = (trackId: number) => {
    switch (trackId) {
      case 1: // EasyReply
        return "https://easy-reply.vercel.app/"
      case 2: // HopIn
        return "https://github.com/jonathanzhang2027/HopIn"
      case 3: // PuzzleDiary
        return "https://github.com/bsen1/PuzzleDiary"
      case 4: // AnimeWiki
        return "https://github.com/bsen1/AnimeWiki"
      case 5: // ThreeWords
        return "https://github.com/bsen1/threeWords"
      default:
        return "https://github.com/bsen1"
    }
  }

  const playlist = getPlaylistData(playlistId)
  const [expandedTracks, setExpandedTracks] = useState<Set<number>>(new Set())
  const [playingTracks, setPlayingTracks] = useState<Set<number>>(new Set())
  const [sortState, setSortState] = useState<"asc" | "desc">("asc") // Default to "asc" (down arrow)

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
      case "1": // About Me
        switch (trackId) {
          case 1:
            return [
              "Double Major in the College of Engineering at UC Santa Barbara",
              "Bachelor of Science (BS), Computer Science",
              "Bachelor of Science (BS), Statistics & Data Science",
              "GPA: 3.95/4.00",
            ]
          case 2:
            return [
              "One of 30 Undergraduates admitted to the Early Research Scholars Program",
              "Member of UCSB's Engineering Honors Program",
              "Achieved Dean's Honor List every quarter (6x Consecutive)",
              "Awarded Promise Scholar Recognition",
            ]
          case 3:
            return [
              "Languages: Python, Java, C++, Go (Golang), Javascript, SQL, R",
              "Frameworks: React, SwiftUI, Node, Flask, PyTorch, Express, Java Spring Boot",
              "Tools: Git, Docker, AWS EC2 & S3, Jenkins, Jira, Firebase, Maven, Postman, MongoDB, PostgresQL",
              "Interests: Backend and Fullstack Development, Software Engineering, Machine Learning, Infrastructure Engineering, Automation with Artificial Intelligence",
            ]
          case 4:
            return [
              "Based in San Francisco, CA",
              "Email: briansen142@gmail.com",
              <span key="linkedin">
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/briansen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  linkedin.com/in/briansen
                </a>
              </span>,
              <span key="github">
                GitHub:{" "}
                <a
                  href="https://github.com/bsen1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  github.com/bsen1
                </a>
              </span>,
              "Always open to connect and have interesting chats, just send a message!",
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
          4: [
            "Mentored 40+ youth aged 12-16 in project development and coding fundamentals using Scratch, Python, and JavaScript",
            "Resulted in 50+ individual projects completed by students",
            "Facilitated 15 projects presented at local coding showcases",
            "Developed curriculum and teaching materials for beginner programming concepts",
            "Fostered collaborative learning environment and encouraged creative problem-solving",
            "Provided one-on-one mentorship to help students overcome coding challenges",
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
          case 4:
            return [
              "Integrated the Jikan REST API to fetch and display anime details of over 30,000 anime titles and descriptions",
              "Utilized React Router, React.js, Javascript, HTML, and CSS to design an anime info and display website",
              "Followed UI/UX principles to improve navigation efficiency",
              "Enhanced user experience by implementing lazy loading for images",
              "Resulted in a 40% decrease in page load time through optimization",
              "Comprehensive database of anime information with search and filtering capabilities",
            ]
          case 5:
            return [
              "Original Word Puzzle Game made with CSS, HTML, and Javascript",
              "Link sharing system between players to compete against each other",
              "Intuitive and seamless interface design",
              "Custom game logic and scoring system",
              "Responsive design for cross-platform compatibility",
              "Interactive gameplay with real-time feedback and animations",
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
      case "1": // About Me - remove role and clock columns
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
                <div className="min-w-0 flex-1">
                  <div
                    className={`font-medium ${playingTracks.has(track.id) ? "text-green-500" : "text-white"} truncate`}
                  >
                    {track.title}
                  </div>
                  <div className="text-sm text-gray-400 truncate">{track.artist}</div>
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
              <div className="col-span-4 hidden sm:block">Organization</div>
              <div className="col-span-2 hidden md:block">Role</div>
              <div className="col-span-2 hidden lg:block">Location</div>
              <div className="col-span-3 hidden sm:flex items-center justify-center">
                <button
                  onClick={handleSortClick}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Clock className="h-4 w-4" />
                  {sortState === "asc" && <ChevronDown className="h-3 w-3 text-green-500" />}
                  {sortState === "desc" && <ChevronUp className="h-3 w-3 text-green-500" />}
                </button>
              </div>
              <div className="col-span-11 sm:hidden">Experience</div>
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

              {/* Mobile Layout */}
              <div className="col-span-11 sm:hidden flex items-center gap-3">
                <Image
                  src={track.image || "/placeholder.svg"}
                  alt={track.title}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div className="min-w-0 flex-1">
                  <div
                    className={`font-medium ${playingTracks.has(track.id) ? "text-green-500" : "text-white"} truncate`}
                  >
                    {track.title}
                  </div>
                  <div className="text-sm text-gray-400 truncate">{track.artist}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {(track as any).location} • {track.dateRange}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="col-span-4 hidden sm:flex items-center gap-3">
                <Image
                  src={track.image || "/placeholder.svg"}
                  alt={track.title}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div className="min-w-0 flex-1">
                  <div
                    className={`font-medium ${playingTracks.has(track.id) ? "text-green-500" : "text-white"} truncate`}
                  >
                    {track.title}
                  </div>
                </div>
              </div>

              <div className="col-span-2 text-white hidden md:flex items-center pr-4">
                <div className="truncate">{track.artist}</div>
              </div>

              <div className="col-span-2 text-gray-400 hidden lg:flex items-center pr-4">
                <div className="text-sm truncate">{(track as any).location}</div>
              </div>

              <div className="col-span-3 text-gray-400 hidden sm:flex items-center justify-center">
                <div className="text-sm truncate text-center">{track.dateRange}</div>
              </div>
            </>
          ),
        }
      case "3": // Projects - remove role column
        return {
          header: (
            <>
              <div className="col-span-1"></div>
              <div className="col-span-6 hidden sm:block">Project</div>
              <div className="col-span-5 hidden sm:flex items-center justify-center">
                <button
                  onClick={handleSortClick}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Clock className="h-4 w-4" />
                  {sortState === "asc" && <ChevronDown className="h-3 w-3 text-green-500" />}
                  {sortState === "desc" && <ChevronUp className="h-3 w-3 text-green-500" />}
                </button>
              </div>
              <div className="col-span-11 sm:hidden">Project</div>
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

              {/* Mobile Layout */}
              <div className="col-span-11 sm:hidden flex items-center gap-3">
                <a
                  href={getProjectUrl(track.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={track.image || "/placeholder.svg"}
                    alt={track.title}
                    width={40}
                    height={40}
                    className="rounded cursor-pointer"
                  />
                </a>
                <div className="min-w-0 flex-1">
                  <a
                    href={getProjectUrl(track.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div
                      className={`font-medium ${playingTracks.has(track.id) ? "text-green-500" : "text-white"} truncate cursor-pointer hover:text-green-400 transition-colors`}
                    >
                      {track.title}
                    </div>
                  </a>
                  <div className="text-sm text-gray-400 truncate">{track.artist}</div>
                  <div className="text-xs text-gray-500">{track.dateRange}</div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="col-span-6 hidden sm:flex items-center gap-3">
                <a
                  href={getProjectUrl(track.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={track.image || "/placeholder.svg"}
                    alt={track.title}
                    width={40}
                    height={40}
                    className="rounded cursor-pointer"
                  />
                </a>
                <div className="min-w-0 flex-1">
                  <a
                    href={getProjectUrl(track.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div
                      className={`font-medium ${playingTracks.has(track.id) ? "text-green-500" : "text-white"} truncate cursor-pointer hover:text-green-400 transition-colors`}
                    >
                      {track.title}
                    </div>
                  </a>
                  <div className="text-sm text-gray-400 truncate">{track.artist}</div>
                </div>
              </div>

              <div className="col-span-5 text-gray-400 hidden sm:flex items-center justify-center">
                <div className="text-sm truncate text-center">{track.dateRange}</div>
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
                <div className="min-w-0 flex-1">
                  <div
                    className={`font-medium ${playingTracks.has(track.id) ? "text-green-500" : "text-white"} truncate`}
                  >
                    {track.title}
                  </div>
                </div>
              </div>

              <div className="col-span-5 text-gray-400 flex items-center justify-center">
                <div className="text-sm truncate text-center">{track.dateRange}</div>
              </div>
            </>
          ),
        }
    }
  }

  const gridLayout = getGridLayout()

  return (
    <div className="h-screen overflow-hidden text-white relative">
      {/* Gradient Background - Fixed */}
      <div className="fixed inset-0 bg-gradient-to-b from-orange-900 via-red-900 to-red-800"></div>

      {/* Fade to Black Overlay - Fixed */}
      <div
        className="fixed inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 70%, black 85%)",
        }}
      ></div>

      <div className="relative z-10 h-full overflow-y-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 sm:mb-6">
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
          Back to Profile
        </Link>

        {/* Playlist Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="relative flex-shrink-0">
            <Image
              src={playlist.image || "/placeholder.svg"}
              alt={playlist.title}
              width={250}
              height={250}
              className="rounded-lg shadow-2xl w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-medium mb-2">{playlist.type}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-3 sm:mb-4 tracking-tight">
              {playlist.title}
            </h1>
            <p className="text-sm text-gray-300 mb-4 sm:mb-6 line-clamp-2 sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis max-w-2xl">
              {playlist.description}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Brian Sen profile"
                  width={48}
                  height={48}
                  className="object-cover scale-200"
                  style={{
                    objectPosition: "center 10%",
                    transformOrigin: "center center",
                  }}
                />
              </div>
              <Link href="/" className="font-semibold hover:underline cursor-pointer text-sm sm:text-base">
                {playlist.author}
              </Link>
              <span className="text-gray-300 text-sm sm:text-base">• {playlist.tracks.length} songs</span>
            </div>
          </div>
        </div>

        {/* Track List Header */}
        <div className="grid grid-cols-12 gap-2 sm:gap-4 px-2 sm:px-4 py-2 text-sm text-gray-400 border-b border-gray-700 mb-4">
          {gridLayout.header}
        </div>

        {/* Track List */}
        <div className="space-y-1">
          {sortedTracks.map((track, index) => (
            <div key={track.id} className="rounded-md overflow-hidden">
              <div className="grid grid-cols-12 gap-2 sm:gap-4 px-2 sm:px-4 py-2 hover:bg-white/10 group cursor-pointer">
                {gridLayout.row(track)}
              </div>

              {/* Accordion Details Section */}
              {expandedTracks.has(track.id) && (
                <div className="px-2 sm:px-4 pb-4 bg-white/5 border-t border-gray-700 animate-in slide-in-from-top-2 duration-300">
                  <div className="pt-4 text-sm text-gray-300">
                    {playlistId === "3" ? (
                      <h4 className="text-white font-medium mb-3">
                        <a
                          href={getProjectUrl(track.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-green-400 transition-colors"
                        >
                          GitHub
                        </a>
                      </h4>
                    ) : (
                      <h4 className="text-white font-medium mb-3">Details</h4>
                    )}
                    <ul className="space-y-2 list-disc list-inside">
                      {getTrackDetails(track.id, playlistId).map((detail, index) => (
                        <li key={index} className="break-words">
                          {detail}
                        </li>
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
