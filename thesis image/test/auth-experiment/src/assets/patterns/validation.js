function validatePattern(tracedPattern, predefinedPatterns) {
    for (let pattern of predefinedPatterns) {
        if (JSON.stringify(tracedPattern) === JSON.stringify(pattern)) {
            return true; // Pattern matches
        }
    }
    return false; // No match found
}

function isValidPattern(tracedPattern) {
    // Add any additional validation logic here if needed
    return tracedPattern.length > 0; // Example: ensure the pattern is not empty
}

export { validatePattern, isValidPattern };