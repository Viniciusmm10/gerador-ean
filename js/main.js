/**
 * Script Principal (Entry Point)
 * Inicializa a aplicação e manipula os eventos do DOM.
 */

document.addEventListener('DOMContentLoaded', () => {
    const btnGenerate = document.getElementById('btn-generate');
    const btnCopy = document.getElementById('btn-copy');
    const eanDisplay = document.getElementById('ean-display');
    const eanCodeSpan = document.getElementById('ean-code');
    const initialEanText = (eanCodeSpan.textContent || '').trim();
    const confirmModal = document.getElementById('ean-confirm-modal');
    const confirmCancel = document.getElementById('ean-confirm-cancel');
    const confirmAccept = document.getElementById('ean-confirm-accept');

    let confirmResolve = null;

    const openConfirmModal = () => new Promise((resolve) => {
        confirmResolve = resolve;
        confirmModal.classList.add('active');
        confirmModal.setAttribute('aria-hidden', 'false');
        confirmCancel.focus();
    });

    const closeConfirmModal = (result) => {
        confirmModal.classList.remove('active');
        confirmModal.setAttribute('aria-hidden', 'true');
        if (confirmResolve) {
            confirmResolve(result);
            confirmResolve = null;
        }
    };

    confirmCancel.addEventListener('click', () => closeConfirmModal(false));
    confirmAccept.addEventListener('click', () => closeConfirmModal(true));
    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) closeConfirmModal(false);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && confirmModal.classList.contains('active')) closeConfirmModal(false);
    });

    // Ícone SVG para restaurar após copiar
    const copyIconSVG = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    `;

    // Ícone SVG de sucesso
    const successIconSVG = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    `;

    // Evento: Gerar EAN
    btnGenerate.addEventListener('click', async () => {
        const currentEan = (eanCodeSpan.textContent || '').trim();
        const hasGeneratedEan = currentEan.length > 0 && currentEan !== initialEanText;
        const useNativeConfirm = false;

        if (hasGeneratedEan) {
            if (useNativeConfirm) {
                const shouldContinue = window.confirm('Você já gerou um EAN. Gerar outro vai substituir o atual. Deseja continuar?');
                if (!shouldContinue) return;
            } else {
                const shouldContinue = await openConfirmModal();
                if (!shouldContinue) return;
            }
        }

        // Reset animation
        eanCodeSpan.classList.remove('animate-pop');
        void eanCodeSpan.offsetWidth; // Force reflow

        // Generate new code
        const newEan = EANGenerator.generate();
        eanCodeSpan.textContent = newEan;
        
        // Add animation
        eanCodeSpan.classList.add('animate-pop');

        // Verificação silenciosa (opcional/futura)
        await GS1Service.verifyEAN(newEan);
    });

    // Evento: Copiar EAN
    btnCopy.addEventListener('click', () => {
        const currentEan = eanCodeSpan.textContent;
        Utils.copyToClipboard(currentEan);
        
        // Visual Feedback
        eanDisplay.classList.add('flash-success');
        btnCopy.innerHTML = successIconSVG;
        btnCopy.style.color = '#22c55e';
        btnCopy.style.borderColor = '#22c55e';
        
        setTimeout(() => {
            eanDisplay.classList.remove('flash-success');
            btnCopy.innerHTML = copyIconSVG;
            btnCopy.style.color = '';
            btnCopy.style.borderColor = '';
        }, 1500);
    });
});
