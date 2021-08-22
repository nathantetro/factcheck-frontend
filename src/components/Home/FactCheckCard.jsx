import React from 'react';
import ReactTooltip from "react-tooltip";
import { Card } from "react-bootstrap"

class FactCheckCard extends React.Component {
    render() {
        return <div class="col-md-4">
            <div class="mb-4 box-shadow">
                <Card className="factCheck-card">
                    <Card.Img src={this.props.thumbnailUrl} alt="Thumbnail Factcheck" />
                    <Card.Body>
                        <a target="_blank" href={this.props.url}> <Card.Title className="factCheck-title">{this.props.title}</Card.Title></a>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Gepubliceerd op {this.props.date}</small><br></br>
                        <small className="text-muted">Gepubliceerd door {this.props.publisher}</small>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    }
}


export default FactCheckCard;