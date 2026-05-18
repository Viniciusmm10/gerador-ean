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
        const base = "789" + Utils.getRandomInt(100000000, 999999999);
        return base + this.calculateCheckDigit(base);
    },

    /**
     * Calcula o verificador
     * @param {string} base
     * @returns {number}
     */
    calculateCheckDigit: function(base) {
        const sum = base
            .split("")
            .reduce((total, digit, index) => {
                const multiplier = index % 2 === 0 ? 1 : 3;
                return total + Number(digit) * multiplier;
            }, 0);

        return (10 - (sum % 10)) % 10;
    }
};
