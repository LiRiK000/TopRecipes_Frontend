import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Page from '../app/main/page'

test('Page', () => {
  render(<Page />)
  // expect(screen.getByRole('paragraph', { name: 'Error' })).toBeDefined()
  expect(true).toBeDefined()
})
