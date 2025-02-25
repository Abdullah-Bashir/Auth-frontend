'use client';
import { useAuth } from '../../hooks/useAuth'; // Ensure this is a named import
import { motion } from 'framer-motion';

export default function Dashboard() {
    const { isAuthenticated, logout } = useAuth();

    if (isAuthenticated === null) return <p>Loading...</p>;
    if (!isAuthenticated) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 transform transition-all hover:scale-105">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Dashboard</h1>
                <p className="text-lg mb-8 text-center text-gray-700">Welcome to your dashboard!</p>
                <button
                    onClick={logout}
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
                >
                    Logout
                </button>
            </div>
        </motion.div>
    );
}