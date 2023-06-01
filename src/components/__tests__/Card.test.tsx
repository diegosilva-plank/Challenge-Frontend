import '@testing-library/jest-dom'
import { cleanup, render, screen } from "@testing-library/react"
import { Card } from '../Card'

afterEach(() => {
    cleanup()
})

test('should contain children', () => {
    render(<Card><h1>Hello</h1></Card>)
    const cardElement = screen.getByTestId('card-div')
    expect(cardElement).toBeInTheDocument()
    expect(cardElement).toContainHTML('h1')
})