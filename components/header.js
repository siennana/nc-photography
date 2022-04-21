class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #000000;
        }
        
        li {
          float: right;
        }
        
        li a {
          display: block;
          text-align: center;
          color: white;
          padding: 16px;
          text-decoration: none;
        }
      </style>

      <header>
        <nav>
          <ul>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);