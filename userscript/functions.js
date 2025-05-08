// functions.js – Hulpfuncties voor GrepoBot

const GrepoBotFunctions = (() => {
    /**
     * Bereken afstand tussen twee steden (Pythagoras)
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @returns {number}
     */
    function calculateDistance(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Format getal met punten (duizendtallen)
     * @param {number} num
     * @returns {string}
     */
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    /**
     * Haal coördinaten uit stad-string (bijv. "Athene (456|321)")
     * @param {string} name
     * @returns {[number, number] | null}
     */
    function extractCoords(name) {
        const match = name.match(/\((\d+)\|(\d+)\)/);
        return match ? [parseInt(match[1]), parseInt(match[2])] : null;
    }

    return {
        calculateDistance,
        formatNumber,
        extractCoords
    };
})();

// Voor gebruik in andere modules:
// GrepoBotFunctions.calculateDistance(100, 200, 120, 240);
// GrepoBotFunctions.formatNumber(1234567);
// GrepoBotFunctions.extractCoords("Sparta (123|456)");
