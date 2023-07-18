import { Formik, Form} from "formik";
import { Button, TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import axios from "axios";

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const UpdateOrder = ({ orderId }) => {
  const handleSubmit = async (values) => {
    try {
      await axios.put(
        `http://localhost:4000/api/v1/admin/order/${orderId}`,
        values
      );
      console.log("Order status updated successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Update Order Status</Title>
      <Formik initialValues={{ status: "" }} onSubmit={handleSubmit}>
        <Form>
          <FormGroup>
            <TextField label="Status" type="text" id="status" name="status" />
          </FormGroup>
          <Button type="submit">Update Status</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default UpdateOrder;