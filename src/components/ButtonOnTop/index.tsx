function ButtonOnTop() {
  let handleOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <button className="button-on-top" onClick={handleOnTop}>
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  );
}

export default ButtonOnTop;
