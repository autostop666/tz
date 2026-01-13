import { ColumnsType } from "antd/es/table";

export const Columns: ColumnsType = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: "lastname",
    dataIndex: "lastname",
    key: "lastname",
    sorter: (a, b) => a.lastname - b.lastname,
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email - b.email,
  },
  {
    title: "createdAt",
    dataIndex: "createdAt",
    key: "createdAt",
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
];
