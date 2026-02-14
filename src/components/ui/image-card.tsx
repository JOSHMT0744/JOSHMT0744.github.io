import Image from "next/image"

interface ImageCardProps {
  caption: string
  imageUrl: string
}

export default function ImageCard({ caption, imageUrl }: ImageCardProps) {
  return (
    <figure className="flex max-w-full shrink-0 flex-col border-2 border-border bg-secondary-background p-2 shadow-[var(--shadow)] w400:min-w-0">
      <div className="relative aspect-square w-full min-w-[160px] overflow-hidden sm:min-w-[200px]">
        <Image
          src={imageUrl}
          alt={caption}
          fill
          className="object-cover"
          sizes="(max-width: 400px) 160px, (max-width: 640px) 200px, 240px"
        />
      </div>
      <figcaption className="mt-2 text-center text-sm font-base">
        {caption}
      </figcaption>
    </figure>
  )
}
