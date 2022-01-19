import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Err_Msg, { Error_NON_DATA_FOUND } from "../../message/Err_Msg";
import methodeNotification from "./methodeNotification";

function NotificationList() {
  const complain = useSelector((state) => state.complaints.complain);
  const paginate = useSelector((state) => state.paginate.paginate);
  const [NumberNotify, setNumberNotify] = useState(0);
  console.log(complain);

  useEffect(() => {
    setNumberNotify(complain.length);
  }, [NumberNotify]);
  console.log(complain.length);

  return NumberNotify < 1 ? (
    <Err_Msg
      type={Error_NON_DATA_FOUND}
      text={"Vous n'avez aucune intervention ..."}
    />
  ) : (
    methodeNotification.hanldleOneNotification(complain, paginate, true)
  );
}

export default NotificationList;
