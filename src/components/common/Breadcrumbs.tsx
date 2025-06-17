import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbsProps {
  items: {
    name: string
    href: string
  }[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-4">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" aria-hidden="true" />
              )}
              {index === items.length - 1 ? (
                <span className="text-sm font-medium text-gray-700" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}