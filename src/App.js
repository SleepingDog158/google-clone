import "./App.css";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div className="header">
        <a>Gmail</a>
        <a className="text">Hình ảnh</a>
        <AppsIcon style={{ marginLeft: "10px" }} />
        <Button
          variant="contained"
          style={{ textTransform: "none", marginLeft: "20px" }}
          disableElevation
        >
          Đăng nhập
        </Button>
      </div>
      <div className="body">
        <img src={require("./assets/google.png")} alt="" />
        <div className="text-input">
          <SearchIcon style={{ color: "#b8b8b8", fontSize: "22px" }} />
          <input type="text" className="input-field" />
          <KeyboardIcon
            style={{ color: "#7b7b7b", fontSize: "22px", marginRight: "16px" }}
          />
          <KeyboardVoiceIcon style={{ color: "#4285f4", fontSize: "26px" }} />
        </div>
        <div className="button-group">
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              backgroundColor: "#f9f9f9",
              color: "#000",
            }}
            disableElevation
          >
            Tìm trên Google
          </Button>
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              backgroundColor: "#f9f9f9",
              color: "#000",
              marginLeft: "15px",
            }}
            disableElevation
          >
            Xem trang đầu tiên tìm được
          </Button>
        </div>
        <div className="language">
          <p>
            Google có các thứ tiếng: <a>English</a>
            <a>Français</a>
            <a>繁體中文</a>
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="selected-language">
          <p>Việt Nam</p>
        </div>
        <div className="option">
          <div className="about">
            <a>Giới thiệu</a>
            <a>Quảng cáo</a>
            <a>Doanh nghiệp</a>
            <div><a>Cách hoạt động của Tìm kiếm</a></div>
          </div>
          <div className="policy">
            <a>Bảo mật</a>
            <a> Điều khoản</a>
            <a>Cài đặt</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
