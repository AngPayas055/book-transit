"use client"
import { TableProps, Table } from "antd";
import { useAdmin } from "../hooks/useAdmin"
import { IUser } from "../interface/user";
export default function Admin () {
  const {users} = useAdmin()
  const usersWithKeys = users.map(user => ({ ...user, key: user._id }));
  const columns: TableProps<IUser>['columns'] = [
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
      <Table columns={columns} dataSource={usersWithKeys} />;
    </div>
  )
}