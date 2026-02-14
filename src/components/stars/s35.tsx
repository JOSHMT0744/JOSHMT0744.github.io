export default function Star35({
  color,
  size,
  stroke,
  strokeWidth,
  pathClassName,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  color?: string
  size?: number
  stroke?: string
  pathClassName?: string
  strokeWidth?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path
        fill={color ?? "currentColor"}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={pathClassName}
        d="M60.575 5.095C81.665 28.37 118.24 28.37 139.235 5c-1.615 31.35 24.32 57.19 55.67 55.575-23.275 21.09-23.275 57.665.095 78.66-31.35-1.615-57.19 24.32-55.575 55.67-21.09-23.275-57.665-23.275-78.66.095 1.615-31.35-24.32-57.19-55.67-55.575C28.37 118.335 28.37 81.76 5 60.765c31.35 1.52 57.19-24.32 55.575-55.67"
      />
    </svg>
  )
}
