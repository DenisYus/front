import './listUsers.js';
import './newUser.js';
import {LitElement, html, css} from 'lit';


export class TabMenu extends LitElement {
    static get styles() {
        return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
    }

    static get properties() {
        return {
            /**
             * The name to say "Hello" to.
             * @type {string}
             */
            name: {type: String},


        };
    }

    constructor() {
        super();
        //this.fetchUsers();
    }
    async fetchUsers(){
        this.users= [
            {
                id:1,
                name:"denis",
                email:"denis@mail.com",
                age:12,
                roles:[
                    {name:"ADMIN_ROLE"},
                    {name:"USER_ROLE"}

                ]

            },
            {
                id:2,
                name:"deniska",
                email:"denis1@mail.com",
                age:22,
                roles:[
                    {name:"ADMIN_ROLE"}
                ]

            }
        ]
    }
    render() {
        return html`
      <h1>${this.adminPanel()}</h1>
      
      <sl-tab-group>
          <sl-tab slot="nav" panel="general">User Table</sl-tab>          
          <sl-tab-panel name="general">All users <list-users></list-users> </sl-tab-panel>
          
          
          <sl-tab slot="nav" panel="custom">New User </sl-tab>   
          <sl-tab-panel name="custom">Add new user <new-user></new-user> </sl-tab-panel>
      </sl-tab-group>

      <slot></slot>
      
        `;
    }
    adminPanel() {
        return `Admin panel`;
    }
}

window.customElements.define('tab-menu', TabMenu);
