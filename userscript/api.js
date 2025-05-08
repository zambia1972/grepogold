// api.js
const api = {
  /**
   * Haal overzicht van steden op.
   * @returns {Array} Lijst van steden met {id, naam, goud, ...}
   */
  getCities: function() {
    // TODO: Vervang met echte dataophaling
    return []; // Bijv. [{id:1, naam:'Athene', goud:1500}, ...]
  },

  /**
   * Haal overzicht van spelers op.
   * @returns {Array} Lijst van spelers met {id, naam, rang, ...}
   */
  getPlayers: function() {
    // TODO: Vervang met echte dataophaling
    return [];
  },

  /**
   * Haal overzicht van allianties op.
   * @returns {Array} Lijst van allianties met {id, naam, leden, ...}
   */
  getAlliances: function() {
    // TODO: Vervang met echte dataophaling
    return [];
  },

  /**
   * Haal overzicht van aanvallen op (bijv. inkomend/uitgaand).
   * @returns {Array} Lijst van aanvallen met relevante data
   */
  getAttacks: function() {
    // TODO: Vervang met echte dataophaling
    return [];
  },

  /**
   * Voer een goudhandeling uit vanuit een stad.
   * @param {number} cityId ID van de stad
   * @param {number} amount  Hoeveelheid goud
   * @param {string} target   Bestemming ('alliantie', 'stadId', etc.)
   */
  tradeGold: function(cityId, amount, target) {
    // TODO: Implementeer de GM_xmlhttpRequest naar de handel-API van Grepolis
    console.log(`Trade ${amount} gold from city ${cityId} to ${target}`);
  },

  /**
   * Verleen een gunst vanuit een stad aan een speler.
   * @param {number} cityId       ID van de stad
   * @param {number} targetPlayer ID van de speler
   */
  giveFavor: function(cityId, targetPlayer) {
    // TODO: Implementeer gunst-verlenen API-call
    console.log(`Give favor from city ${cityId} to player ${targetPlayer}`);
  },

  /**
   * Start een festival in een stad.
   * @param {number} cityId ID van de stad
   */
  startFestival: function(cityId) {
    // TODO: Implementeer festival-start API-call
    console.log(`Start festival in city ${cityId}`);
  }
};

