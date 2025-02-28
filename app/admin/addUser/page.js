"use client"; // Mark as a Client Component

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function AddUser() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to add a new user
            const response = await axios.post(
                "http://localhost:5000/api/users/add-user",
                { username, email },
                { withCredentials: true }
            );

            console.log("response", response);
            toast.success(response.data.message || "User added successfully!");
            setUsername("");
            setEmail("");
        } catch (error) {
            // Handle any errors from the request
            toast.error(error.response?.data?.message || "An error occurred.");
        }
    };


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add User</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add User
                </button>
            </form>
        </div>
    );
}
