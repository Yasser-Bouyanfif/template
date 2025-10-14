import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export const Logo = ({ className, showWordmark = true }: LogoProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-serif text-lg tracking-[0.3em] text-primary",
        className,
      )}
    >
      <Image
        src="/chajaratmariam-logo.svg"
        alt="Chajaratmariam"
        width={40}
        height={40}
        className="size-9 drop-shadow-sm"
        priority
      />
      {showWordmark && (
        <span className="uppercase text-foreground/80">CHAJARATMARIAM</span>
      )}
    </span>
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Logo className={className} showWordmark={false} />
  );
};
