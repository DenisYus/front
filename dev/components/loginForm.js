
import {css, html, LitElement} from 'lit';



class LoginForm extends LitElement {
    static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      margin: auto;
      width: 300px;
    }

    form {
      background-color: #f7f7f7;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
    }

    input[type="email"],
    input[type="password"],
    button {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      box-sizing: border-box;
    }

    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }
  `;
    static properties = {
        email: { type: String },
        password: { type: String }
    };

    constructor() {
        super();
        this.email = '';
        this.password = '';

    }

    render() {
        return html`
      <form @submit=${this._handleSubmit}>
        <input type="email" placeholder="Email" .value=${this.email} @input=${this._handleEmailChange}>
        <input type="password" placeholder="Password" .value=${this.password} @input=${this._handlePasswordChange}>
        <button type="submit">Login</button>
      </form>
     
    `;
    }


    _handleEmailChange(event) {
        this.email = event.target.value;
    }

    _handlePasswordChange(event) {
        this.password = event.target.value;
    }

    async _handleSubmit(event) {
        event.preventDefault();
        const response = await this._login(this.email, this.password);
        if (response.ok) {
            const tokenData = await response.json();
            localStorage.setItem('jwtToken', tokenData.token);
            const profileResponse = await fetch('/api/users/profile', {
                headers: {
                    'Authorization': `Bearer ${tokenData.token}`
                }
            });
            if (profileResponse.ok) {
                const profileData = await profileResponse.json();
                const loginevent = new CustomEvent('login-success', { detail: profileData });
                document.dispatchEvent(loginevent);
            }
            else {
                console.error('Login failed');
            }
        }
    }

    async _login(email, password) {
        const payload = {
            email: email,
            password: password
        };
        const url = '/api/auth/authentication';
        const acceptContentType = 'application/json';
        const requestContentType = 'application/json';

        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': acceptContentType,
                'Content-Type': requestContentType
            },
            body: JSON.stringify(payload)
        });
    }
}

customElements.define('login-form', LoginForm);