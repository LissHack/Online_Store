import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.jpg'
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../http/deviceAPI";

const DevicePage = () => {
    // const device = {id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5}
    // const description = [
    //     {id: 1, title: 'Оперативная память', description: '5 гб'},
    //     {id: 2, title: 'Камера', description: '12 мп'},
    //     {id: 3, title: 'Процессор', description: 'Пентиум 3'},
    //     {id: 4, title: 'Аккумулятор', description: '4000'},
    // ]
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    })

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 280,
                                height: 280,
                                backgroundSize: 'cover',
                                fontSize: 64,
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h3>Характеристики</h3>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;