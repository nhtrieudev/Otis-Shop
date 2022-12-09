import { toast } from "react-toastify";

function Search(props: any) {
  let handleSearch = () => {
    toast.warning(
      "Hiện tại trang web chưa có chức năng tìm kiếm. Xin lỗi vì sự bất tiện này"
    );
  };
  return (
    <>
      <div
        className={
          props.propActive
            ? "header-container__search active"
            : "header-container__search"
        }
      >
        <input
          type="text"
          className="header-container__search-input"
          placeholder="Nhập từ khóa tìm kiếm...."
        />
        <i
          onClick={handleSearch}
          className="header-container__search-icon fa-solid fa-magnifying-glass"
        ></i>
      </div>
    </>
  );
}

export default Search;
