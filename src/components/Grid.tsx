import '../css/grid.css'
import { PropsWithChildren } from 'react'

export const Grid = ({ children }: PropsWithChildren) => (
  <div data-testid='grid-div' className="grid">{children}</div>
)
