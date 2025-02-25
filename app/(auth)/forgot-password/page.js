'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { forgotPassword } from '../../../utils/api';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await forgotPassword(email);
            toast.success('Password reset email sent!');
            router.push('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to send reset email');
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
                onSubmit={handleForgotPassword}
                className="bg-white p-8 rounded-lg shadow-lg w-96 transform transition-all hover:scale-105"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Forgot Password</h2>
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                    {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
                <div className="mt-4 text-center">
                    <button
                        type="button"
                        onClick={() => router.push('/login')}
                        className="text-blue-500 hover:underline"
                    >
                        Back to Login
                    </button>
                </div>
            </form>
        </motion.div>
    );
}