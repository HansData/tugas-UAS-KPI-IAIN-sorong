// import NavbarSide from './components/Fragments/NavbarSide';
import Home from './pages/home';
import Theme from './pages/theme';
import EditData from './pages/editData';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const halaman = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/editData',
    element: <EditData />,
  },
  {
    path: '/theme',
    element: <Theme />,
  },
]);

function App() {
  return (
    <>
      <main className="w-screen h-screen flex min-w-[850px]">
        <RouterProvider router={halaman} />
      </main>
    </>
  );
}

export default App;
