// Incase the user opens our website on a browser that hasn't implemented the fill function in their Array.prototype they can use our function
if (!Array.prototype.fill) {
    // Fallback - Polyfill
    Array.prototype.fill = function() {
        
    }
}