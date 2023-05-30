import { PropsWithChildren } from 'react'
import '../css/card.css'

export const Card = ({ children }: PropsWithChildren) => (
  <div className="card">{children}</div>
)
