import React, { Component } from 'react';
import { Container, Tab, Nav, Col, Row } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container className='mt-5'>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey="first" >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img 
                    src='https://images.ctfassets.net/s600jj41gsex/7oDxiYfNn76Misutcepx2q/72e074c8f1c3cc97faf23a94678037a4/Screen_Shot_2020-02-19_at_11.14.38_am.png'
                    className='imgAboutTabs w-100'
                  />
                  <p>lorem  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img 
                    src='https://athemes.com/wp-content/uploads/react-vue-angular-1180x664.jpg'
                    className='imgAboutTabs w-100'
                  />
                  <p>lorem  img elements must have an alt prop, either with meaningful text, or an  
                    elements must have an alt prop, either with meaningful text, or  empty string for decorative images.
                    elements must have an alt prop, either with meaningful text, or saber.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img 
                    src='https://www.techmagic.co/blog/content/images/2021/06/Inner-01.-React-vs-Angular-vs-Vue.js.-Introduction@2x.png'
                    className='imgAboutTabs w-100'
                  />
                  <p>
                    lorem  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.
                    have an alt prop, either with meaningful text, or an  
                    elements must have an alt prop, either with meaningful text, or  empty string for decorative images.
                    elements must have an alt prop, either with meaningful text, or saber have an alt prop, either with meaningful text, or an  
                    elements must have an all.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img 
                    src='https://preview.redd.it/571eimqiwck51.jpg?width=1200&format=pjpg&auto=webp&s=a1362c1f8ca6f0e08281310681ab44e53e6fbc53'
                    className='imgAboutTabs w-100'
                  />
                  <p>lorem  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img 
                    src='https://datacyper.com/wp-content/uploads/2021/06/Comparison-table-Angular-vs.-React-vs.-Vue-805x452.jpg'
                    className='imgAboutTabs w-100'
                  />
                  <p>lorem img elements must have an alt prop, either with meaningful text, or an empty string 
                     img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
