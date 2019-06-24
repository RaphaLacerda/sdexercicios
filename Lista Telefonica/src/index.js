import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import {
    Navbar,
    Form,
    FormControl,
    Button,
    Container
} from 'react-bootstrap'
import CardColaboradores from './components/cardColaborador';
import colaboradorApi from './services/colaboradorApi'

class ListaTelefonica extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colaboradores: []
        }
        this.loadColaboradores = this.loadColaboradores.bind(this)
    }

    loadColaboradores() {
        colaboradorApi.loadColaboradores()
            .then((resolve) => {
                const colaboradores = resolve.data;
                this.setState({ colaboradores });
            }).catch((error) => {
                console.log(error);
            });
    }

    renderCards() {
        return this.state.colaboradores.map((colab) => 
            <CardColaboradores colab = {colab} key={colab.nome}/>);
        };

    render() {
        const haveResults = this.state.colaboradores.length > 0;
        return (<div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" > Lista de Contatos </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" className="mr-sm-2" />
                        <Button variant="outline-success" onClick={this.loadColaboradores}> Procurar </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Container className="row"> {haveResults ? this.renderCards() : <div> Sem registros. </div>}
            </Container>
        </div>
        );
    };
};

ReactDOM.render(<ListaTelefonica />, document.getElementById('root'));

serviceWorker.unregister();