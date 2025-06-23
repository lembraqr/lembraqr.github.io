document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("keydown", e => {
    const key = e.key.toLowerCase();
    if (
        e.key === "F12" ||
        (e.ctrlKey && (key === "i" || key === "s" || key === "u"))
    ) {
        e.preventDefault();
        alert("[BLOCK] O Painel de Desenvolvedor está desativado.");
    }
});


function redirectOnDevTools() {
    window.location.replace("about:blank"); 
}

(function detectDevTools() {
    let devToolsOpen = false;

    const checkDevTools = () => {
        const element = new Image();
        Object.defineProperty(element, "id", {
            get: () => {
                devToolsOpen = true;
                redirectOnDevTools();  
            }
        });
        console.log(element);
    };

    const checkPerformance = () => {
        const start = performance.now();
        debugger;  
        const end = performance.now();
        if (end - start > 100) {
            devToolsOpen = true;
            redirectOnDevTools();  
        }
    };


    checkDevTools();
    checkPerformance();

    setInterval(() => {
        checkDevTools();
        checkPerformance();
    }, 1000); 
})();
