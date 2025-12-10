export class UI {
    constructor(particleSystem) {
        this.particleSystem = particleSystem;
        this.createUI();
    }

    createUI() {
        const container = document.createElement('div');
        container.className = 'ui-container';

        // Template Selector
        const templates = ['Sphere', 'Heart', 'Flower', 'Saturn', 'Buddha', 'Fireworks'];
        const templatePanel = document.createElement('div');
        templatePanel.className = 'panel';
        templatePanel.innerHTML = '<h3>Templates</h3>';

        templates.forEach(t => {
            const btn = document.createElement('button');
            btn.textContent = t;
            btn.onclick = () => this.particleSystem.setShape(t.toLowerCase());
            templatePanel.appendChild(btn);
        });

        // Color Picker
        const colorPanel = document.createElement('div');
        colorPanel.className = 'panel';
        colorPanel.innerHTML = '<h3>Color</h3>';
        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = '#00ffff';
        colorInput.oninput = (e) => this.particleSystem.setColor(e.target.value);
        colorPanel.appendChild(colorInput);

        container.appendChild(templatePanel);
        container.appendChild(colorPanel);
        document.body.appendChild(container);
    }
}
