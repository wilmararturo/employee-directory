import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero>
        <h1 className="display-4">Employee Directory</h1>
        <h2 className="display-8">A Searchable Directory of All Employees</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Employee Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              A simple employee directory using sample data. To see the
              directory click <b>Search</b> in the navigation bar above.
            </p>
            <p>
              The search box can be used to filter the list. Clicking on the
              <b> Name</b> column header will sort the names in the list.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
