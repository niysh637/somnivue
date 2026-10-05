import { LandingPage } from "./pages/LandingPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecordingPage } from "./pages/RecordingPage";


const router = createBrowserRouter([{
  path: '/',
  element: <LandingPage />,
  errorElement: <div>404 Not Found</div>
},
{path: '/record',
  element: <RecordingPage />
}]);

export default function App() {
  return (
    // <LandingPage />
    <RouterProvider router={router} />
  );
}