import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProjectStatusCard from "@/Components/Projectdashboard/ProjectStatusCard";
import ActivityCards from "@/Components/Projectdashboard/ActivityCards";
import ProjectsTable from "@/Components/Projectdashboard/ProjectsTable";

const Project = () => {
  return (
    <Container fluid>
      <Row>
        <ProjectStatusCard />
        <ActivityCards />
        <ProjectsTable />
      </Row>
    </Container>
  );
};

export default Project;
