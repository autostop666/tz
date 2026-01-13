import { Col, Row, Table } from "antd";
import styles from "./UserListPage.module.less";
import { Columns } from "../module/const/const";
import { useEffect, useState } from "react";
import { UsersListType } from "../../UserPage/types/types";
import { getUsers } from "../service/service";

const UserListPage = () => {
  const [users, setUsers] = useState<UsersListType[]>([]);
  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <Row className={styles.center}>
      <Col span={24}>
        <h1>UserListPage</h1>
      </Col>
      <Col span={24}>
        <Table columns={Columns} className={styles.table} dataSource={users} />
      </Col>
    </Row>
  );
};
export default UserListPage;
