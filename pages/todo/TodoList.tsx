import React, { useState } from "react";
import type { FormProps } from 'antd';
import { Button, Form, Input, Divider, List } from 'antd';

type FieldType = {
  new_todo: string;
};

export function TodoList({ initialTodoItems }: { initialTodoItems: { text: string }[] }) {
  const [form] = Form.useForm()
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setTodoItems((prev) => [...prev, { text: values.new_todo }]);
    form.resetFields()
  };
  return (
    <>
      <List
        size="small"
        bordered
        dataSource={todoItems}
        renderItem={
          (item, index) => <List.Item>{index + 1}. {item.text}</List.Item>
        }
      />
      <Divider dashed />
      <div>
        <Form
          form={form}
          layout="inline"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item<FieldType>
            label="New Todo"
            name="new_todo"
            rules={[{ required: true, message: 'Please input your new todo!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Add to-do</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
