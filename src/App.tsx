import { useEffect } from 'react';
import { AuthProvider } from './contexts/user';
import RoutesApp from './routes/routes';
import './app.scss';
import { useLocation } from 'react-router-dom';

const App = () => {

  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path])

  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}

export default App;