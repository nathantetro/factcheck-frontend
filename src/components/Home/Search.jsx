import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchQuery: "", resultsTxt: "" };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearFilter = this.handleClearFilter.bind(this);

    }

    async componentDidMount() {
        const clearFilterBtn = document.getElementById("clearFilterBtn");
        clearFilterBtn.classList.add("d-none");    
      }

    // Handles submit of the search query input  
    handleSubmit(event) {
        event.preventDefault();

        Swal.fire({
            title: 'Zoeken...',
            timer: 850,
            didOpen: () => {
                Swal.showLoading()
            }
        }).then(async () => {
           let filteredData = await this.props.updateSearchQueryCallback(this.state.searchQuery);

            if (filteredData.length === 1) {
                this.setState({ resultsTxt: "resultaat" });
            } else {
                this.setState({ resultsTxt: "resultaten" });
            }

            clearFilterBtn.classList.remove("d-none");
            Swal.fire({
                text: filteredData.length + " " + this.state.resultsTxt + " gevonden.",
                toast: true,
                position: "top",
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false,
                icon: 'success',
            });

        });
    }

    // Handles input changes and will modify its state
    handleInputChange(e) {
        e.preventDefault();
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // Handles the click on the clear filter button 
    handleClearFilter(e){
        e.preventDefault();
        const target = e.target;
        target.classList.add('d-none');
        document.getElementById('searchQueryInput').value = "";
        this.props.clearSearchQueryCallback();
    }

    render() {
        return <div id="searchComponent"><p>Factchecks zoeken:</p>
            <form>
                <InputGroup className="mb-3">
                    <FormControl name="searchQuery" id="searchQueryInput" onChange={this.handleInputChange}
                        placeholder="Bijvoorbeeld: 'Corona is fake'"
                    />
                    <InputGroup.Append>
                        <Button type="submit" onClick={this.handleSubmit} variant="outline-secondary"><i class="fas fa-search mr-2"></i>Zoek</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
            <Button type="submit" id="clearFilterBtn" onClick={this.handleClearFilter} variant="danger"><i class="fas fa-times mr-2"></i>Verwijder zoekcriteria</Button>
        </div>
    }
}


export default Search;