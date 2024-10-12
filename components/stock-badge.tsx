import { CheckCircle, XCircle } from "lucide-react"

interface StockBadgeProps {
  inStock: boolean
  className?: string
}

export default function StockBadge({ inStock, className = "" }: StockBadgeProps) {
  const badgeClass = inStock
    ? "bg-green-100 text-green-800 border-green-200"
    : "bg-red-100 text-red-800 border-red-200"

  return (
    <div
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeClass} ${className}`}
      role="status"
    >
      {inStock ? (
        <>
          <CheckCircle className="w-4 h-4 mr-1.5" />
          In Stock
        </>
      ) : (
        <>
          <XCircle className="w-4 h-4 mr-1.5" />
          Out of Stock
        </>
      )}
    </div>
  )
}
