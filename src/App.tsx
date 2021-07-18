import './styles/index.scss'
import {useIntl} from "react-intl";
import {Button, Col, Row, Space} from 'antd';

export function App() {
    const intl = useIntl()

    return (
        <Row className="">
            <Space align={"center"}>
                <Col span={18} offset={6}>
                    test
                </Col>
            </Space>
        </Row>
    );
}