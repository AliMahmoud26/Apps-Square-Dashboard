import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Sidebar from './components/Sidebar.jsx';
import Nature from './Pages/Nature.jsx';
import Plants from './Pages/Plants.jsx';
import Forest from './Pages/Forest.jsx';
import Mountains from './Pages/Mountains.jsx';
import Birds from './Pages/Birds.jsx';
import Animals from './Pages/Animals.jsx';
import AllPhotos from './Pages/AllPhotos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <AllPhotos />,
      },
      {
        path: "nature",
        element: <Nature />
      },
      {
        path: "plants",
        element: <Plants />
      },
      {
        path: "forest",
        element: <Forest />
      },
      {
        path: "mountains",
        element: <Mountains />
      },
      {
        path: "birds",
        element: <Birds />
      },
      {
        path: "animals",
        element: <Animals />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
