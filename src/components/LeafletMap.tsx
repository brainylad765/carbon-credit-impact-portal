"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

interface LeafletMapProps {
  center?: [number, number]
  zoom?: number
  markers?: Array<{
    position: [number, number]
    title: string
    description?: string
  }>
  className?: string
  onMarkerClick?: (index: number) => void
}

export default function LeafletMap({
  center = [20, 0],
  zoom = 2,
  markers = [],
  className = "h-full w-full",
  onMarkerClick,
}: LeafletMapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    // Initialize map
    const map = L.map(containerRef.current).setView(center, zoom)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current) return

    mapRef.current.setView(center, zoom)
  }, [center, zoom])

  useEffect(() => {
    if (!mapRef.current) return

    // Clear existing markers
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current?.removeLayer(layer)
      }
    })

    // Add new markers
    markers.forEach((marker, index) => {
      const leafletMarker = L.marker(marker.position)
        .addTo(mapRef.current!)
        .bindPopup(`<b>${marker.title}</b>${marker.description ? `<br>${marker.description}` : ""}`)

      if (onMarkerClick) {
        leafletMarker.on("click", () => onMarkerClick(index))
      }
    })
  }, [markers, onMarkerClick])

  return <div ref={containerRef} className={className} />
}