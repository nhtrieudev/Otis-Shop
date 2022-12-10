function ButtonOnTop() {
  let handleOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <button onClick={handleOnTop} className="button-on-top">
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  );
}

export default ButtonOnTop;
