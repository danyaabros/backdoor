function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const offset = (viewportHeight - RoadMap.sizeWindow) / 2; // Размер области в середине экрана

    return (
        rect.top <= viewportHeight / 2 + offset &&
        rect.bottom >= viewportHeight / 2 - offset
    );
}

function updateStyles() {
    const zeroBlock = document.querySelector(RoadMap.zeroBlock);
    const tnMolecules = zeroBlock.querySelectorAll('.tn-molecule');

    tnMolecules.forEach(tnMolecule => {
        const atoms = tnMolecule.querySelectorAll('.tn-atom');

        tnMolecule.style.transition = 'opacity 0.3s ease';
        tnMolecule.style.opacity = isInViewport(tnMolecule) ? RoadMap.activeOpacity : RoadMap.deactiveOpacity;
    });
}

window.addEventListener('load', updateStyles);
window.addEventListener('scroll', updateStyles);
