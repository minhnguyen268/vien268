import { Box, Card, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import BreadcrumbBar from "../BreadcrumbBar";
import { useTranslation } from "react-i18next";


const Overview = () => {
  const { t } = useTranslation("common");

  const listGame = [
  {
    title: t("KENO 1M"),
    link: "/admin/games/keno1p",
    icon: "https://i.imgur.com/G8qXjaI.png",
    introduce: t("Xem và chỉnh sửa kết quả quay số"),
  },
  {
    title: t("KENO 3M"),
    link: "/admin/games/keno3p",
    icon: "https://i.imgur.com/G8qXjaI.png",
    introduce: t("Xem và chỉnh sửa kết quả quay số"),
  },
  {
    title: t("KENO 5M"),
    link: "/admin/games/keno5p",
    icon: "https://i.imgur.com/G8qXjaI.png",
    introduce: t("Xem và chỉnh sửa kết quả quay số"),
  },
  {
    title: t("DICE 1M"),
    link: "/admin/games/xucxac1p",
    icon: "https://i.imgur.com/Hd9zWRS.png",
    introduce: t("Xem và chỉnh sửa kết quả xúc xắc"),
  },

  {
    title: t("DICE 3M"),
    link: "/admin/games/xucxac3p",
    icon: "https://i.imgur.com/Hd9zWRS.png",
    introduce: t("Xem và chỉnh sửa kết quả xúc xắc"),
  },
  {
    title: t("DISH SHAKING 1M"),
    link: "/admin/games/xocdia1p",
    icon: "/assets/images/xocdia1p.png",
    introduce: t("Xem và chỉnh sửa kết quả xóc đĩa"),
  },
  {
    title: t("LOTTERY 3M"),
    link: "/admin/games/xoso3p",
    icon: "https://i.imgur.com/G8qXjaI.png",
    introduce: t("Xem và chỉnh sửa kết quả xổ số"),
  },
  {
    title: t("LOTTERY 5M"),
    link: "/admin/games/xoso5p",
    icon: "https://i.imgur.com/G8qXjaI.png",
    introduce: t("Xem và chỉnh sửa kết quả xổ số"),
  },
];
const BreadcrumbData = [
  {
    title: t("Admin"),
    href: "/admin",
  },
  {
    title: t("Quản lý game"),
    href: "/admin/games",
  },
];


  return (
    <>
      <BreadcrumbBar data={BreadcrumbData} />
      <h1
        className="title admin"
        style={{
          fontSize: "2.5rem",
        }}
      >
        {t("Danh sách các game")}
      </h1>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0,1fr))",

            sm: "repeat(3, minmax(0,1fr))",

            lg: "repeat(4, minmax(0,1fr))",
            xl: "repeat(5, minmax(0,1fr))",
          },
          gap: "2rem",
        }}
      >
        {listGame.map((item, i) => (
          <Link href={item.link} key={i}>
            <Card
              sx={{
                cursor: "pointer",
                backgroundColor: "#ffffff",
                color: "#201c58",

                display: "flex",
                minHeight: "15rem",
                padding: "1.5rem",

                maxWidth: "20rem",
                boxShadow: "-1px 2px 14px 5px #edf0f8",
                borderRadius: "3rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",

                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "4rem",
                    height: "4rem",
                    position: "relative",
                  }}
                >
                  <Image src={item.icon} layout="fill" />
                </Box>

                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "2rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "1.5rem",
                  }}
                >
                  {item.introduce}
                </Typography>
              </Box>
            </Card>
          </Link>
        ))}
      </Box>
    </>
  );
};
export default Overview;
