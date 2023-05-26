import { createBrowserRouter } from "react-router-dom";
import { Rockets } from "./routes/Rockets";
import { Index } from "./routes/Index";
import { Launches } from "./routes/Launches";
import { Crewmen } from "./routes/Crewmen";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: 'rockets',
        element: <Rockets />
    },
    {
        path: 'launches',
        element: <Launches />
    },
    {
        path: 'crewmen',
        element: <Crewmen />
    }
])