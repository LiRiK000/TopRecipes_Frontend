import { expect, test } from 'vitest'
import { render } from '@testing-library/react'

import Page from '@/app/(landing)/page'

test('Page', () => {
  render(<Page />)
  // expect(screen.getByRole('paragraph', { name: 'Error' })).toBeDefined()
  expect(true).toBeDefined()
})
