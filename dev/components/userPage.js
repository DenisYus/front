import { LitElement, html } from 'lit';

class UserPage extends LitElement {
    static properties = {
        userData: { type: Object }
    };

    constructor() {
        super();
 //       document.addEventListener('login-success', (event) => this.handleLoginSuccess(event));
        document.addEventListener('login-success', ()=>{console.log("msadmdasn")})
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
                        
                    </tr>
                </tbody>
            </table>
        `;
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