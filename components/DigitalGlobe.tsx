"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; z: number; phase: number };

const POINT_COUNT = 720;

function createPoints() {
  const points: Point[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < POINT_COUNT; index += 1) {
    const y = 1 - (index / (POINT_COUNT - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = goldenAngle * index;

    points.push({
      x: Math.cos(angle) * radius,
      y,
      z: Math.sin(angle) * radius,
      phase: (index * 0.618) % (Math.PI * 2),
    });
  }

  return points;
}

export default function DigitalGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const points = createPoints();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const size = Math.min(width, height) * 0.38;
      const centerX = width / 2;
      const centerY = height / 2;
      const rotation = frame * 0.004;
      const cosine = Math.cos(rotation);
      const sine = Math.sin(rotation);

      context.beginPath();
      context.arc(centerX, centerY, size, 0, Math.PI * 2);
      context.strokeStyle = "rgba(223, 40, 31, 0.24)";
      context.lineWidth = 1;
      context.stroke();

      for (const point of points) {
        const rotatedX = point.x * cosine - point.z * sine;
        const rotatedZ = point.x * sine + point.z * cosine;
        const depth = (rotatedZ + 1) / 2;
        const pulse = 1 + Math.sin(frame * 0.035 + point.phase) * 0.08;
        const dotSize = (0.65 + depth * 1.25) * pulse;

        context.beginPath();
        context.arc(centerX + rotatedX * size, centerY + point.y * size, dotSize, 0, Math.PI * 2);
        context.fillStyle = `rgba(232, 25, 30, ${0.18 + depth * 0.82})`;
        context.fill();
      }

      if (!prefersReducedMotion) {
        frame += 1;
        animationId = window.requestAnimationFrame(draw);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    draw();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="digital-globe-canvas" aria-hidden="true" />;
}
