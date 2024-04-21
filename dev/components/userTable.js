import { LitElement, html, css } from 'lit';

class UserTable extends LitElement {
    static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid #dddddd;
      padding: 8px;
      text-align: center;
    }

    th {
      background: #f2f2f2;
    }
    `;

    static properties = {
        userData: { type: Object }
    };

    constructor() {
        super();
        this.userData = {};
    }

    render() {
        return html`
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${this.userData.name}</td>
            <td>${this.userData.email}</td>
            <td>${this.userData.age}</td>
            <td>${this.userData.role}</td>
          </tr>
        </tbody>
      </table>
    `;
    }
}

customElements.define('user-table', UserTable);