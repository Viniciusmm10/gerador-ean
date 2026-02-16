/**
 * Gerador
 * Regras de Négicio estão aqui
 */

const EANGenerator = {
    /**
    
     * @returns {string} Código EAN-13
     */
    generate: function() {
        // Implementação futura
        console.log("[EANGenerator] Gerando novo código...");
        return "789" + Utils.getRandomInt(100000000, 999999999); // Mock temporário
    },

    /**
     * Calcula o verificador
     * @param {string} base
     * @returns {number}
     */
    calculateCheckDigit: function(base) {
        return 0;
    }
};