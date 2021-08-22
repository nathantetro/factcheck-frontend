import React, { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import FactCheck from '../../domain/FactCheck/FactCheck';
import ItemReviewed from '../../domain/FactCheck/ItemReviewed'
import Author from '../../domain/FactCheck/Author'
import ReviewRating from '../../domain/FactCheck/ReviewRating'
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            factCheckURL: '',
            factCheckClaim: '',
            factCheckAuthor: '',
            factCheckAuthorSameAs: '',
            factCheckAuthorCategory: '',
            itemReviewPublisher: '',
            itemReviewPublisherSameAs: '',
            itemReviewPublisherCategory: '',
            factCheckPublished: new Date(),
            itemReviewAppearance: '',
            itemReviewedPublished: new Date(),
            reviewRatingBest: '',
            reviewRatingWorst: '',
            reviewRatingRating: '',
            reviewRatingAlterName: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.convertToJSON = this.convertToJSON.bind(this);

    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        this.convertToJSON();

        Swal.fire({
            text: "Google Factcheck JSON succesvol aangemaakt!",
            toast: true,
            position: "top",
            timer: 2300,
            timerProgressBar: true,
            showConfirmButton: false,
            icon: 'success'
        });

        event.preventDefault();
    }

    convertToJSON() {
        let factCheck = new FactCheck(this.state.factCheckPublished, this.state.factCheckURL,
            this.state.factCheckClaim, new ItemReviewed(new Author(this.state.itemReviewPublisherCategory, this.state.itemReviewPublisher, this.state.itemReviewPublisherSameAs),
                this.state.itemReviewedPublished, this.state.itemReviewAppearance), new Author(this.state.factCheckAuthorCategory, this.state.factCheckAuthor, this.state.factCheckAuthorSameAs), new ReviewRating(this.state.reviewRatingRating, this.state.reviewRatingBest, this.state.reviewRatingWorst, this.state.reviewRatingAlterName));

        document.getElementById('factCheckJSON').innerHTML = JSON.stringify(factCheck, null, '\t');
    }

    render() {
        return (
            <div class="container mt-5 mb-5">
                <p><b>FACTCHECK & CLAIM</b></p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Wanneer werd de factcheck gepubliceerd?</Form.Label><br></br>
                        <DatePicker todayButton="Vandaag"
                            selected={this.state.factCheckPublished} onChange={(date) => this.setState({ factCheckPublished: date })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>URL naar het factcheck artikel</Form.Label>
                        <Form.Control name="factCheckURL" onChange={this.handleInputChange} type="text" placeholder="nieuws.be/factcheck/artikel" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Wat is de claim die werd beoordeeld?</Form.Label>
                        <Form.Control name="factCheckClaim" onChange={this.handleInputChange} type="text" placeholder="Bv.: Coronacijfers in Nederland stijgen doordat er meer wordt getest" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Door wie werd de factcheck geschreven?</Form.Label>
                        <Form.Control name="factCheckAuthor" onChange={this.handleInputChange} type="text" placeholder="Bv.: Coronacijfers in Nederland stijgen doordat er meer wordt getest" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Geef een alias in voor de auteur (indien van toepassing).</Form.Label>
                        <Form.Control name="factCheckAuthorSameAs" onChange={this.handleInputChange} type="text" placeholder="Bv.: Coronacijfers in Nederland stijgen doordat er meer wordt getest" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Kies een gepaste categorie voor de auteur.</Form.Label>
                        <select name="factCheckAuthorCategory" onChange={this.handleInputChange} class="form-control">
                            <option value="Person">Individu</option>
                            <option value="Organization">Organisatie</option>
                        </select>
                    </Form.Group>
                    <hr></hr>
                    <p><b>ITEM REVIEWED</b></p>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>De item waarin de claim voorkwam, door wie werd die gepubliceerd (auteur)?</Form.Label>
                        <Form.Control name="itemReviewPublisher" onChange={this.handleInputChange} type="text" placeholder="Bv.: Jan Appelman" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Kies een gepaste categorie voor de auteur.</Form.Label>
                        <select name="itemReviewPublisherCategory" onChange={this.handleInputChange} class="form-control">
                            <option value="Person">Individu</option>
                            <option value="Organization">Organisatie</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Geef een alias in voor de auteur (indien van toepassing).</Form.Label>
                        <Form.Control name="itemReviewPublisherSameAs" onChange={this.handleInputChange} type="text" placeholder="Bv.: @janappel" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Wanneer werd het item gepubliceerd?</Form.Label><br></br>
                        <DatePicker todayButton="Vandaag"
                            selected={this.state.itemReviewedPublished} onChange={(date) => this.setState({ itemReviewedPublished: date })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Waar kwam het item tevoorschijn? Geef een URL in. (Twitter? Forum?)</Form.Label>
                        <Form.Control name="itemReviewAppearance" onChange={this.handleInputChange} type="text" placeholder="Bv.: twitter.com/tweet/11548" />
                    </Form.Group>
                    <hr></hr>
                    <p><b>REVIEW RATING</b></p>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Wat is de beste rating value?</Form.Label>
                        <Form.Control name="reviewRatingBest" onChange={this.handleInputChange} type="text" placeholder="Bv.: 5" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Wat is de slechtste rating value?</Form.Label>
                        <Form.Control name="reviewRatingWorst" onChange={this.handleInputChange} type="text" placeholder="Bv.: 1" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Hoe rate je de claim?</Form.Label>
                        <Form.Control name="reviewRatingRating" onChange={this.handleInputChange} type="text" placeholder="Bv.: 1" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Geef een alternatieve naam in voor deze rating (in het Engels).</Form.Label>
                        <Form.Control name="reviewRatingAlterName" onChange={this.handleInputChange} type="text" placeholder="Bv.: False" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Indienen
                    </Button>
                </Form>


                <Card className="mt-5">
                    <Card.Header as="h5">Google Factcheck JSON:</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p class="p-3" id="factCheckJSON">Nog niet aangemaakt.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            </div>
        );
    }
}


export default Converter;