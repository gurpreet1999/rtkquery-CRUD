import { Row, Col, Card, Typography, Spin } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import StudentItem from "./studentItem";
import { useGetStudentsQuery } from "../services/student";
const { Title, Paragraph } = Typography;

const Students = () => {
  let history = useNavigate();

  const { data, isFetching } = useGetStudentsQuery();

  return (
    <>
      {isFetching ? (
        <div className="spinner-wrapper">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[20, 20]}>
          {data.map((student) => (
            <StudentItem key={student.id} student={student} />
          ))}
        </Row>
      )}
    </>
  );
};

export default Students;