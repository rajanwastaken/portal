import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";

class Title extends Component {
  render() {
    return (
        <Container>
				      <div>
							<h3 classsName="subtitle">This event will allow competitors to explore the health sciences through the lens of management. Cases will focus on hospital administration, healthcare startups, corporate pharmaceutical operations, and biomedical tech and innovation.</h3>
          <Row>
            <Col sm={3}>
              
            </Col>
            <Col sm={6}>
              <h5>What is Stay Woke?</h5>
              <p>
                  yes
                <b>
                  <a href="https://www.staywokeevent.com">
                    staywokeevent.com
                  </a>
                </b>
              </p>
            </Col>
            <Col sm={3}>
                          </Col>
          </Row>
        
					      </div>
        </Container>

    );
  }
}

export default Title;