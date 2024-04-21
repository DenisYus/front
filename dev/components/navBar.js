import { LitElement, html, css } from 'lit';
import './listUsers.js';

class Navbar extends LitElement {
    static styles = css`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 60px;
      background-color: #333;
      color: white;
      font-size: 18px;
    }

    .left {
      display: flex;
      align-items: center;
    }

    .logout-button {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }
  `;

    static properties = {
        name: { type: String },
        role: { type: String },
    };

    constructor() {
        super();
        this.name = "John";
        this.role = "Admin";
    }

    render() {
        return html`
      <div class="left">
        <span>${this.name} with role: ${this.role}</span>
      </div>
      <button class="logout-button">Logout</button>
    `;
    }
}

customElements.define('nav-bar', Navbar);