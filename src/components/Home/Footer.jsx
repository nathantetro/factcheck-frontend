import React from 'react';
import { Link } from "react-router-dom";


class Footer extends React.Component {
  render() {
    return <footer class="banner text-center text-white">
      <div class="container p-4">
        <section>
          <a class="url" target="_blank" href="https://github.com/nathantetro/factcheck-api">Factcheck API on Github</a><br />
          <a class="url" target="_blank" href="https://github.com/nathantetro/factcheck-frontend">Frontend project on Github</a><br />
          <Link to="/converter">
            <button class="btn btn-light" variant="outlined">
              Converter
            </button>
          </Link>
        </section>
      </div>
    </footer>
  }
}


export default Footer;