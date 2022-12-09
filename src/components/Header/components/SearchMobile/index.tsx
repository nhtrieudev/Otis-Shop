import { toast } from "react-toastify";

function SearchMobile() {
  let handleSearch = () => {
    toast.warning(
      "Hiện tại trang web chưa có chức năng tìm kiếm. Xin lỗi vì sự bất tiện này"
    );
  };
  return (
    <>
      <div className="search-tb">
        <div className="search-tb-container">
          <input
            placeholder="Nhập từ khóa tìm kiếm..."
            type="text"
            className="search-tb-container--input"
          />
          <i
            onClick={handleSearch}
            className="search-tb-container--icon fa-solid fa-magnifying-glass"
          ></i>
        </div>
      </div>
    </>
  );
}

export default SearchMobile;
