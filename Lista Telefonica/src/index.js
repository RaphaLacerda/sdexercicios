import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import Placeholder from './placeholder.png'
import { Card, CardBody, CardTitle, CardText, CardImg, CardGroup } from 'reactstrap';
import {
    Navbar,
    Form,
    FormControl,
    Button,
    Container,
    Col
} from 'react-bootstrap'


class ListaTelefonica extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colaboradores: []
        }
        this.loadColaboradores = this.loadColaboradores.bind(this)
    }

    loadColaboradores() {
        axios.get('http://private-ba46ed-softtrainee.apiary-mock.com/colaboradores')
            .then((resolve) => {
                const colaboradores = resolve.data;
                this.setState({ colaboradores });
            }).catch((error) => {
                console.log(error);
            });
    }

    renderCards() {
        return (
            <CardGroup >
                {this.state.colaboradores.map(colab => (
                    <Col xs={6} key={colab.nome}>
                        <Card cols="3" className="m-5" >
                            <CardImg top src={colab.foto} height="400px" />
                            <CardBody>
                                <CardTitle>{colab.nome}</CardTitle>
                                <CardText>{colab.email}</CardText>
                                <CardText>{colab.celular}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </CardGroup>
        )
    };

    render() {
        const haveResults = this.state.colaboradores.length > 0;
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Lista de Contatos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl type="text" className="mr-sm-2" />
                            <Button variant="outline-success" onClick={this.loadColaboradores} >Procurar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    {haveResults ? this.renderCards() : <div>Sem registros.</div>}
                </Container>
            </div>
        )
    }
}

ReactDOM.render(<ListaTelefonica />, document.getElementById('root'));

serviceWorker.unregister();
