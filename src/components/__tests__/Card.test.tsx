import '@testing-library/jest-dom/extend-expect'
import { expect, test } from 'jest-without-globals'
import { cleanup, render, screen  } from "@testing-library/react"
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