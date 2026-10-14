/** Fixed ambient backdrop: soft aurora blobs, a masked grid and film grain. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-fade-y" />
      <div className="absolute -top-[30%] left-1/2 h-[70vh] w-[90vw] max-w-5xl -translate-x-1/2">
        <div className="absolute top-0 left-[10%] size-[45vw] max-h-[560px] max-w-[560px] animate-aurora rounded-full bg-accent-from/20 blur-[120px] dark:bg-accent-from/15" />
        <div className="absolute top-[10%] right-[5%] size-[40vw] max-h-[500px] max-w-[500px] animate-aurora rounded-full bg-accent-to/20 blur-[120px] [animation-delay:-9s] dark:bg-accent-to/12" />
      </div>
      <svg className="absolute inset-0 size-full opacity-[0.035] mix-blend-overlay dark:opacity-[0.06]">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}
