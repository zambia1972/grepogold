// config.js
const defaultConfig = {
  delay: 5,            // Vertraging in seconden tussen acties
  goudLimit: 1000,     // Gouddrempel voor handel
  autoStart: false     // Automatisch starten bij laden pagina
};

let config = { ...defaultConfig };

/**
 * Laad configuratie uit opslag (of gebruik standaardwaarden).
 */
function loadConfig() {
  config.delay    = parseInt(GM_getValue('delay',    defaultConfig.delay), 10);
  config.goudLimit = parseInt(GM_getValue('goudLimit', defaultConfig.goudLimit), 10);
  config.autoStart = GM_getValue('autoStart', defaultConfig.autoStart);
}

/**
 * Sla de huidige configuratie op.
 */
function saveConfig() {
  GM_setValue('delay', config.delay);
  GM_setValue('goudLimit', config.goudLimit);
  GM_setValue('autoStart', config.autoStart);
}
