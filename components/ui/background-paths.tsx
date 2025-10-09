"use client"

import { useEffect, useRef } from "react"

export function BackgroundPaths() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create flowing paths
    const paths: Array<{
      points: Array<{ x: number; y: number }>
      offset: number
      speed: number
      opacity: number
    }> = []

    // Generate random paths
    for (let i = 0; i < 5; i++) {
      const points: Array<{ x: number; y: number }> = []
      const startX = Math.random() * canvas.width
      const startY = Math.random() * canvas.height

      for (let j = 0; j < 20; j++) {
        points.push({
          x: startX + Math.sin(j * 0.5) * 100 + j * 30,
          y: startY + Math.cos(j * 0.3) * 80 + j * 20,
        })
      }

      paths.push({
        points,
        offset: Math.random() * 100,
        speed: 0.2 + Math.random() * 0.3,
        opacity: 0.1 + Math.random() * 0.15,
      })
    }

    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      paths.forEach((path) => {
        path.offset += path.speed

        ctx.beginPath()
        ctx.strokeStyle = `rgba(59, 130, 246, ${path.opacity})`
        ctx.lineWidth = 2
        ctx.lineCap = "round"

        path.points.forEach((point, index) => {
          const x = ((point.x + path.offset) % (canvas.width + 200)) - 100
          const y = point.y + Math.sin(path.offset * 0.01 + index) * 10

          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })

        ctx.stroke()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ opacity: 0.4 }} />
}
