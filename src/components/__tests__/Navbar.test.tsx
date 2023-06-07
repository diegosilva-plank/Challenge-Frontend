import '@testing-library/jest-dom/extend-expect'
import { test, expect } from 'jest-without-globals'
import { cleanup, render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../Navbar'

afterEach(() => {
    cleanup()
})

test('should contain pages', () => {
    render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
})