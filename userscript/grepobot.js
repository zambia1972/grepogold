// grepobot.js – Core logica voor GrepoBot

function GrepoBot() {
    this.config = loadConfig();
    this.running = false;
}

GrepoBot.prototype.start = function () {
    if (this.running) {
        this.log("GrepoBot draait al.");
        return;
    }
    this.running = true;
    this.log("GrepoBot gestart met config:");
    for (const key in this.config) {
        this.log(` - ${key}: ${this.config[key]}`);
    }
};

GrepoBot.prototype.stop = function () {
    if (!this.running) {
        this.log("GrepoBot is niet actief.");
        return;
    }
    this.running = false;
    this.log("GrepoBot gestopt.");
};

GrepoBot.prototype.log = function (message) {
    console.log(`[GrepoBot] ${message}`);
};

// Initialisatie
(function () {
    'use strict';
    const bot = new GrepoBot();
    bot.start();
})();
