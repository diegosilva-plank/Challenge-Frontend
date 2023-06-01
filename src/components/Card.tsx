import { PropsWithChildren } from 'react'
import '../css/card.css'

export const Card = ({ children }: PropsWithChildren) => (
  <div data-testid='card-div' className="card">{children}</div>
)
