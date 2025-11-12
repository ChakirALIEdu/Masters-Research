// This file manages the vigilance mode, displaying the overlay and enforcing the requirement for users to trace the pattern before proceeding.

document.addEventListener('DOMContentLoaded', () => {
    const vigilanceOverlay = document.createElement('div');
    vigilanceOverlay.id = 'vigilanceOverlay';
    vigilanceOverlay.innerHTML = `
        <div class="overlay-content">
            <h2>VIGILANCE MODE ACTIVATED</h2>
            <p>Trace the pattern to proceed.</p>
            <canvas id="patternCanvas" width="300" height="300"></canvas>
            <button id="confirmPattern" class="btn">Confirm Pattern</button>
        </div>
    `;
    document.body.appendChild(vigilanceOverlay);

    const patternCanvas = document.getElementById('patternCanvas');
    const ctx = patternCanvas.getContext('2d');
    let isDrawing = false;
    let pattern = [];

    patternCanvas.addEventListener('mousedown', startDrawing);
    patternCanvas.addEventListener('mousemove', draw);
    patternCanvas.addEventListener('mouseup', stopDrawing);
    patternCanvas.addEventListener('mouseleave', stopDrawing);
    document.getElementById('confirmPattern').addEventListener('click', validatePattern);

    function startDrawing(event) {
        isDrawing = true;
        pattern.push({ x: event.offsetX, y: event.offsetY });
        draw(event);
    }

    function draw(event) {
        if (!isDrawing) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(pattern[pattern.length - 1].x, pattern[pattern.length - 1].y);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        pattern.push({ x: event.offsetX, y: event.offsetY });
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }

    function validatePattern() {
        // Placeholder for pattern validation logic
        const isValid = true; // Replace with actual validation logic
        if (isValid) {
            alert('Pattern confirmed! You may proceed.');
            vigilanceOverlay.style.display = 'none';
        } else {
            alert('Invalid pattern. Please try again.');
            ctx.clearRect(0, 0, patternCanvas.width, patternCanvas.height);
            pattern = [];
        }
    }
});