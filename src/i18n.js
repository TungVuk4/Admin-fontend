import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    translation: {
      // --- Topbar & Sidebar keys ---
      search: "Tìm kiếm...",
      search_placeholder: "Tìm kiếm sản phẩm...",
      home: "Trang chủ",
      dashboard: "Bảng điều khiển",
      users: "Người dùng",
      roles: "Vai trò",
      product: "Sản phẩm",
      products_title: "Sản phẩm",
      login: "Đăng nhập",

      // --- Profile Popover keys (MỚI) ---
      profile: "Hồ sơ",
      settings: "Cài đặt",
      logout: "Đăng xuất",

      // --- Product Page Actions & Modal ---
      new_product: "Thêm sản phẩm",
      add_product_title: "Thêm sản phẩm mới",
      edit_product_title: "Cập nhật sản phẩm",
      product_name: "Tên sản phẩm",
      product_price: "Giá tiền",
      select_category: "Chọn danh mục",
      save: "Lưu lại",
      delete: "Xóa sản phẩm",
      cancel: "Hủy bỏ",

      // --- Filter Sidebar keys ---
      filters: "Bộ lọc",
      gender: "Giới tính",
      men: "Nam",
      price: "Giá",
      clear: "Xóa tất cả",
      apply: "Áp dụng",
      category: "Danh mục sản phẩm",

      // Nhóm Áo Nam
      group_tops: "Áo Nam",
      tanktop: "Áo Tanktop",
      t_shirt: "Áo thun",
      sport_shirt: "Áo Thể Thao",
      polo: "Áo Polo",
      shirt: "Áo Sơ Mi",
      long_sleeve: "Áo Dài Tay",
      sweater: "Áo Sweater",
      hoodie: "Áo Hoodie",
      jacket: "Áo Khoác",
      graphic_tshirt: "Áo thun Graphic",

      // Nhóm Quần Nam
      group_bottoms: "Quần Nam",
      short: "Quần Short",
      jogger: "Quần Jogger",
      sport_pants: "Quần Thể Thao",
      long_pants: "Quần Dài",
      pants: "Quần Pants",
      jeans: "Quần Jean",
      khaki: "Quần Kaki",
      swimwear: "Quần Bơi",

      // Nhóm Quần Lót
      group_underwear: "Quần Lót Nam",
      brief: "Brief (Tam giác)",
      trunk: "Trunk (Boxer)",
      boxer_brief: "Boxer Brief (Boxer dài)",
      long_leg: "Long Leg",
      homewear: "Short mặc nhà",

      // Phụ kiện
      group_accessories: "Phụ kiện",
      all_accessories: "Tất cả phụ kiện (Tất, mũ, túi...)",

      // --- Sort keys ---
      sort_by: "Sắp xếp theo",
      sort_featured: "Nổi bật",
      sort_newest: "Mới nhất",
      sort_price_high: "Giá: Cao đến Thấp",
      sort_price_low: "Giá: Thấp đến Cao",
    },
  },
  en: {
    translation: {
      search: "Search...",
      search_placeholder: "Search product...",
      home: "Home",
      profile: "Profile",
      settings: "Settings",
      logout: "Logout",
      product: "Product",
      products_title: "Products",
      login: "Sign in",
      new_product: "New Product",
      add_product_title: "Add New Product",
      edit_product_title: "Update Product",
      product_name: "Product Name",
      product_price: "Price",
      select_category: "Select Category",
      save: "Save",
      delete: "Delete",
      cancel: "Cancel",
      filters: "Filters",
      gender: "Gender",
      men: "Men",
      category: "Category",
      price: "Price",
      clear: "Clear All",
      apply: "Apply",

      // Groups & Categories
      group_tops: "Men's Tops",
      tanktop: "Tanktop",
      t_shirt: "T-Shirt",
      group_bottoms: "Men's Bottoms",
      group_underwear: "Men's Underwear",
      group_accessories: "Accessories",
      all_accessories: "All Accessories",

      // Sort
      sort_by: "Sort By",
      sort_featured: "Featured",
      sort_newest: "Newest",
      sort_price_high: "Price: High-Low",
      sort_price_low: "Price: Low-High",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", // Ngôn ngữ mặc định
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
