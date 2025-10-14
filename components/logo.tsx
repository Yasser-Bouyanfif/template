import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-left font-semibold tracking-[0.3em] text-[0.85rem] uppercase text-foreground/80",
        className,
      )}
    >
      <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-[#d6c4b0] bg-[#f9f3eb] shadow-sm">
        <Image
          src="/branding/chajaratmariam-mark.svg"
          alt="Emblème Chajaratmariam"
          width={40}
          height={40}
          priority
        />
      </span>
      <span className="font-serif text-sm tracking-[0.4em] text-foreground">
        CHAJARATMARIAM
      </span>
    </div>
  );
};
