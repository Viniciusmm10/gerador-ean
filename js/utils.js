/**
 * Utilitários gerais da aplicação
 * Funções auxiliares que não dependem do domínio específico.
 */

const Utils = {
    /**
     * Copia um texto para a área de transferência
     * @param {string} text - Texto a ser copiado
     */
    copyToClipboard: function(text) {
        // Implementação futura
        console.log(`[Utils] Copiando para clipboard: ${text}`);
    },

    /**
     * Gera um número aleatório entre min e max (inclusivo)
     */
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};