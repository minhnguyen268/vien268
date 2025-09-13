"use client";

import BreadcrumbBar from "@/components/admin/BreadcrumbBar";
import Layout from "@/components/admin/Layout";
import ListDeposit from "@/components/admin/deposit/ListDeposit";
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
    title: t("Quản lý nạp tiền"),
    href: "/admin/deposit",
  },
];

  return (
    <>
      <NextSeo title="Quản lý yêu cầu nạp tiền" />

      <Layout>
        <BreadcrumbBar data={BreadcrumbData} />
        <h1
          className="title admin"
          style={{
            fontSize: "2.5rem",
          }}
        >
          {t("Yêu cầu nạp tiền")}
        </h1>

        <ListDeposit />
      </Layout>
    </>
  );
};
export default Home;
