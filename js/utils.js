/**
 * Utilitários gerais da aplicação
 * Funções auxiliares que não dependem do domínio específico.
 */

const Utils = {
    /**
     * Copia um texto para a área de transferência
     * @param {string} text - Texto a ser copiado
     */
    copyToClipboard: async function(text) {
        if (!navigator.clipboard || !window.isSecureContext) {
            throw new Error("Clipboard indisponível neste navegador.");
        }

        await navigator.clipboard.writeText(text);
    },

    /**
     * Gera um número aleatório entre min e max (inclusivo)
     */
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
