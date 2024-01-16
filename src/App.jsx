// import NavbarSide from './components/Fragments/NavbarSide';
import Home from './pages/home';
import AudioPage from './pages/AudioPage';
import VideoPage from './pages/VideoPage';
import VisualPage from './pages/VisualPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const halaman = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/videoPage',
    element: <VideoPage />,
  },
  {
    path: '/visualPage',
    element: <VisualPage />,
  },
  {
    path: '/audioPage',
    element: <AudioPage />,
  },
]);

function App() {
  return (
    <>
      <main className="w-full overflow-x-hidden min-w-[768px]">
        <RouterProvider router={halaman} />
      </main>
    </>
  );
}

export default App;
