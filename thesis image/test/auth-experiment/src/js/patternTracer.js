// This file contains the logic for tracing patterns with the mouse. 
// It captures mouse movements and validates the traced pattern against predefined templates.

const patternCanvas = document.getElementById('patternCanvas');
const ctx = patternCanvas.getContext('2d');
let isDrawing = false;
let tracedPattern = [];

// Load predefined patterns from the pattern templates
const predefinedPatterns = []; // This should be populated with actual patterns from pattern-templates.js

function startDrawing(event) {
    isDrawing = true;
    tracedPattern = [];
    draw(event);
}

function endDrawing() {
    isDrawing = false;
    validatePattern();
    ctx.clearRect(0, 0, patternCanvas.width, patternCanvas.height); // Clear the canvas after validation
}

function draw(event) {
    if (!isDrawing) return;

    const rect = patternCanvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    tracedPattern.push({ x, y });

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    ctx.lineTo(x, y);
    ctx.stroke();
}

function validatePattern() {
    // Logic to validate the traced pattern against predefined patterns
    const isValid = predefinedPatterns.some(pattern => {
        return JSON.stringify(pattern) === JSON.stringify(tracedPattern);
    });

    if (isValid) {
        alert('Pattern validated successfully!');
        // Proceed to the next step in the authentication flow
    } else {
        alert('Invalid pattern. Please try again.');
        // Optionally, reset the tracing
    }
}

// Event listeners for mouse actions
patternCanvas.addEventListener('mousedown', startDrawing);
patternCanvas.addEventListener('mouseup', endDrawing);
patternCanvas.addEventListener('mousemove', draw);
patternCanvas.addEventListener('mouseleave', endDrawing);