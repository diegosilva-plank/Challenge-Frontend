import '@testing-library/jest-dom/extend-expect'
import { expect, test } from 'jest-without-globals'
import { cleanup, render, screen  } from "@testing-library/react"
import { Footer } from '../Footer'

afterEach(() => {
    cleanup()
})

test('should contain text and languages', () => {
    render(<Footer/>)
    expect(screen.getByText('© 2023 Rocket System, Inc.')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('Português')).toBeInTheDocument()
    expect(screen.getByText('日本語')).toBeInTheDocument()
})