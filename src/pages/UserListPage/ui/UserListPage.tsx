import { Col, Row, Table } from "antd";
import styles from "./UserListPage.module.less";
import { Columns } from "../module/const/const";
import { useEffect, useState } from "react";
import { UsersListType } from "../../UserPage/types/types";
import { getUsers } from "../service/service";
import { useNavigate } from "react-router-dom";

const UserListPage = () => {
  const [users, setUsers] = useState<UsersListType[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <Row className={styles.center}>
      <Col span={24}>
        <h1>UserListPage</h1>
      </Col>
      <Col span={24}>
        <Table
        columns={Columns}
        onRow={(user: UsersListType)=>({
        onClick : () =>{
          navigate(`/users?id=${user.id}`)
        }
        })}
        className={styles.table}
        dataSource={users} />
      </Col>
    </Row>
  );
};
export default UserListPage;
