import {css, html, LitElement} from "lit";
import './newUser.js';

export class ListUsers extends LitElement {
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
        users: {type: Array}
    };

    constructor() {
        super();
        this.users = [];
        this.fetchUsers();
    }

    // async fetchUsers(){
    //     try{
    //         const response = await fetch('/api/users');
    //         const data = await response.json();
    //         this.users = data;
    //     } catch (error) {
    //         console.error('Failed to fetch users:', error);
    //     }
    // }
    async fetchUsers() {
        this.users = [
            {
                id: 1,
                name: "denis",
                email: "denis@mail.com",
                age: 12,
                roles: [
                    {name: "ADMIN_ROLE"},
                    {name: "USER_ROLE"}

                ]

            },
            {
                id: 2,
                name: "deniska",
                email: "denis1@mail.com",
                age: 22,
                roles: [
                    {name: "ADMIN_ROLE"}
                ]

            }
        ]
    }

    render() {
        return html`
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Roles</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                ${this.users.map(user => html`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.age}</td>
                        <td>${user.roles.map(role => role.name).join(', ')}</td>
                        <td>
                            <sl-button>Delete</sl-button>
                        </td>
                        <td>
                            <sl-button @click=${() => this.openEditDialog(user)}>Edit</sl-button>
                        </td>
                    </tr>
                `)}
                </tbody>
            </table>
            <dialog id="editDialog">
                <h2>Edit User</h2>
                <new-user .userData="${this.editUser}"></new-user>
                <sl-button @click=${this.closeEditDialog}>Close</sl-button>
            </dialog>
        `;
    }

    openEditDialog(user) {
        const dialog = this.shadowRoot.getElementById('editDialog');
        if (dialog) {
            const newUserComponent = this.shadowRoot.querySelector('new-user');
            newUserComponent.name = user.name;
            newUserComponent.email = user.email;
            newUserComponent.age = user.age;
            newUserComponent.roles = user.roles.map(role => role.name);
            dialog.showModal();
        }
    }

    closeEditDialog() {
        const dialog = this.shadowRoot.getElementById('editDialog');
        if (dialog) {
            this.editUser = null;
            dialog.close();
        }
    }

}

customElements.define('list-users', ListUsers);
