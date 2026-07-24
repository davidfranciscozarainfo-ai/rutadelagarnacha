'use client'

import { useState } from 'react'
import { Bookmark, BookmarkCheck } from 'lucide-react'

interface AddToTripButtonProps {
  label?: string
}

export function AddToTripButton({ label = 'Añadir a Mi viaje' }: AddToTripButtonProps) {
  const [added, setAdded] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setAdded((v) => !v)}
      className={`inline-flex items-center gap-2 border-2 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
        added
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground'
      }`}
      aria-pressed={added}
    >
      {added ? (
        <BookmarkCheck className="h-4 w-4" strokeWidth={1.75} />
      ) : (
        <Bookmark className="h-4 w-4" strokeWidth={1.75} />
      )}
      {added ? 'Añadido a Mi viaje' : label}
    </button>
  )
}
