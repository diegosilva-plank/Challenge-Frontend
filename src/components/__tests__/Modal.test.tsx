import '@testing-library/jest-dom/extend-expect'
import { expect, test } from 'jest-without-globals'
import { cleanup, render, screen  } from "@testing-library/react"
import { Modal } from '../Modal'

afterEach(() => {
    cleanup()
})

test('should contain children', () => {
    render(<Modal close={() => undefined}><h1>Hello</h1></Modal>)
    const modalElement = screen.getByTestId('modal-div')
    expect(modalElement).toBeInTheDocument()
    expect(modalElement).toContainHTML('h1')
})