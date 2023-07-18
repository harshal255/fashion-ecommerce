
import { Formik, Form, FieldArray } from "formik";
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

const CreateOrder = () => {
  const initialValues = {
    itemsPrice: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
    orderItems: [
      {
        product: "",
        name: "",
        price: 0,
        image: "",
        quantity: 0,
      },
    ],
    shippingInfo: {
      address: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      phoneNo: "",
    },
    paymentInfo: {
      id: "",
      status: "",
    },
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/order/new",
        values
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Order Form</Title>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <FormGroup>
            <TextField
              label="Items Price"
              type="number"
              id="itemsPrice"
              name="itemsPrice"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Tax Price"
              type="number"
              id="taxPrice"
              name="taxPrice"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Shipping Price"
              type="number"
              id="shippingPrice"
              name="shippingPrice"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Total Price"
              type="number"
              id="totalPrice"
              name="totalPrice"
            />
          </FormGroup>
          <FieldArray name="orderItems">
            {(arrayHelpers) => (
              <div>
                {values.orderItems.map((index) => (
                  <div key={index}>
                    <h3>Order Item #{index + 1}</h3>
                    <FormGroup>
                      <TextField
                        label="Product"
                        id={`orderItems.${index}.product`}
                        name={`orderItems.${index}.product`}
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        label="Name"
                        id={`orderItems.${index}.name`}
                        name={`orderItems.${index}.name`}
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        label="Price"
                        type="number"
                        id={`orderItems.${index}.price`}
                        name={`orderItems.${index}.price`}
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        label="Image"
                        id={`orderItems.${index}.image`}
                        name={`orderItems.${index}.image`}
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        label="Quantity"
                        type="number"
                        id={`orderItems.${index}.quantity`}
                        name={`orderItems.${index}.quantity`}
                      />
                    </FormGroup>
                    <Button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() =>
                    arrayHelpers.push({
                      product: "",
                      name: "",
                      price: 0,
                      image: "",
                      quantity: 0,
                    })
                  }
                >
                  Add Order Item
                </Button>
              </div>
            )}
          </FieldArray>
          <FormGroup>
            <TextField
              label="Address"
              id="shippingInfo.address"
              name="shippingInfo.address"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="City"
              id="shippingInfo.city"
              name="shippingInfo.city"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="State"
              id="shippingInfo.state"
              name="shippingInfo.state"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Country"
              id="shippingInfo.country"
              name="shippingInfo.country"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="PIN Code"
              id="shippingInfo.pinCode"
              name="shippingInfo.pinCode"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Phone No"
              id="shippingInfo.phoneNo"
              name="shippingInfo.phoneNo"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Payment ID"
              id="paymentInfo.id"
              name="paymentInfo.id"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Payment Status"
              id="paymentInfo.status"
              name="paymentInfo.status"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default CreateOrder;