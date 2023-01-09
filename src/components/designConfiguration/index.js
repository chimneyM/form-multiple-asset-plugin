import React, { useEffect } from "react";
import { Form, Input, Switch, Radio } from "antd";

const DesignConfiguration = ({ changeConfiguration, configuration }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    try {
      form.setFieldsValue(JSON.parse(configuration));
    } catch (error) {
      console.error("configuration解析错误", error);
    }
  }, []);

  const onFormLayoutChange = (changedValues, allValues) => {
    changeConfiguration(JSON.stringify(allValues));
  };

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  return (
    <>
      <Form
        {...formItemLayout}
        layout="vertical"
        form={form}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="控件大小" name="size" de>
          <Radio.Group>
            <Radio.Button value="small">小</Radio.Button>
            <Radio.Button value="middle">中 </Radio.Button>
            <Radio.Button value="large">大</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="占位符" name="placeholder">
          <Input />
        </Form.Item>
        <Form.Item label="允许删除" name="allowClear" valuePropName="checked">
          <Switch></Switch>
        </Form.Item>
      </Form>
    </>
  );
};

DesignConfiguration.propTypes = {};

export default DesignConfiguration;
