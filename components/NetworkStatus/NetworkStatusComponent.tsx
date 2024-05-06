'use client';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NetworkStatusComponent = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const updateNetworkStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  useEffect(() => {
    if (isOnline) {
      toast.success('You are online');
    } else {
      toast.error('You are offline');
    }
  }, [isOnline]);

  return <ToastContainer />;
};

export default NetworkStatusComponent;