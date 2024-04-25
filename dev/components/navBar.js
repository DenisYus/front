import { LitElement, html, css } from 'lit';


class Navbar extends LitElement {
    static styles = css`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        //height: 60px;
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
        margin-left: 10px;
      }
    `;

    static properties = {
        userData: { type: Object }
    };

    constructor() {
        super();
        this.userData = {};
        this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
        document.addEventListener('login-success', this.handleLoginSuccess);
        this.handleLogout = this.handleLogout.bind(this);
    }

    render() {
        return html`
            <div>
            <div class="left">                
                ${this.userData.email ? html`${this.userData.email} with roles: ${this.renderRoles(this.userData.roles)}` : html``}
            </div>
                <button class="logout-button" @click="${this.handleLogout}">Logout</button>       
            </div>
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
    handleLogout() {

        this.userData = {}; // Очищаем данные о пользователе
        document.querySelector('login-form').style.display = 'block'; // Показываем форму входа
        document.querySelector('nav-bar').style.display = 'none'; // Скрываем навигационную панель
        document.querySelector('user-page').style.display = 'none'; // Скрываем страницу пользователя
    }

    handleLoginSuccess(event) {
        if (event.detail) {
            if (event.detail) {
                console.log(event.detail)
                this.userData = event.detail;
            }
        }
    }
}

customElements.define('nav-bar', Navbar);