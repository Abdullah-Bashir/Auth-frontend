import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, removeToken } from '../utils/cookies';

export const useAuth = () => { // Ensure this is a named export
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = getToken();
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            router.push('/login');
        }
    }, [router]);

    const logout = () => {
        removeToken();
        setIsAuthenticated(false);
        router.push('/login');
    };

    return { isAuthenticated, logout };
};