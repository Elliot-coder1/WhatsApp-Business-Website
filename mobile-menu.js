class MobileMenu extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    padding: 1rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                }
                .mobile-menu.active {
                    display: block;
                }
                .mobile-menu ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .mobile-menu li {
                    padding: 0.75rem 0;
                    border-bottom: 1px solid #f3f4f6;
                }
                .mobile-menu a {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    display: block;
                }
                .mobile-menu a:hover {
                    color: #e11d48;
                    padding-left: 8px;
                    transition: all 0.3s ease;
                }
</style>
            <div class="mobile-menu">
                <ul>
                <li><a href="#" class="hover:text-rose-600">Home</a></li>
                <li><a href="#services" class="hover:text-rose-600">Services</a></li>
                <li><a href="https://wa.me/" class="hover:text-rose-600">Chat Now</a></li>
</ul>
            </div>
        `;
    }
}

customElements.define('mobile-menu', MobileMenu);