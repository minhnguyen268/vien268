import BreadcrumbBar from "@/components/admin/BreadcrumbBar";
import Layout from "@/components/admin/Layout";
import ListWithdraw from "@/components/admin/withdraw/ListWithdraw";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

const Home = () => {
	
  const { t } = useTranslation("common");

const BreadcrumbData = [
  {
    title: t("Admin"),
    href: "/admin",
  },
  {
    title: t("Quản lý rút tiền"),
    href: "/admin/withdraw",
  },
];

  return (
    <>
      <NextSeo title="Quản lý yêu cầu rút tiền" />

      <Layout>
        <BreadcrumbBar data={BreadcrumbData} />
        <h1
          className="title admin"
          style={{
            fontSize: "2.5rem",
          }}
        >
          {t("Yêu cầu rút tiền")}
        </h1>

        <ListWithdraw />
      </Layout>
    </>
  );
};
export default Home;
