
import React from 'react';
import {Container, Row} from "reactstrap";
import ProfileCards from "@/Components/Educationdashboard/ProfileCards";
import LectureCard from "@/Components/Educationdashboard/LectureCard";
import ProgressCards from "@/Components/Educationdashboard/ProgressCards";


const Education = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <ProfileCards/>
                    <LectureCard/>
                    <ProgressCards/>
                </Row>
            </Container>
        </>
    );
};

export default Education;