import { createBrowserRouter } from 'react-router-dom'
import { Rockets } from './routes/Rockets'
import { Home } from './routes/Home'
import { Launches } from './routes/Launches'
import { Crewmen } from './routes/Crewmen'
import { Crews } from './routes/Crews'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'rockets',
    element: <Rockets />,
  },
  {
    path: 'launches',
    element: <Launches />,
  },
  {
    path: 'crewmen',
    element: <Crewmen />,
  },
  {
    path: 'crews',
    element: <Crews />,
  },
])
