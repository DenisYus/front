import { LitElement, html, css } from 'lit';
import './tabMenu.js';
import './userPage.js';

class SidePanel extends LitElement {
    static styles = css`
    
  `;

    render() {
        return html`
      <div>
        <sl-button variant="text" @click=${this.showAdminPage}>Admin Page</sl-button>
        <sl-button variant="text" @click=${this.showUserPage}>User Page</sl-button>
      </div>
    `;
    }

    showAdminPage() {

        const adminPage = document.querySelector('tab-menu');
        adminPage.style.display = 'block';


        const userPage = document.querySelector('user-page');
        userPage.style.display = 'none';
    }

    showUserPage() {

        const userPage = document.querySelector('user-page');
        userPage.style.display = 'block';


        const adminPage = document.querySelector('tab-menu');
        adminPage.style.display = 'none';
    }
}

customElements.define('side-panel', SidePanel);