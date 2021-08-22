import React from 'react';


class Banner extends React.Component {
    render() {
        return <div className="jumbotron rounded shadow banner">

            <div className="container ">
                <h1 className="display-4 font-weight-bold">Factcheck Hub</h1>
                <p className="lead">Een platform dat Vlaamse factchecks overzichtelijk op 1 centrale plaats toont.</p>
            </div>
        </div>;
    }
}


export default Banner;