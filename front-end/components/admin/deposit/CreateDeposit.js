import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  FormControl,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import OutlinedInput from "@/components/input/OutlinedInput";
import { InputComponent } from "@/custom/textfield";
import BankService from "@/services/admin/BankService";
import UserService from "@/services/admin/UserService";
import DepositService from "@/services/admin/DepositService";
import { useTranslation } from "react-i18next";

const CreateDeposit = ({ refetch }) => {
  const { t } = useTranslation("common");
  
  const [open, setOpen] = useState(false);
  const [soTien, setSoTien] = useState("");
  const [userId, setUserId] = useState("");
  const [nganHang, setNganHang] = useState("");
  const [noiDung, setNoiDung] = useState("");
  const [users, setUsers] = useState([]);
  const [banks, setBanks] = useState([]);

  const fetchUsers = async () => {
    const res = await UserService.getListUsers({
      page: 1,
      pageSize: 1000,
      searchValue: "",
      filter: 0,
    });
    setUsers(res.data.data);
  };

  const fetchBanks = async () => {
    const res = await BankService.getListBank();
    setBanks(res.data.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchBanks();
  }, []);

  const submit = async () => {
    console.log(userId, soTien, nganHang, noiDung);
    if (!userId || !soTien || Number(soTien) <= 0) {
      toast.error(t("Vui lòng chọn tài khoản và nhập số tiền lớn hơn 0"));
      return;
    }
    try {
      await DepositService.createDeposit({
        userId,
        soTien: Number(soTien),
        nganHang,
        noiDung,
      });
    } catch {
      toast.error(t("Tạo yêu cầu nạp tiền thất bại"));
      return;
    }
    refetch();
    setSoTien("");
    setUserId("");
    setNganHang("");
    setNoiDung("");
    toast.success(t("Tạo yêu cầu nạp tiền thành công"));
    setOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "30px", justifyContent: "center" }}>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
		{t("Tạo yêu cầu nạp tiền")}
        </Button>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} sx={{ "& .MuiDialog-paper": { minWidth: "600px" } }}>
        <DialogTitle sx={{ textAlign: "center" }}> {t("Tạo yêu cầu nạp tiền")} </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              maxWidth: "600px",
              gap: "10px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <FormControl sx={{ marginTop: "6px" }} fullWidth>
              <Autocomplete
                options={users}
                getOptionLabel={(option) => option.taiKhoan}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiInputBase-input": { color: "black" },
                      "& .MuiOutlinedInput-root": { borderColor: "black" },
                    }}
                    {...params}
                    label={t("Chọn tài khoản (bắt buộc)")}
                    variant="outlined"
                    size="small"
                  />
                )}
                value={users.find((u) => u._id === userId) || null}
                onChange={(_, newValue) => setUserId(newValue?._id || "")}
              />
            </FormControl>
            <FormControl sx={{ marginTop: "10px" }} fullWidth>
              <Autocomplete
                options={banks}
                getOptionLabel={(option) => `${option?.shortName} - ${option?.soTaiKhoan} - ${option?.tenChuTaiKhoan}`}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiInputBase-input": { color: "black" },
                      "& .MuiOutlinedInput-root": { borderColor: "black" },
                    }}
                    {...params}
                    label={t("Chọn ngân hàng")}
                    variant="outlined"
                    size="small"
                  />
                )}
                value={banks.find((b) => b._id === nganHang) || null}
                onChange={(_, newValue) => setNganHang(newValue?._id || "")}
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography> {t("Số tiền (bắt buộc)")}</Typography>
              <InputComponent
                placeholder={t("Số tiền")}
                size="small"
                type="number"
                fullWidth
                onWheel={(e) => e.target.blur()}
                value={soTien}
                onChange={(e) => setSoTien(e.target.value)}
                sx={{
                  "& .MuiInputBase-input": {
                    padding: "8px 10px",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography> {t("Nội dung")} </Typography>
              <OutlinedInput
                placeholder={t("Nội dung")}
                onChange={(e) => setNoiDung(e.target.value)}
                size="small"
                type="text"
                fullWidth
                value={noiDung}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            {t("Đóng")}
          </Button>
          <Button onClick={submit} color="primary">
            {t("Tạo")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateDeposit;
