'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
        padding: '1rem',
      }}
    >
      {/* Continuous Background Animation */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
        }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}
        >
          Welcome to Our Platform
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#555' }}
        >
          A professional platform for authentication, authorization, and seamless user management.
        </motion.p>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ marginBottom: '2rem' }}
        >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Features</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#f9fafb',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                flex: '1 1 200px',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#3b82f6' }}>Secure Authentication</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                Protect your account with advanced security features.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#f9fafb',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                flex: '1 1 200px',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#3b82f6' }}>User Dashboard</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                Access a personalized dashboard with real-time insights.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#f9fafb',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                flex: '1 1 200px',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#3b82f6' }}>Easy Integration</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                Seamlessly integrate with your existing systems.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/login"
              style={{
                background: '#3b82f6',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
              }}
            >
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/signup"
              style={{
                background: '#10b981',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
              }}
            >
              Sign Up
            </Link>
          </motion.div>
        </motion.div>

        {/* Dashboard Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {/* Go to Dashboard Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/dashboard"
              style={{
                background: 'transparent',
                color: '#3b82f6',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                border: '2px solid #3b82f6',
                transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
            >
              Go to Dashboard
            </Link>
          </motion.div>

          {/* Go to Admin Panel Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/admin/addUser"
              style={{
                background: 'transparent',
                color: '#3b82f6',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                border: '2px solid #3b82f6',
                transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
            >
              Go to Admin Panel
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}