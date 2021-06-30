import React, { Component } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            arr: []
        }
    }
    task = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    add = () => {
        const temp = this.state.arr
        temp.push(
            this.state.task,
        )
        this.setState({
            arr: temp,
            task: ""
        })

    }
    remove = () => {
        const temp = this.state.arr
        temp.splice(0, temp.length)
        this.setState({
            arr: temp
        })
    }
    del = (element, index) => {
        const temp = this.state.arr
        temp.splice(index, 1)
        this.setState({
            arr: temp,
           
        })

    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <h1>To-DO Application</h1>
                        </Col>
                    </Row>
                </Container>


                <Container fluid>
                    <Row className='mt-5 justify-content-lg-center'>
                        <Col md={12} sm={12} xs={12} >
                            <Card >
                                <Card.Body>
                                    <Card.Text>
                                        <Container>
                                             <Row>
                                                <Col>
                                                    <input value={this.state.task} onChange={this.task} placeholder="Add Task" required />
                                                    <Button disabled={this.state.task === "" ? true : false} variant="success" onClick={this.add}>Add</Button>

                                                </Col>
                                                

                                            </Row>
                                        </Container>


                                    </Card.Text>
                                    <ol >
                                        {this.state.arr.map((element, index) => {
                                            return (
                                                <>
                                                    <Container>
                                                        <Row className='mt-5 justify-content-lg-center' style={{ borderBottom: "3px solid black", paddingLeft: '2rem' }}>
                                                            <Col>
                                                                <li key={index} ><p>{element}</p></li>

                                                            </Col>
                                                            <Col>
                                                                <Button variant="danger" onClick={(event) => { this.del(element, index) }}>DEL</Button>

                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </>
                                            )
                                        })}
                                    </ol>
                                    <Button variant="danger" onClick={this.remove}>Remove All</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    
                    </Row>
                </Container>




            </div>
        )
    }
}
