import React from 'react';
import { Modal, Button } from 'antd';

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  width: number;
  children: React.ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width
}) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={width}
    >
      {children}
    </Modal>
  );
};

export default ReusableModal;
