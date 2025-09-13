import Layout from "@/components/Layout";
import LoadingBox from "@/components/homePage/LoadingBox";
import Item from "@/components/list-bank/Item";
import useGetListUserBank from "@/hooks/useGetListUserBank";
import { Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Home = () => {
  const { t } = useTranslation("common");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/";
    }
  }, [status]);

  const { data, isLoading } = useGetListUserBank();

  return (
    <>
      <NextSeo title="Liên kết ngân hàng" />

      {isLoading && <LoadingBox isLoading={isLoading} />}

      <Layout>
        <h1 className="title-h1">{t("Linked bank account")}</h1>

        <Box
          sx={{
            paddingTop: "5rem",
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          {!isLoading && (
            <Box
              sx={{
                paddingTop: "1rem",
                textAlign: "center",
              }}
            >
              <Link href="/list-bank/add">
                <Button
                  onClick={(e) => {
                    if (data?.data?.length) {
                      toast.info(t("Bạn đã liên kết tài khoản ngân hàng, nên không thể thêm tài khoản khác"));
                      e.preventDefault();
                      e.stopPropagation();
                      return;
                    }
                  }}
                >
                  {t("Add bank account")}
                </Button>
              </Link>
            </Box>
          )}
          {data?.metadata?.results === 0 && (
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              {t("Bank empty")}
            </Typography>
          )}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(1, minmax(0,1fr))",

              marginTop: "1rem",

              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {data?.data?.map((item) => (
              <Item key={item._id} item={item} />
            ))}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
