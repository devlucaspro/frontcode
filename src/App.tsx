import { AuthProvider } from './contexts/user';
import RoutesApp from './routes/routes';
import './app.scss';

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </>
  )
}

export default App;