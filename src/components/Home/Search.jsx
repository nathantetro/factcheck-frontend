import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

class Search extends React.Component {
    render() {
        return <div id="searchComponent"><p>Factchecks zoeken:</p>
            <form>
                <InputGroup className="mb-3">
                    <FormControl id="searchQueryInput"
                        placeholder="Bijvoorbeeld: 'Aarde is plat'"
                    />
                    <InputGroup.Append>
                        <Button type="submit" id="searchQueryBtn" variant="outline-secondary"><i class="fas fa-search mr-2"></i>Zoek</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
            <Button type="submit" id="clearFilterBtn" variant="danger"><i class="fas fa-times mr-2"></i>Verwijder zoekcriteria</Button>
        </div>
    }
}


export default Search;