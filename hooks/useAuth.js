import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, removeToken } from '../utils/cookies';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/validate-token', {
                    credentials: 'include' // Send cookies
                });

                if (!response.ok) throw new Error();
                const data = await response.json();

                if (data.valid) {
                    setIsAuthenticated(true);
                } else {
                    removeToken();
                    router.push('/login');
                }
            } catch (error) {
                removeToken();
                router.push('/login');
            }
        };

        verifyToken();
    }, [router]);

    // Define the logout function
    const logout = async () => {
        try {
            await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                credentials: 'include', // Send cookies
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            removeToken(); // Remove token from cookies
            setIsAuthenticated(false); // Update authentication state
            router.push('/login'); // Redirect to login page
        }
    };

    // Return both isAuthenticated and logout
    return { isAuthenticated, logout };
};