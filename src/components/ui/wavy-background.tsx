"use client";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [animationId, setAnimationId] = useState<number>(0);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      n: number,
      nt: number
    ) => {
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5); // Adjust for height, currently at 50% of the container
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [noise, waveWidth, waveColors]
  );

  const render = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      nt: number
    ) => {
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(ctx, w, h, 5, nt);
      const id = requestAnimationFrame(() =>
        render(ctx, w, h, nt + getSpeed())
      );
      setAnimationId(id);
    },
    [drawWave, waveOpacity, backgroundFill, getSpeed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (ctx.canvas.width = window.innerWidth);
    const h = (ctx.canvas.height = window.innerHeight);
    const nt = 0; // Use `const` since nt isn't reassigned.

    ctx.filter = `blur(${blur}px)`;
    window.onresize = () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    render(ctx, w, h, nt);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [blur, waveOpacity, speed, colors, waveWidth, backgroundFill, render]);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Support for Safari
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
