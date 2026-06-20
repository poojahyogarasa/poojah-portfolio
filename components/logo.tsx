"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
    >
      {/* Logo Icon */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-12
          h-12
          rounded-full
          bg-cyan-500/10
          border
          border-cyan-400/30
          shadow-[0_0_20px_rgba(34,211,238,0.2)]
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
        "
      >
        <span
          className="
            text-xl
            font-black
            bg-gradient-to-r
            from-cyan-300
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          PY
        </span>
      </div>

      {/* Text */}
      <div className="leading-tight">
        <h1
          className="
            text-lg
            font-bold
            text-foreground
          "
        >
          Poojah
        </h1>

        <p
          className="
            text-xs
            text-cyan-400
            hidden
            sm:block
          "
        >
          Engineering Ideas Into Impact
        </p>
      </div>
    </Link>
  );
}