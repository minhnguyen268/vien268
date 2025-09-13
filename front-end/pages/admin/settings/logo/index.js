import { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/admin/Layout";
import { Button } from "@mui/material";
import SettingService from "@/services/admin/SettingService";
import { toast } from "react-toastify";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";

const initialSettingGames = {
  keno1P: "active",
  keno3P: "active",
  keno5P: "active",
  xoso3P: "active",
  xoso5P: "active",
  xucxac1P: "active",
  xucxac3P: "active",
  xocdia1P: "active",
};



const Home = () => {
	  
  const { t } = useTranslation("common");
  
const gameNames = {
  keno1P: t("LOTTERY 3M"),
  keno3P: t("LOTTERY 5M"),
  keno5P: t("KENO 1M"),
  xucxac1P: t("KENO 3M"),
  xucxac3P: t("KENO 5M"),
  xocdia1P: t("DICE 1M"),
  xoso3P: t("DICE 3M"),
  xoso5P: t("DISH SHAKING 1M"),
};
  
  const [logo, setLogo] = useState("");
  const [maGioiThieu, setMaGioiThieu] = useState("");
  const [noiDungPopup, setNoiDungPopup] = useState("");
  const [scriptChat, setScriptChat] = useState("");

  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [settingGames, setSettingGames] = useState([]);

  const submit = async () => {
	  

  
    try {
      await SettingService.update(logo, maGioiThieu, noiDungPopup, scriptChat, undefined, settingGames);
      toast.success(t("Thay đổi thành công!"));
    } catch (error) {
      toast.error(t("Thay đổi thất bại!"));
    }
  };

  const getData = async () => {

  
    const res = await SettingService.get();
    setLogo(res.data.data?.logo);
    setMaGioiThieu(res.data.data?.maGioiThieu);
    setNoiDungPopup(res.data.data?.noiDungPopup);
    setScriptChat(res.data.data?.scriptChat);
    setSettingGames(res.data.data?.games ?? initialSettingGames);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@/ckeditor5-34.1.0-8ogafsbogmr7"),
    };
    setEditorLoaded(true);
  }, []);

  if (!editorLoaded) return;

  return (
    <>
      <NextSeo title="Quản lý Logo" />
      <Layout>
        <div style={{ width: "100%" }}>
          <div style={{ color: "#000", fontSize: 30, fontWeight: 600, textAlign: "center", marginBottom: "50px" }}>
			  {t("Chỉnh sửa logo, mã giới thiệu, popup thông báo")}
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginBottom: 50, gap: "10px" }}>
            <div style={{ color: "#000", fontSize: 15, width: "210px" }}> {t("Logo (đường link ảnh)")} </div>
            <input
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              type="text"
              style={{ color: "#000", width: "100%", height: "30px", borderRadius: "3px" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginBottom: 50, gap: "10px" }}>
            <div style={{ color: "#000", fontSize: 15, width: "210px" }}> {t("Mã giới thiệu")} </div>
            <input
              value={maGioiThieu}
              onChange={(e) => setMaGioiThieu(e.target.value)}
              type="text"
              style={{ color: "#000", width: "100%", height: "30px", borderRadius: "3px" }}
            />
          </div>

          <div style={{ width: "100%", color: "black", marginBottom: 50, fontSize: "2rem" }}>
            <div style={{ color: "#000", fontSize: 15, width: "210px", paddingBottom: "10px" }}>
              {t("Nội dung popup thông báo")}
            </div>
            {editorLoaded && (
              <CKEditor
                editor={ClassicEditor}
                data={noiDungPopup ?? ""}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setNoiDungPopup(data);
                }}
              />
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ color: "#000", fontSize: 15, width: "210px", paddingBottom: "10px" }}> {t("Bật/tắt các game")} </div>
            {Object.keys(settingGames).map((key) => (
              <div key={key} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <div style={{ color: "#000", fontSize: 15, width: "210px" }}>{gameNames[key]}</div>
                <Switch
                  checked={settingGames[key] === "active"}
                  onChange={(event) => {
                    setSettingGames((prev) => ({
                      ...prev,
                      [key]: event.target.checked ? "active" : "inactive",
                    }));
                  }}
                />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: "30px", justifyContent: "center" }}>
            <Button onClick={submit}> {t("Cập nhật")} </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
