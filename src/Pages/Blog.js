import React, { Component } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9" className=' mt-4'>
            <Card border='0' className='cardBlog mb-4'>
              <Card.Body className='cardBodyBlog'>
                <img 
                  width={150}
                  height={150}
                  className='me-4'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
                />
                <div>
                  <h5>Blog post</h5>
                  <p>
                    Lesson React Js with tamplate for react-bootstrap React Js with tamplate for react-bootstrap for 
                    react-bootstrap.Lesson React Js with tamplate for react-bootstrap React Js with tamplate for
                    for react-bootstrap React Js with tamplate for react-bootstrap for react-bootstrap
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card border='0' className='cardBlog mb-4'>
              <Card.Body className='cardBodyBlog'>
                <img 
                  width={150}
                  height={150}
                  className='me-4'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
                />
                <div>
                  <h5>Blog post</h5>
                  <p>
                    Lesson React Js with tamplate for react-bootstrap React Js with tamplate for react-bootstrap for 
                    react-bootstrap.Lesson React Js with tamplate for react-bootstrap React Js with tamplate for
                    for react-bootstrap React Js with tamplate for react-bootstrap for react-bootstrap
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card border='0' className='cardBlog mb-4'>
              <Card.Body className='cardBodyBlog'>
                <img 
                  width={150}
                  height={150}
                  className='me-4'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
                />
                <div>
                  <h5>Blog post</h5>
                  <p>
                    Lesson React Js with tamplate for react-bootstrap React Js with tamplate for react-bootstrap for 
                    react-bootstrap.Lesson React Js with tamplate for react-bootstrap React Js with tamplate for
                    for react-bootstrap React Js with tamplate for react-bootstrap for react-bootstrap
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card border='0' className='cardBlog mb-4'>
              <Card.Body className='cardBodyBlog'>
                <img 
                  width={150}
                  height={150}
                  className='me-4'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
                />
                <div>
                  <h5>Blog post</h5>
                  <p>
                    Lesson React Js with tamplate for react-bootstrap React Js with tamplate for react-bootstrap for 
                    react-bootstrap.Lesson React Js with tamplate for react-bootstrap React Js with tamplate for
                    for react-bootstrap React Js with tamplate for react-bootstrap for react-bootstrap.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <h5 className='text-center mt-5'>Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Pyton</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-4" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Js with tamplate for react-bootstrap React Js with tamplate for
                  for react-bootstrap React Js with tamplate for react-bootstrap for react-bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
