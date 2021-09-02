import React from 'react';
import Banner from '../components/Home/Banner.jsx';
import Search from '../components/Home/Search.jsx';
import FactCheckCard from '../components/Home/FactCheckCard.jsx';
import Footer from '../components/Home/Footer.jsx'
import * as restClient from "../rest/restClient.jsx"


class Home extends React.Component {
  constructor() {
    super();
    this.state = { data: [], searchQuery: "", resultsTxt: "resultaten" };

  }

  // Change the state of the search query and call the function that will filter the data
  handleUpdateSearchQuery = (query) => {
    this.setState({ searchQuery: query.toLowerCase() })
    return this.filterData();
  }

  // Filter data and return the filtered data
  filterData = async () => {
    const allFactChecks = await restClient.getAllFactChecks();
    const filteredData = allFactChecks.filter(factCheck => factCheck.title.toLowerCase().includes(this.state.searchQuery) || factCheck.description.toLowerCase().includes(this.state.searchQuery));
    this.setState({ data: filteredData })

    if (filteredData.length === 1) {
      this.setState({ resultsTxt: "resultaat" });
    } else {
      this.setState({ resultsTxt: "resultaten" });
    }

    return filteredData;
  }

  // Clear the filter and reset the data
  handleClearFilter = async () => {
    const allFactChecks = await restClient.getAllFactChecks();
    this.setState({ data: allFactChecks });
  }

  async componentDidMount() {
    const allFactChecks = await restClient.getAllFactChecks();
    this.setState({ data: allFactChecks });
  }

  render() {
    return <div id="page-container">
      <div className="container mt-5" id="content-wrap">
        <Banner />
        <div className="mb-5">
          <Search updateSearchQueryCallback={this.handleUpdateSearchQuery} clearSearchQueryCallback={this.handleClearFilter} data={this.state.data} />
        </div>
        <hr />
        <div className="row mt-5 mb-2 ml-1">
          <p>{this.state.data.length} {this.state.resultsTxt}</p>
        </div>
        <div className="row">
          {
            this.state.data.map(factCheck =>
              <FactCheckCard key={factCheck.url} date={factCheck.date} publisher={factCheck.publisher} url={factCheck.url} description={factCheck.description} title={factCheck.title} thumbnailUrl={"https://" + factCheck.thumbnail} />
            )
          }
        </div>
      </div>
      <Footer id="footer" />
    </div>

  }
}


export default Home;