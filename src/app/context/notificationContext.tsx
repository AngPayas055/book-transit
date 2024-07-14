"use client"
import React, { createContext, useContext, ReactNode } from 'react';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationContextProps {
  openNotificationWithIcon: (type: NotificationType, message: string, description: string) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType, message: string, description: string) => {
    api[type]({
      message,
      description,
    });
  };

  return (
    <NotificationContext.Provider value={{ openNotificationWithIcon }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
