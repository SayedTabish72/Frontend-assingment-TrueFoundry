import React, { useState } from "react";
import { Form, Input, Select, Button, Modal } from "antd";


const { Option } = Select;

const PizzaForm = () => {
  const [form] = Form.useForm();
  const [pizzaType, setPizzaType] = useState("New York");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePizzaTypeChange = (value) => {
    setPizzaType(value);
  };

  const handleSubmit = (values) => {
    console.log(values);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Pizza Name"
          rules={[
            {
              required: true,
              message: "Please input the pizza name!",
            },
          ]}
        >
          <Input placeholder="Pizza name" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Pizza Type"
          rules={[
            {
              required: true,
              message: "Please select a pizza type!",
            },
          ]}
        >
          <Select value={pizzaType} onChange={handlePizzaTypeChange}>
            <Option value="New York">New York Style</Option>
            <Option value="Naples">Naples Style</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="slices"
          label="Number of Slices"
          rules={[
            {
              required: true,
              message: "Please input the number of slices!",
            },
          ]}
        >
          <Input type="number" placeholder="Number of slices" />
        </Form.Item>
        {pizzaType === "New York" && (
          <Form.Item
            name="portion"
            label="Pizza Portion"
            rules={[
              {
                required: true,
                message: "Please select a pizza portion!",
              },
            ]}
          >
            <Select>
              <Option value="1/4">1/4</Option>
              <Option value="1/2">1/2</Option>
              <Option value="3/4">3/4</Option>
              <Option value="1">1</Option>
            </Select>
          </Form.Item>
        )}
        {pizzaType === "Naples" && (
          <Form.Item
            name="topping"
            label="Pizza Topping"
            rules={[
              {
                required: true,
                message: "Please select a pizza topping!",
              },
            ]}
          >
            <Select>
              <Option value="Pepperoni">Pepperoni</Option>
              <Option value="Mushroom">Mushroom</Option>
              <Option value="Sausage">Sausage</Option>
              <Option value="Onion">Onion</Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="Pizza Form Data"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>Name: {values.name}</p>
        <p>Type: {values.type}</p>
        <p>Slices: {values.slices}</p>
        {pizzaType === "New York" && <p>Portion: {values.portion}</p>}
        {pizzaType === "Naples" && <p>Topping: {values.topping}</p>}
      </Modal>
    </div>
  );
};

export default PizzaForm;
