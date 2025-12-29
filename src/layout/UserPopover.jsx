import React, { useRef, useState, useEffect } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function UserPopover() {
  const { t } = useTranslation();
  const op = useRef(null);
  const navigate = useNavigate();

  const [visibleProfile, setVisibleProfile] = useState(false);
  const [visibleSettings, setVisibleSettings] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const userData = {
    name: "JimVu",
    email: "vutung@gmail.com",
    role: "ADMINISTRATOR",
    avatar:
      "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/456085326_1629435794569402_8130330138360519485_n.jpg?stp=cp6_dst-jpg_s160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=3pz9vS1MMiEQ7kNvwEVXsqw&_nc_oc=Admc2a_xonGOIv7GoiEK8mEKwIwV49GsPfQ-puL25FSpTUupiMedLyTyIbaVAyqAm0A&_nc_zt=24&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=FDtzbzk7Y3oyMCm-oezTQQ&oh=00_AflfMhA1khbqHL1kcJgsSaYmFykrxKgFtuGhmRaJ_4O1zg&oe=6957DD9C",
  };

  return (
    <div className="flex items-center">
      <div
        className="relative flex items-center p-1 rounded-full hover:bg-gray-100 cursor-pointer transition-all active:scale-95"
        onClick={(e) => op.current.toggle(e)}
      >
        <img
          src={userData.avatar}
          alt="avatar"
          className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
        />
        <span
          className={`absolute bottom-1 right-1 w-2.5 h-2.5 border-2 border-white rounded-full ${
            isDarkMode ? "bg-gray-500" : "bg-green-500"
          }`}
        ></span>
      </div>

      <OverlayPanel
        ref={op}
        className="p-0 shadow-2xl border-none rounded-[20px] overflow-hidden mt-2 dark:bg-[#1C252E]"
      >
        <div className="w-[240px]">
          <div className="px-6 py-5 flex flex-col bg-gray-50/50 dark:bg-[#212B36]">
            <span className="font-bold text-[#212B36] dark:text-white text-[16px]">
              {userData.name}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-[13px]">
              {userData.email}
            </span>
          </div>
          <div className="border-t border-dashed border-gray-200 dark:border-gray-700"></div>
          <div className="flex flex-col p-2 gap-1">
            <Button
              label={t("home")}
              icon="pi pi-home"
              className="p-button-text text-[#212B36] dark:text-gray-300 text-sm text-left px-4 py-3 border-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
              onClick={() => {
                navigate("/");
                op.current.hide();
              }}
            />
            <Button
              label={t("profile")}
              icon="pi pi-user"
              className="p-button-text text-[#212B36] dark:text-gray-300 text-sm text-left px-4 py-3 border-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
              onClick={() => {
                setVisibleProfile(true);
                op.current.hide();
              }}
            />
            <Button
              label={t("settings")}
              icon="pi pi-cog"
              className="p-button-text text-[#212B36] dark:text-gray-300 text-sm text-left px-4 py-3 border-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
              onClick={() => {
                setVisibleSettings(true);
                op.current.hide();
              }}
            />
          </div>
          <div className="border-t border-dashed border-gray-200 dark:border-gray-700"></div>
          <div className="p-2">
            <Button
              label={t("logout")}
              className="w-full p-button-text text-red-500 font-bold text-sm py-3 border-none hover:bg-red-50 rounded-xl"
              onClick={() => {
                navigate("/login");
                op.current.hide();
              }}
            />
          </div>
        </div>
      </OverlayPanel>

      <Dialog
        visible={visibleProfile}
        onHide={() => setVisibleProfile(false)}
        header="Hồ sơ"
        style={{ width: "480px" }}
        modal
        draggable={false}
        resizable={false}
        className="custom-profile-dialog"
        footer={
          <div className="flex justify-end items-center gap-4 px-6 pb-6 pt-2">
            <span
              className="text-[#637381] dark:text-gray-400 font-bold cursor-pointer hover:text-[#212B36] dark:hover:text-white transition-colors"
              onClick={() => setVisibleProfile(false)}
            >
              Hủy bỏ
            </span>
            <Button
              label="Lưu lại"
              className="bg-[#212B36] dark:bg-white text-white dark:text-[#212B36] border-none font-bold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-all"
              onClick={() => setVisibleProfile(false)}
            />
          </div>
        }
      >
        <div className="flex flex-col items-center gap-6 py-4">
          <img
            src={userData.avatar}
            className="w-24 h-24 rounded-full border-4 border-white dark:border-[#212B36] shadow-xl object-cover"
            alt="user"
          />

          <div className="w-full flex flex-col gap-6 px-4">
            {/* TÊN SẢN PHẨM - Chỉnh màu xám đậm hơn (#637381) */}
            <div className="flex flex-col gap-2">
              <label className="font-extrabold text-[11px] text-[#637381] dark:text-[#919EAB] uppercase tracking-widest ml-1">
                TÊN SẢN PHẨM
              </label>
              <InputText
                value={userData.name}
                className="p-3.5 border-none bg-gray-50 dark:bg-[#212B36] text-[#212B36] dark:text-white font-bold rounded-2xl w-full transition-all"
              />
            </div>

            {/* EMAIL - Chỉnh text đậm hơn */}
            <div className="flex flex-col gap-2">
              <label className="font-extrabold text-[11px] text-[#637381] dark:text-[#919EAB] uppercase tracking-widest ml-1">
                EMAIL
              </label>
              <InputText
                value={userData.email}
                disabled
                className="p-3.5 border-none bg-gray-50 dark:bg-[#212B36] rounded-2xl w-full text-[#454F5B] dark:text-gray-400 font-bold italic"
              />
            </div>

            {/* VAI TRÒ - Tăng độ tương phản */}
            <div className="flex flex-col gap-2">
              <label className="font-extrabold text-[11px] text-[#637381] dark:text-[#919EAB] uppercase tracking-widest ml-1">
                VAI TRÒ
              </label>
              <div className="p-3.5 bg-blue-50/50 dark:bg-[#00B8D914] text-[#006C9C] dark:text-[#00B8D9] font-extrabold rounded-2xl text-center text-sm uppercase border border-blue-100 dark:border-[#00B8D93D] tracking-widest">
                {userData.role}
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog
        visible={visibleSettings}
        onHide={() => setVisibleSettings(false)}
        header="Cài đặt"
        style={{ width: "400px" }}
        modal
        className="rounded-[32px] overflow-hidden dark:bg-[#161C24]"
      >
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center justify-between p-5 bg-gray-50 dark:bg-[#212B36] rounded-2xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <i
                className={`pi ${
                  isDarkMode
                    ? "pi-moon text-yellow-400"
                    : "pi-sun text-orange-400"
                } text-xl`}
              ></i>
              <span className="font-bold dark:text-white">
                Chế độ tối (Dark Mode)
              </span>
            </div>
            <InputSwitch
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.value)}
            />
          </div>
        </div>
      </Dialog>

      <style jsx="true">{`
        /* KHÔI PHỤC STYLE CHUẨN */
        .custom-profile-dialog .p-dialog-header {
          padding: 1.5rem 1.5rem 0.5rem 1.5rem !important;
          border: none !important;
          background: #ffffff !important; /* Nền trắng đặc cho chế độ sáng */
        }

        .dark .custom-profile-dialog .p-dialog-header {
          background: #161c24 !important; /* Nền tối đặc cho chế độ tối */
        }

        .custom-profile-dialog .p-dialog-header-title {
          font-size: 1.25rem !important;
          font-weight: 900 !important;
          color: #212b36 !important;
        }

        .dark .custom-profile-dialog .p-dialog-header-title {
          color: white !important;
        }

        .custom-profile-dialog .p-dialog-content {
          padding: 0 1.5rem 1rem 1.5rem !important;
          background: #ffffff !important; /* Nền trắng đặc cho nội dung */
        }

        .dark .custom-profile-dialog .p-dialog-content {
          background: #161c24 !important; /* Nền tối đặc cho nội dung */
        }

        /* FIX LỖI TRONG SUỐT CHO TOÀN BỘ DIALOG */
        .dark .custom-profile-dialog {
          background-color: #161c24 !important;
          border: 1px solid #212b36 !important;
          box-shadow: 0 24px 48px -8px rgba(0, 0, 0, 0.4) !important;
        }

        .p-dialog-mask {
          background-color: rgba(
            33,
            43,
            54,
            0.6
          ) !important; /* Tăng độ mờ của lớp phủ phía sau */
          backdrop-filter: blur(
            8px
          ); /* Tăng độ nhòe để làm nổi bật trang lên */
        }

        .p-overlaypanel:after,
        .p-overlaypanel:before {
          display: none !important;
        }
        .p-overlaypanel-content {
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
}
