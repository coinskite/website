import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const successNotify = (notification) => {
  toast.success(notification, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};

export const errorNotify = (notification) => {
  toast.error(notification, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};
