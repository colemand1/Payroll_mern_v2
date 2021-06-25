import React, {useState} from 'react'
import Reader from '../Components/Reader'
import PayRollReader from '../utils/PayRollReader'
import Display from '../utils/Display'
import {Container, Row, Col, Modal, Button} from 'react-bootstrap'
import WeekPicker from '../Components/WeekPicker'
import Twillio from './Twillio'
import {TextModal} from '../Components/Display-Modal'
import AddressReader from '../utils/AddressReader'

function Home(){
    return(
        <Container>
            <div className="Output-containers">
            <Row className="justify-content-center">
                <Col>
                    <h3>Pay Week</h3>
                    <WeekPicker />
                </Col>
                    
            </Row>
                <Row className="justify-content-center">
                    <Col className="m-4">
                        <div id="employee-reader">
                            <h3>Employee Reader</h3>
                            <Reader />
                        </div>
                    </Col>
                    <Col className="m-4">
                        <div id="payroll-reader">
                            <h3>PayRoll</h3>
                            <PayRollReader />
                        </div>
                    </Col>
                </Row>
        <Row className="justify-content-center">
            <Col>
                <TextModal />
            </Col>
            <Col>
                <Display type='reader'/>            
            </Col>
        </Row>
        <Row>
            <Col>
                <AddressReader />
            </Col>
        </Row>
        </div>
    </Container>
    )
}
export default Home