import "./Overlay.css";

function Overlay({ isBurgerMenuOpen }) {
  return (
    <div className={isBurgerMenuOpen ? "overlay" : "overlay-hidden"}></div>
  );
}

export default Overlay;
