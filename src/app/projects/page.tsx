"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import LeafletMap from "@/components/LeafletMap"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, TrendingUp, Users, Heart, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Western Ghats Forest Conservation",
    location: "Kerala, India",
    coordinates: [10.8505, 76.2711] as [number, number],
    status: "Active",
    progress: 75,
    credits: "125,000",
    investors: 1245,
    value: "$2.5M",
    description: "Large-scale conservation project protecting critical Western Ghats biodiversity hotspot and supporting local tribal communities.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Solar Farm Development",
    location: "Rajasthan, India",
    coordinates: [27.0238, 74.2179] as [number, number],
    status: "Active",
    progress: 60,
    credits: "85,000",
    investors: 892,
    value: "$1.8M",
    description: "State-of-the-art solar energy installation in the Thar Desert providing clean power to rural communities.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Wind Energy Initiative",
    location: "Tamil Nadu, India",
    coordinates: [11.1271, 78.6569] as [number, number],
    status: "Active",
    progress: 90,
    credits: "200,000",
    investors: 2134,
    value: "$4.2M",
    description: "Offshore and onshore wind farm generating renewable energy for South Indian grid.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Mangrove Restoration",
    location: "Sundarbans, West Bengal, India",
    coordinates: [21.9497, 88.9345] as [number, number],
    status: "Active",
    progress: 45,
    credits: "65,000",
    investors: 567,
    value: "$1.2M",
    description: "Coastal ecosystem restoration in the world's largest mangrove forest, protecting against erosion and supporting marine biodiversity.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const markers = filteredProjects.map(project => ({
    position: project.coordinates,
    title: project.title,
    description: project.location,
  }))

  const currentProject = selectedProject !== null ? projects.find(p => p.id === selectedProject) : null

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <main className="flex-1 ml-20 transition-all duration-300">
        <div className="h-screen flex flex-col">
          {/* Header */}
          <div className="p-6 border-b bg-white/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
                <p className="text-slate-600">Explore verified environmental projects across India</p>
              </div>
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Split Screen Layout */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Side - Map */}
            <div className="w-1/2 relative">
              <LeafletMap
                center={[20.5937, 78.9629]}
                zoom={5}
                markers={markers}
                onMarkerClick={(index) => setSelectedProject(filteredProjects[index].id)}
                className="h-full w-full"
              />
            </div>

            {/* Right Side - Project Details or List */}
            <div className="w-1/2 overflow-y-auto bg-white">
              {currentProject ? (
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <Badge className="bg-green-500 text-white border-none">
                      {currentProject.status}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedProject(null)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    {currentProject.title}
                  </h2>
                  <div className="flex items-center gap-2 text-slate-600 mb-6">
                    <MapPin className="h-4 w-4" />
                    <span>{currentProject.location}</span>
                  </div>

                  <p className="text-slate-700 mb-8 leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 font-medium">Project Progress</span>
                      <span className="font-bold text-slate-900">{currentProject.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all"
                        style={{ width: `${currentProject.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900">{currentProject.credits}</div>
                        <div className="text-sm text-slate-600">Carbon Credits</div>
                      </CardContent>
                    </Card>
                    <Card className="border-none shadow-md">
                      <CardContent className="p-4 text-center">
                        <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900">{currentProject.investors}</div>
                        <div className="text-sm text-slate-600">Investors</div>
                      </CardContent>
                    </Card>
                    <Card className="border-none shadow-md">
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900">{currentProject.value}</div>
                        <div className="text-sm text-slate-600">Total Value</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700" size="lg">
                      Invest Now
                    </Button>
                    <Button variant="outline" size="lg">
                      <Heart className="mr-2 h-5 w-5" />
                      Add to Watchlist
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">All Projects</h2>
                  <div className="space-y-4">
                    {filteredProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="cursor-pointer hover:shadow-lg transition-all border-none"
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-bold text-lg text-slate-900">{project.title}</h3>
                                <Badge className="bg-green-500 text-white border-none">
                                  {project.status}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
                                <MapPin className="h-3 w-3" />
                                <span>{project.location}</span>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <div>
                                  <span className="text-slate-600">Credits: </span>
                                  <span className="font-semibold text-slate-900">{project.credits}</span>
                                </div>
                                <div>
                                  <span className="text-slate-600">Investors: </span>
                                  <span className="font-semibold text-slate-900">{project.investors}</span>
                                </div>
                                <div>
                                  <span className="text-slate-600">Value: </span>
                                  <span className="font-semibold text-slate-900">{project.value}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}