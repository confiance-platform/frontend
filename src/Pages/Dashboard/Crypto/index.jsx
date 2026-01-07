
import React from 'react';
import {Container, Row} from "reactstrap";
import CoinsCard from "@/Components/Cryptodashboard/CoinsCard";
import RecentData from "@/Components/Cryptodashboard/RecentData";
import TotalGrowth from "@/Components/Cryptodashboard/TotalGrowth";
const Crypto = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <CoinsCard/>
                    <RecentData/>
                    <TotalGrowth/>
                </Row>
            </Container>
        </>
    );
};

export default Crypto;