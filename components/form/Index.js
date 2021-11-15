import styled from "styled-components"
import {
    Form,
    Input,
    Button,
    Select,
} from 'antd';

import Swal from "sweetalert2";

const Container = styled.div`
    display: flex;
    padding-top: 5rem;
    padding-left: 10rem;
    justify-content: center;
    .ant-form-item-control-input-content{
        text-align: center !important;
    }
`

export default function Index(props) {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log(values)
        {values ? Swal.fire('Good job!',
        'Reservation Successfully',
        'success') : <> </>}
    };

    return (
        <Container>
            <Form
            onFinish={onFinish}
            autoComplete="off"
            >
                <Form.Item name={['studentId']} className="form-item-student-id" rules={[{ required: true}]}>
                    <Input
                        placeholder="รหัสนักศึกษา"
                        autoComplete="off"
                        onChange={(e) => {
                            let value = e.target.value.replace(/[^0-9]+/g, '')
                            form.setFieldsValue({ studentId: value })
                        }}
                    />
                </Form.Item>

                <Form.Item name={['name']} className="form-item-name" rules={[{ required: true}]}>
                    <Input placeholder="ชื่อนักศึกษา"></Input>
                </Form.Item>

                <Form.Item name={['email']} className="form-item-email" rules={[{ required: true}]}>
                    <Input placeholder="อีเมลของนักศึกษา"></Input>
                </Form.Item>

                <Form.Item name={['room']} className="form-item-room" rules={[{ required: true}]}>
                    <Select placeholder="กรุณาเลือกห้องประชุม">
                        <Select.Option value="r01">Room 1</Select.Option>
                        <Select.Option value="r02">Room 2</Select.Option>
                        <Select.Option value="r03">Room 3</Select.Option>
                        <Select.Option value="r04">Room 4</Select.Option>
                        <Select.Option value="r04">Room 5</Select.Option>
                        <Select.Option value="r04">Room 6</Select.Option>
                        <Select.Option value="r04">Room 7</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        ยืนยัน
                    </Button>
                </Form.Item> 

            </Form>
        </Container>
    )
}