'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { removeToken } from '../../utils/cookies';

export default function Dashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [user, setUser] = useState(null); // State to store user information
    const [stats, setStats] = useState([]); // State to store statistics
    const [recentActivities, setRecentActivities] = useState([]); // State to store recent activities
    const router = useRouter();

    // Function to validate the token and fetch user information
    const validateToken = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/validate-token', {
                credentials: 'include', // Send cookies
            });

            if (!response.ok) throw new Error();
            const data = await response.json();

            if (data.valid) {
                setIsAuthenticated(true);
                setUser(data.user); // Store user information

                // Mock data for statistics and activities
                setStats([
                    { id: 1, title: 'Projects Completed', value: 12, trend: '+5%' },
                    { id: 2, title: 'Tasks Pending', value: 8, trend: '-2%' },
                    { id: 3, title: 'Team Members', value: 24, trend: '+10%' },
                ]);

                setRecentActivities([
                    { id: 1, activity: 'Updated project timeline', time: '2 hours ago' },
                    { id: 2, activity: 'Added new task to the board', time: '5 hours ago' },
                    { id: 3, activity: 'Completed project milestone', time: '1 day ago' },
                ]);
            } else {
                removeToken(); // Remove token from cookies
                router.push('/login'); // Redirect to login
            }
        } catch (error) {
            removeToken(); // Remove token from cookies
            router.push('/login'); // Redirect to login
        }
    };

    // Function to handle logout
    const handleLogout = async () => {
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
            router.push('/login'); // Redirect to login
        }
    };

    // Validate token on component mount
    useEffect(() => {
        validateToken();
    }, [router]);

    // Show loading state while validating
    if (isAuthenticated === null) return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent"
            />
        </div>
    );

    // Redirect if not authenticated
    if (!isAuthenticated) return null;

    // Render the dashboard
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-100"
        >
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Welcome Banner */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-8 shadow-lg"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.email}!</h2>
                            <p className="text-blue-100">Role: {user?.role}</p>
                        </div>
                        <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">
                            {/* this is dp */}
                            <span className="text-2xl font-bold text-blue-500">{user?.email[0].toUpperCase()}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                            <p className="text-sm text-gray-500 mt-2">{stat.trend} from last month</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Recent Activities */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                >
                    <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                    <div className="space-y-4">
                        {recentActivities.map((activity) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-500">✓</span>
                                </div>
                                <div>
                                    <p className="font-medium">{activity.activity}</p>
                                    <p className="text-sm text-gray-500">{activity.time}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}