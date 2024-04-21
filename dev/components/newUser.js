import {html, css, LitElement} from "lit";
import './listUsers.js';
export class NewUser extends LitElement{
    static styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 20px;
    }

    input, select {
      width: 100%;
      padding: 8px;
      margin-top: 10px;
      box-sizing: border-box;
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `;

    static properties = {
        roles: { type: Array },
    };

    constructor() {
        super();
        this.name = '';
        this.age = '';
        this.email = '';
        this.password = '';
        this.selectedRole = '';
        this.roles = ['Admin', 'User', 'Manager'];
    }

    handleChange(event, prop) {
        this[prop] = event.target.value;
    }

    handleRoleChange(event) {
        this.selectedRole = event.target.value;
    }

    render() {
        return html`
      <div>
        <label for="name">Name:</label><br>
        <input type="text" id="name" .value=${this.name} @input=${(e) => this.handleChange(e, 'name')}><br><br>
      </div>
      <div>
        <label for="age">Age:</label><br>
        <input type="text" id="age" .value=${this.age} @input=${(e) => this.handleChange(e, 'age')}><br><br>
      </div>
      <div>
        <label for="email">Email:</label><br>
        <input type="email" id="email" .value=${this.email} @input=${(e) => this.handleChange(e, 'email')}><br><br>
      </div>
      <div>
        <label for="password">Password:</label><br>
        <input type="password" id="password" .value=${this.password} @input=${(e) => this.handleChange(e, 'password')}><br><br>
      </div>
      <div>
        <label for="role">Role:</label><br>
        <select id="role" @change=${this.handleRoleChange}>
          <option value="">Select Role</option>
          ${this.roles.map(role => html`<option value=${role}>${role}</option>`)}
        </select><br><br>
      </div>
      <button @click=${this.addUser}>Add User</button>
    `;
    }


}

customElements.define('new-user', NewUser);
