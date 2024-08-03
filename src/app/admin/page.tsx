"use client"
import { Table } from "antd";
import { useAdmin } from "../hooks/useAdmin";
import { IUser } from "../interface/user";
import type { ColumnsType } from 'antd/es/table';

export default function Admin () {
  const { users } = useAdmin();
  const usersWithKeys = users.map(user => ({ ...user, key: user._id }));

  const columns: any = [
    // @ts-ignore
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto my-3">
      <Table columns={columns} dataSource={usersWithKeys} />
    </div>
  );
}
