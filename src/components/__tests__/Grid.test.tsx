import '@testing-library/jest-dom/extend-expect'
import { expect, test } from 'jest-without-globals'
import { cleanup, render, screen  } from "@testing-library/react"
import { Grid } from '../Grid'

afterEach(() => {
    cleanup()
})

test('should contain children', () => {
    render(<Grid><h1>Hello</h1></Grid>)
    const gridElement = screen.getByTestId('grid-div')
    expect(gridElement).toBeInTheDocument()
    expect(gridElement).toContainHTML('h1')
})