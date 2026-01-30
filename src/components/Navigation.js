export function initNavigation() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    headerPlaceholder.innerHTML = `
    <header>
        <div class="header-content">
            <button class="hamburger" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-nav">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav id="main-nav">
                <a href="/yehji-school/index.html">Home</a>
                <a href="/yehji-school/outcomes.html">Outcomes</a>
                <a href="/yehji-school/assignments.html">Assignments</a>
                <a href="/yehji-school/schedule.html">Schedule</a>
                <a href="/yehji-school/resources.html">Resources</a>
                <a href="/yehji-school/expectations.html">Expectations</a>
            </nav>
        </div>
    </header>
    `;

    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            const isExpanded = hamburger.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInside = hamburger.contains(event.target) || nav.contains(event.target);
            if (!isClickInside && nav.classList.contains('active')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
}
