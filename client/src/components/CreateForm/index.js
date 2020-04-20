import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./style.css";

function CreateForm() {
  return (
    <Container>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Add a Title" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>What Game are you Playing?</Form.Label>
                <Form.Control type="text" placeholder="Title of Game" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group>
                <Form.Label> Post Type: </Form.Label>
                <Row>
                    <Col sm={10}>
                    <Form.Check
                        type="radio"
                        label="Looking for a Player"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        type="radio"
                        label="Looking for a Game"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    </Col>
                </Row>
            </Form.Group>
            <Button type="submit">Create Post</Button>
        </Form>
    </Container>
  );
}

export default CreateForm;
