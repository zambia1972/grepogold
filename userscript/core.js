// core.js

/**
 * Initialiseer het script: laad configuratie, start GoldBot indien gewenst.
 */
function initCore() {
  loadConfig();
  if (config.autoStart) {
    GoldBot.start();
  }
}

// Optioneel: voeg een menu-commando toe om het Bedieningspaneel of instellingen te tonen
GM_registerMenuCommand("GrepoBot Instellingen", () => {
  ui.setup();
});

// Start de kernlogica
initCore();
