const navButtons = document.querySelectorAll(".navButton");
const panels = document.querySelectorAll(".painel");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Esconde todos os paineis
    panels.forEach((panel) => (panel.style.display = "none"));

    // Mostra o painel relacionado ao botão clicado
    const panelId = button.id.replace("btn", "pnl");
    const panel = document.getElementById(panelId);
    panel.style.display = "flex";

    // Ajusta a altura e largura da div #window
    const contentHeight = panel.scrollHeight;
    const contentWidth = panel.scrollWidth;
    const windowElement = document.getElementById("window");
    windowElement.style.height = `${contentHeight}px`;
    windowElement.style.width = `${contentWidth}px`;
  });
});
