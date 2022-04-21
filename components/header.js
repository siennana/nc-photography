class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
          padding: 3rem 5rem 2rem 5rem;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand {
          color: white;
          font-size: 3rem;
          font-weight: 800;
          margin: 0;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        li {
          float: right;
          padding: 0 0 0 2rem;
        }
        li a {
          display: block;
          text-align: center;
          color: white;
          text-decoration: none;
        }
        @media only screen and (max-width: 940px) {
          header {
            text-align: center;
            padding: 3rem 2rem 2rem 2rem;
          }
          nav {
            flex-direction: column;
          }
          li {
            float: left;
            padding: 0 0 0 1rem;
          }
        }
      </style>

      <header>
        <nav>
          <h1 class="brand">NOAH CYRIL</h1>
          <ul>
            <li><a href="#">PHOTOGRAPHY</a></li>
            <li><a href="#">VIDEO</a></li>
            <li><a href="#">ABOUT ME</a></li>
            <li><a href="#">CONTACT ME</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);