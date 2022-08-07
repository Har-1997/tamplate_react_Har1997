import React, { Component } from 'react';
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card, ListGroupItem, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
          <CardGroup className='m-4'>
            <Card className='cardOurTeam' bg="light" border="success" text="primary">
              <Card.Img 
                variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem webpack compiled with 1 error and 1 warning ompiled with 1 error and 1 war. 
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
            <Card className='cardOurTeam' >
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem webpack compiled with 1 error and 1 warning ompiled with 1 error and 1 war. 
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
              <Card.Img 
                variant='bottom'
                src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
            </Card>
            <Card className='cardOurTeam'>
              <Card.Img 
                variant='top'
                src='https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem webpack compiled with 1 error and 1 warning ompiled with 1 error and 1 war. 
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}
