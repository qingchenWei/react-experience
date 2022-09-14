import { useContext } from "react";
import Context from "./context";
export default function Any() {
  const data = useContext(Context);
  return <div>{data.msg}</div>;
}
