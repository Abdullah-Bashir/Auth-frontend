"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function AdminLayout({ children }) {
    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/users/profile", {
                    method: "GET",
                    credentials: "include",
                });

                const data = await res.json();

                if (res.ok && data.role === "admin") {
                    setIsAdmin(true);
                } else {
                    router.replace("/");
                }
            } catch (error) {
                router.replace("/");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [router]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return isAdmin ? (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-white text-xl font-bold">Admin Panel</h1>
                    <div className="space-x-4">
                        <a href="/admin/addUser" className="text-white hover:text-gray-300">Add User</a>
                    </div>
                </div>
            </nav>
            <div className="p-4">  <Toaster position="top-center" />{children}</div>
        </div>
    ) : null;
}
