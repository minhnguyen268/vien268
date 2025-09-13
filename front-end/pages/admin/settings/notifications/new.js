import BreadcrumbBar from "@/components/admin/BreadcrumbBar";
import Layout from "@/components/admin/Layout";
import FormNotification from "@/components/admin/settings/Notification/FormNotification";
import NotificationService from "@/services/admin/NotificationService";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

const ThemThongBao = () => {
	
    const { t } = useTranslation("common");
	
  const BreadcrumbData = [
    {
      title: t("Admin"),
      href: "/admin",
    },
    {
      title: t("Quản lý thông báo"),
      href: "/admin/settings/notifications",
    },
    {
      title: t("Thêm thông báo"),
      href: "/admin/settings/notifications/new",
    },
  ];

  const handleOnSubmit = async ({ tieuDe, hinhAnh, noiDung }) => {
    const results = await NotificationService.createNotification({
      tieuDe,
      hinhAnh,
      noiDung,
    });
    return results;
  };

  return (
    <>
      <NextSeo title="Thêm thông báo" />
      <Layout>
        <BreadcrumbBar data={BreadcrumbData} />
        <h1
          className="title admin"
          style={{
            fontSize: "2.5rem",
          }}
        >
		{t("Thêm thông báo")}
        </h1>
        <FormNotification
          data={{
            tieuDe: "",
            hinhAnh: "",
            noiDung: "",
          }}
          handleOnSubmit={handleOnSubmit}
        />
      </Layout>
    </>
  );
};
export default ThemThongBao;
