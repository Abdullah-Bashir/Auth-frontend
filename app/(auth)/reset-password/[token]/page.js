'use client';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { resetPassword } from '../../../../utils/api';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { token } = useParams();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        setLoading(true);
        try {
            await resetPassword(token, newPassword, confirmPassword);
            toast.success('Password reset successfully!');
            setTimeout(() => router.push('/login'), 2000);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to reset password');
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
                onSubmit={handleResetPassword}
                className="bg-white p-8 rounded-lg shadow-lg w-96 transform transition-all hover:scale-105"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Reset Password</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-gray-700">New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                    {loading ? 'Resetting...' : 'Reset Password'}
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