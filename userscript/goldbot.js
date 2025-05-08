// goldbot.js – Automatische goudacties (bijv. grondstoffenhandel, tempels, etc.)

const GrepoBotGold = (() => {
    let isRunning = false;
    let intervalId = null;

    /**
     * Start automatisch goudgebruik (dummyvoorbeeld)
     */
    function start() {
        if (isRunning) return;
        isRunning = true;
        GrepoBotUI.log("GoldBot gestart.");

        intervalId = setInterval(() => {
            try {
                // Voorbeeld: klik op "Handel met goud" knop als beschikbaar
                const goldButton = document.querySelector(".premium_trade_button:not(.disabled)");
                if (goldButton) {
                    goldButton.click();
                    GrepoBotUI.log("Handel uitgevoerd met goud.");
                }
            } catch (err) {
                GrepoBotUI.log("GoldBot fout: " + err.message);
            }
        }, 10000); // elke 10s
    }

    /**
     * Stop goudacties
     */
    function stop() {
        if (!isRunning) return;
        clearInterval(intervalId);
        isRunning = false;
        GrepoBotUI.log("GoldBot gestopt.");
    }

    return {
        start,
        stop
    };
})();
