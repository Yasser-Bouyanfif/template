import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export const Logo = ({ className, showTagline = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3 text-left", className)}>
      <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-[#d6c4b0] bg-[#f9f3eb] shadow-sm">
        <Image
          src="/logo.png"
          alt="Logo Chajaratmariam"
          width={40}
          height={40}
          priority
        />
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-sm tracking-[0.4em] text-foreground">
          CHAJARATMARIAM
        </span>
        {showTagline ? (
          <span className="text-xs font-medium tracking-[0.15em] text-foreground/70">
            Réveillez la vie dans l’eau
          </span>
        ) : null}
      </span>
    </div>
  );
};
