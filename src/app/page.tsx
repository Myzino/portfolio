
import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
<div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
  <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

  <Boxes />
  <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
   <Link href="https://github.com/Myzino"><Button>My Github Profile</Button></Link>
  </h1>
  <p className="text-center mt-2 text-neutral-300 relative z-20">
      So it has begun!, the Suffering!!!!
  </p>
</div>
  );
}
