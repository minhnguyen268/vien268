import useGetListBank from "@/hooks/admin/useGetListBank";
import { convertJSXTinhTrangListBank } from "@/utils/convertTinhTrang";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useRouter } from "next/router";
import BreadcrumbBar from "../../BreadcrumbBar";
import { useTranslation } from "react-i18next";


const List = () => {
	
  const { t } = useTranslation("common");
  
const BreadcrumbData = [
  {
    title: t("Admin"),
    href: "/admin",
  },
  {
    title: t("Quản lý ngân hàng"),
    href: "/admin/settings/bank",
  },
];
  
  const { data: dataQuery, isLoading } = useGetListBank();
  const router = useRouter();
  const GridRowsProp =
    dataQuery?.map((item, i) => ({
      id: item._id,
      action: item._id,
      stt: i + 1,
      tenBank: item.tenBank,
      shortName: item.shortName,
      code: item.code,
      tenChuTaiKhoan: item.tenChuTaiKhoan,
      soTaiKhoan: item.soTaiKhoan,
      image: item.image,
      status: item.status,
    })) ?? [];

  const GridColDef = [
    { field: "stt", headerName: "STT", width: 100 },
    { field: "code", headerName: t("Bank code"), width: 100 },
    { field: "shortName", headerName: t("Tên rút gọn"), width: 100 },
    { field: "tenBank", headerName: t("Tên bank"), width: 250 },
    {
      field: "image",
      headerName: t("Hình ảnh"),
      width: 100,
      renderCell: (params) => {
        return (
          <img
            src={params.value}
            style={{
              width: "4rem",
              height: "4rem",
              objectFit: "contain",
            }}
          />
        );
      },
    },
    {
      field: "tenChuTaiKhoan",
      headerName: t("Tên chủ tài khoản"),
      width: 250,
      renderCell: (params) => {
        return <div className="content-html" dangerouslySetInnerHTML={{ __html: params.value }} />;
      },
    },

    { field: "soTaiKhoan", headerName: t("Số tài khoản"), width: 250 },
    {
      field: "status",
      headerName: t("Tình trạng"),
      width: 170,
      renderCell: (params) => {
        return convertJSXTinhTrangListBank(params.value);
      },
    },
    {
      field: "action",
      headerName: t("Thao tác"),
      type: "actions",
      width: 150,
      getActions: (params) => [
        <IconButton onClick={() => router.push(`/admin/settings/bank/${params.id}`)}>
          <InfoIcon />
        </IconButton>,
      ],
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
	  {t("Danh sách ngân hàng")}
      </h1>
      <Link href="/admin/settings/bank/new">
        <Button> {t("Thêm mới")} </Button>
      </Link>

      <Box
        sx={{
          textAlign: "center",
          color: "text.secondary",
          height: 500,
          width: "100%",
          "& .trangthai_hoantat": {
            color: "#1fc67c",
          },
          "& .trangthai_dangcho": {
            color: "#1a3e72",
          },

          "& .MuiPaper-root ": {
            color: "#000000",
          },
        }}
      >
        <DataGrid
          loading={isLoading}
          rows={GridRowsProp}
          columns={GridColDef}
          componentsProps={{
            panel: {
              sx: {
                "& .MuiTypography-root": {
                  color: "dodgerblue",
                  fontSize: 20,
                },
                "& .MuiDataGrid-filterForm": {
                  bgcolor: "lightblue",
                },
              },
            },
          }}
          sx={{
            color: "#000000",
            "& .MuiDataGrid-paper": {
              color: "#000000",
            },
            "& .MuiToolbar-root": {
              color: "#000000",
            },
            "& .MuiMenuItem-root": {
              color: "#000000",
            },
          }}
        />
      </Box>
    </>
  );
};
export default List;
