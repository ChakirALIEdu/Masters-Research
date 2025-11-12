// Main JavaScript file for the authentication experiment
// This file initializes the application, handles user interactions, and coordinates the flow between different components.

import { initializePatternTracing } from './patternTracer.js';
import { activateVigilanceMode } from './vigilanceMode.js';
import { handleAuthFlow } from './authFlow.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the authentication flow
    handleAuthFlow();

    // Initialize pattern tracing functionality
    initializePatternTracing();

    // Activate vigilance mode when necessary
    activateVigilanceMode();
});