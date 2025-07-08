'use client';
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Global ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f3] p-8">
          <h1 className="text-3xl font-bold mb-4 text-red-700">Something went wrong</h1>
          <p className="mb-4 text-gray-700">An unexpected error occurred. Please try reloading the page.</p>
          <button onClick={this.handleReload} className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition">Reload</button>
          <pre className="mt-6 text-xs text-red-500 bg-red-50 p-4 rounded max-w-xl overflow-x-auto">{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
} 