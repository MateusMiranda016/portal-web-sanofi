import { createBrowserRouter } from 'react-router-dom';
import InicioPage from '../pages/InicioPage'
import App from '../App';
import Home from '../pages/Home';
import DashboardsPage from '../pages/DashboardsPage';
import StatusPage from '../pages/StatusPage';
import PerfilPage from '../pages/PerfilPage';
import RelatoriosPage from '../pages/RelatoriosPage';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <InicioPage /> 
            },
            {
                path: '/home',
                element: <ProtectedRoute route="/home"><Home /></ProtectedRoute>
            },
            {
                path: '/dashboards',
                element: <ProtectedRoute route="/dashboards"><DashboardsPage /></ProtectedRoute>
            },
            {
                path: '/status',
                element: <ProtectedRoute route="/status"><StatusPage /></ProtectedRoute>
            },
            {
                path: '/perfil',
                element: <ProtectedRoute route="/perfil"><PerfilPage /></ProtectedRoute> 
            },
            {
                path: '/relatorios',
                element: <ProtectedRoute route="/relatorios"><RelatoriosPage /></ProtectedRoute>
            },
        ]
    },
])