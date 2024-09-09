// main.jsx (or App.js, depending on how you're structuring your app)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Nature from './Pages/Nature';
import Plants from './Pages/Plants';
import Forest from './Pages/Forest';
import Mountains from './Pages/Mountains';
import Birds from './Pages/Birds';
import Animals from './Pages/Animals';
import AllPhotos from './Pages/AllPhotos';
import SignUp from './Pages/SignUp';
import { AuthProvider } from './protectedRoute/AuthProvider';
import ProtectedRoute from './protectedRoute/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Sidebar />
      </ProtectedRoute>
    ),
    children: [
      { 
        path: "/",
        element: <AllPhotos />
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
    ],
  },
  { 
    path: "/sign-up", 
    element: <SignUp /> 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
