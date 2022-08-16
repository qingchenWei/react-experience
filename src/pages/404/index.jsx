import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="error_404">
      <div className="inner">
        <Button
          className="my-button"
          onClick={() => {
            navigate("/home");
          }}
        >
          返回首页
        </Button>
      </div>
    </div>
  );
}
