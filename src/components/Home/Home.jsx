import React from 'react';
import Banner from './Banner.jsx';
import Search from './Search.jsx';
import FactCheckCard from './FactCheckCard.jsx';
import Footer from './Footer.jsx'
import * as restClient from "../../rest/restClient.jsx"
import Swal from 'sweetalert2'


class Home extends React.Component {
  constructor() {
    super();
    this.state = { data: [], searchQuery: "", resultsTxt: "resultaten" };

  }

  async componentDidMount() {
    const clearFilterBtn = document.getElementById("clearFilterBtn");
    const searchQueryBtn = document.getElementById("searchQueryBtn");
    
    clearFilterBtn.classList.add("d-none");


    let allFactChecks = await restClient.getAllFactChecks();
    this.setState({ data: allFactChecks });


    clearFilterBtn.addEventListener("click", () => {
      this.setState({ data: allFactChecks });
      document.getElementById("searchQueryInput").value = "";
      clearFilterBtn.classList.add("d-none");
    });


    searchQueryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Zoeken...',
        timer: 850,
        didOpen: () => {
          Swal.showLoading()
        }
      }).then(() => {
        const searchQueryInput = document.getElementById("searchQueryInput").value.toLowerCase();
        const filteredData = allFactChecks.filter(factCheck => factCheck.title.toLowerCase().includes(searchQueryInput) || factCheck.description.toLowerCase().includes(searchQueryInput));
        this.setState({ data: filteredData });

        if (this.state.data.length === 1) {
          this.setState({ resultsTxt: "resultaat" });
        } else {
          this.setState({ resultsTxt: "resultaten" });
        }

        clearFilterBtn.classList.remove("d-none");


        Swal.fire({
          text: this.state.data.length + " " + this.state.resultsTxt + " gevonden.",
          toast: true,
          position: "top",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
          icon: 'success',
        });

      });
    });
  }


  render() {
    return <div id="page-container">
      <div className="container mt-5" id="content-wrap">
        <Banner />
        <div className="mb-5">
          <Search />
        </div>
        <hr />
        <div className="row mt-5 mb-2 ml-1">
          <p>{this.state.data.length} {this.state.resultsTxt}</p>
        </div>
        <div className="row">
          {
            this.state.data.map(factCheck =>
              <FactCheckCard date={factCheck.date} publisher={factCheck.publisher} url={factCheck.url} description={factCheck.description} title={factCheck.title} thumbnailUrl={"https://" + factCheck.thumbnail} />
            )
          }
        </div>
      </div>
      <Footer id="footer" />
    </div>

  }
}


export default Home;