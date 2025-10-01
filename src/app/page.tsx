"use client"

import { TrendingUp, Users, DollarSign, Target, ArrowRight, MapPin, Upload, FileText } from "lucide-react"
import Sidebar from "@/components/Sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

const stats = [
  { label: "Total Projects", value: "8", icon: Target, change: "+12%", trend: "up" },
  { label: "Carbon Credits", value: "1.2M", icon: TrendingUp, change: "+8%", trend: "up" },
  { label: "Active Investors", value: "15,432", icon: Users, change: "+23%", trend: "up" },
  { label: "Market Value", value: "$850K", icon: DollarSign, change: "+15%", trend: "up" },
]

const featuredProjects = [
  {
    id: 1,
    title: "Western Ghats Forest Conservation",
    location: "Kerala, India",
    status: "Active",
    progress: 75,
    credits: "125,000",
    investors: 1245,
    value: "$2.5M",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Solar Farm Development",
    location: "Rajasthan, India",
    status: "Active",
    progress: 60,
    credits: "85,000",
    investors: 892,
    value: "$1.8M",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Wind Energy Initiative",
    location: "Tamil Nadu, India",
    status: "Active",
    progress: 90,
    credits: "200,000",
    investors: 2134,
    value: "$4.2M",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Mangrove Restoration",
    location: "Sundarbans, West Bengal, India",
    status: "Active",
    progress: 45,
    credits: "65,000",
    investors: 567,
    value: "$1.2M",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
  },
]

export default function Home() {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFiles(Array.from(e.dataTransfer.files))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFiles(Array.from(e.target.files))
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-20 transition-all duration-300">
        {/* Hero Section with Background */}
        <div 
          className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/WhatsApp-Image-2025-10-01-at-18.21.38_c8b05543-1759323115577.jpg')"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          
          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col justify-center min-h-[60vh]">
            <div className="flex items-center justify-between mb-8">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-white mb-4">
                  Welcome to Neeledger
                </h1>
                <p className="text-xl text-white/90">
                  Empowering climate action through transparent carbon credit verification and trading
                </p>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Target className="mr-2 h-5 w-5" />
                Start Investing
              </Button>
            </div>

            {/* Statistics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <stat.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-none">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="px-8 py-12 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Deploy Orthomosaic & Large Files</h2>
              <p className="text-slate-600">Upload and process your geospatial data for carbon credit verification</p>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div
                  className={`relative border-2 border-dashed rounded-xl p-12 transition-all ${
                    dragActive ? "border-blue-500 bg-blue-50" : "border-slate-300 bg-slate-50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="bg-blue-100 p-6 rounded-full mb-4">
                      <Upload className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Drag and drop your files here
                    </h3>
                    <p className="text-slate-600 mb-6">
                      or click to browse - Supports orthomosaic images, GeoTIFF, and large data files
                    </p>
                    <Input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".tif,.tiff,.geotiff,.jpg,.jpeg,.png,.zip"
                    />
                    <label htmlFor="file-upload">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <span>
                          <FileText className="mr-2 h-5 w-5" />
                          Select Files
                        </span>
                      </Button>
                    </label>
                  </div>

                  {selectedFiles.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Selected Files:</h4>
                      <div className="space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-blue-600" />
                              <span className="text-sm font-medium text-slate-900">{file.name}</span>
                            </div>
                            <span className="text-xs text-slate-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                        <Upload className="mr-2 h-5 w-5" />
                        Upload {selectedFiles.length} {selectedFiles.length === 1 ? 'File' : 'Files'}
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="px-8 py-12 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Featured Projects</h2>
              <p className="text-slate-600">High-impact environmental initiatives</p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white border-none">
                    {project.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600">Progress</span>
                        <span className="font-semibold text-slate-900">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs text-slate-600">Credits</div>
                        <div className="text-sm font-semibold text-slate-900">{project.credits}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600">Investors</div>
                        <div className="text-sm font-semibold text-slate-900">{project.investors}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600">Value</div>
                        <div className="text-sm font-semibold text-slate-900">{project.value}</div>
                      </div>
                    </div>

                    <Link href={`/projects/${project.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}