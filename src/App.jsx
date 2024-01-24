// import NavbarSide from './components/Fragments/NavbarSide';
import Home from './pages/home';
import AudioPage from './pages/audioPage';
import VisualPage from './pages/visualPage';
import VideoPage from './pages/pageVideo';
import Artikel from './pages/artikel';
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
  {
    path: '/artikelPage',
    element: <Artikel />,
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
