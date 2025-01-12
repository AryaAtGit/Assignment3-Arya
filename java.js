document.addEventListener('DOMContentLoaded', () => {
    // Add classes for mobile navigation toggling
    const CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    if (CShamburgerMenu) {
        CShamburgerMenu.addEventListener('click', function() {
            CShamburgerMenu.classList.toggle("cs-active");
            CSnavbarMenu.classList.toggle("cs-active");
            CSbody.classList.toggle("cs-open");
            ariaExpanded();
        });
    }

    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        if (csUL) {
            const csExpanded = csUL.getAttribute('aria-expanded');
            csUL.setAttribute('aria-expanded', csExpanded === 'false' ? 'true' : 'false');
        }
    }

    document.addEventListener('scroll', () => {
        const scroll = document.documentElement.scrollTop;
        CSbody.classList.toggle('scroll', scroll >= 100);
    });

    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        item.addEventListener('click', () => {
            item.classList.toggle('cs-active');
        });
    }

    class CS_GalleryFilter {
        filtersSelector = '.cs-button';
        galleriesSelector = '.cs-gallery';
        activeClass = 'cs-active';
        hiddenClass = 'cs-hidden';

        constructor() {
            this.$galleries = document.querySelectorAll(this.galleriesSelector);
            const $filters = document.querySelectorAll(this.filtersSelector);

            if ($filters.length > 0) {
                this.onClick($filters[0]);
                for (const $filter of $filters) {
                    $filter.addEventListener('click', () => this.onClick($filter));
                }
            }
        }

        onClick($filter) {
            this.filter($filter.dataset.filter);

            const { activeClass } = this;

            this.$activeFilter?.classList.remove(activeClass);
            $filter.classList.add(activeClass);

            this.$activeFilter = $filter;
        }

        filter(filter) {
            const showAll = filter === 'all';
            const { hiddenClass } = this;

            for (const $gallery of this.$galleries) {
                const show = showAll || $gallery.dataset.category === filter;
                $gallery.classList.toggle(hiddenClass, !show);
            }
        }
    }

    new CS_GalleryFilter();
});