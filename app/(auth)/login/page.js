'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../../../utils/api'; // Ensure this is a named import
import Link from 'next/link';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { setToken } from '../../../utils/cookies'; // Ensure correct import

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await loginUser(email, password);
            toast.success('Logged in successfully!');
            router.push('/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
        >
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-lg shadow-lg w-96 transform transition-all hover:scale-105"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <div className="mt-4 text-center">
                    <Link href="/forgot-password" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </motion.div>
    );
}