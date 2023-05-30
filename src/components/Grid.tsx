import '../css/grid.css'
import { PropsWithChildren } from 'react'

export const Grid = ({ children }: PropsWithChildren) => (
  <div className="grid">{children}</div>
)
