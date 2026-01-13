import { Col, Row, Table } from "antd"
import styles from './UserListPage.module.less'
import { Columns } from "../module/const/const"

const UserListPage = () =>{
  return(
    <Row className={styles.center}>
      <Col span={24}>
        <h1>UserListPage</h1>
      </Col>
      <Col span={24}>
        <Table columns={Columns}/>
      </Col>
    </Row>
  )
}
export default UserListPage