import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        Koslife
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Selamaat datang!!, di koslife, website yang bisa membantumu untuk mengatur keuangan.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
        Gass CS
        </Link>
      </div>
    </div>
  );
}