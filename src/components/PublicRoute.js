import { Redirect, Route } from 'react-router';
import { useAuth } from '../contexts/AuthContext'

export default function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    return !currentUser ? (
        <Route {...rest}>{props => <Component {...props} />}</Route>
    ) : (
        <Redirect to="/" />
    );
}