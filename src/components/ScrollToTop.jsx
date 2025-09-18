export default function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-to-top-container">
      <button className="scroll-to-top-arrow" onClick={handleScrollToTop}>
        ↑
      </button>
    </div>
  );
}
