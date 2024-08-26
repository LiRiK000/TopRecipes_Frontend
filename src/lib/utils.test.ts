import { describe, expect, it } from 'vitest'

import { cn } from './utils'

describe('cn function', () => {
  it('should merge class names correctly', () => {
    const result = cn('class1', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('should remove duplicate class names', () => {
    const result = cn('class1', 'class1')
    expect(result).toBe('class1')
  })

  it('should handle conditional class names', () => {
    const result = cn('class1', false && 'class2', 'class3')
    expect(result).toBe('class1 class3')
  })

  it('should handle undefined or null values', () => {
    const result = cn('class1', undefined, null, 'class2')
    expect(result).toBe('class1 class2')
  })

  it('should merge Tailwind utility classes correctly', () => {
    const result = cn('bg-red-500', 'bg-blue-500')
    expect(result).toBe('bg-blue-500')
  })

  it('should merge arrays of class names', () => {
    const result = cn(['class1', 'class2'], ['class3'])
    expect(result).toBe('class1 class2 class3')
  })

  it('should return an empty string when no classes are provided', () => {
    const result = cn()
    expect(result).toBe('')
  })
})
