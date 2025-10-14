"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

type ElementSize = { width: number; height: number };

type MeasuredElement<T extends HTMLElement> = [
  (element: T | null) => void,
  ElementSize,
];

const defaultSize: ElementSize = { width: 0, height: 0 };

function useElementSize<T extends HTMLElement>(): MeasuredElement<T> {
  const frame = useRef<number>();
  const observerRef = useRef<ResizeObserver | null>(null);
  const [size, setSize] = useState<ElementSize>(defaultSize);

  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = undefined;
    }
  }, []);

  const ref = useCallback(
    (node: T | null) => {
      cleanup();

      if (!node || typeof window === "undefined") {
        setSize(defaultSize);
        return;
      }

      const update = () => {
        const rect = node.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      };

      update();

      if (typeof ResizeObserver === "undefined") {
        return;
      }

      observerRef.current = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (!entry) {
          return;
        }

        if (frame.current) {
          cancelAnimationFrame(frame.current);
        }

        frame.current = requestAnimationFrame(() => {
          setSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        });
      });

      observerRef.current.observe(node);
    },
    [cleanup],
  );

  useEffect(() => () => cleanup(), [cleanup]);

  return [ref, size];
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useElementSize<HTMLDivElement>();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  const contentSize = useMemo(() => (direction === "horizontal" ? width : height) + gap, [direction, gap, width, height]);

  useEffect(() => {
    if (!contentSize) {
      return;
    }

    let controls: ReturnType<typeof animate> | undefined;

    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;
    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return () => {
      controls?.stop();
    };
  }, [
    contentSize,
    currentSpeed,
    direction,
    gap,
    isTransitioning,
    key,
    reverse,
    translation,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
