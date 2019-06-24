import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from 'reactstrap';
import Placeholder from '../img/placeholder.png';

const CardColaborador = (props) => {
            return (
                <Col xs={6}>
                <Card className="m-5">
                    <CardImg top src={props.colab.foto || Placeholder} height="400px" />
                    <CardBody>
                        <CardTitle> {props.colab.nome} </CardTitle>
                        <CardText> {props.colab.email} </CardText>
                        <CardText> {props.colab.celular} </CardText>
                    </CardBody>
                </Card>
                </Col>
            )};

export default CardColaborador;

//
