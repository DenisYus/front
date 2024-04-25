import { LitElement, html, css } from 'lit';

class UserPage extends LitElement {
    static styles = css`
      table {
        width: 80%;
        margin: auto;
        border-collapse: collapse;
      }

      thead th {
        background-color: #f2f2f2;
        color: red;
        padding: 10px;
        text-align: left;
        position: relative;
      }

      thead th::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #333;
      }

      tbody td {
        padding: 8px;
      }

      tbody tr:nth-child(even) {
        background-color: #f9f9f9;
      }

      tbody tr:hover {
        background-color: #f2f2f2;
      }
    `;
    static properties = {
        userData: { type: Object }
    };

    constructor() {
        super();
       document.addEventListener('login-success', (event) => this.handleLoginSuccess(event));
        this.userData = {};
    }

    render() {
        return html`
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Roles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${this.userData.name}</td>
                        <td>${this.userData.age}</td>
                        <td>${this.userData.email}</td>
                        ${this.renderRoles(this.userData.roles)}
                    </tr>
                </tbody>
            </table>
        `;
    }
    renderRoles(roles) {
        if (!roles || roles.length === 0) {
            return html``;
        }
        return html`
            <ul>
                ${roles.map(role => html`<li>${this.formatRole(role.userRole)}</li>`)}
            </ul>
        `;
    }
    formatRole(role) {

        if (role.startsWith("ROLE_")) {
            return role.substring(5);
        }
        return role;
    }

    handleLoginSuccess(event) {
        console.log(event.detail)
        if (event.detail) {
            console.log(event.detail)
            this.userData = event.detail;
        }
    }
}

customElements.define('user-page', UserPage);