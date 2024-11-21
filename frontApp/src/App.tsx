import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import '../src/styles/app.scss';

import Error from '@pages/NotFound';
import Home from '@pages/Home';
import ListSpots from "@pages/ListSpots";
import Maps from '@pages/Maps';
import Media from '@pages/Media';
import NotFound from "@pages/NotFound/NotFound";
import Profile from '@pages/Profile';
import Spot from "@pages/Spot";

import store, { persistor } from '@store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home  />,
    errorElement: <Error />,
  },
  {
    path: '/list',
    element: <ListSpots />,
    errorElement: <Error />,
  },
  {
    path: '/:name',
    element: <Spot />,
    errorElement: <Error />,
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: '/maps',
    element: <Maps />,
    errorElement: <Error />,
  },
  {
    path: '/media',
    element: <Media />,
    errorElement: <Error />,
  }
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App;
