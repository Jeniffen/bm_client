import { useState, useEffect } from "react";

export default function useOAuth({
  API_URL = null,
  socket = null,
  provider = null,
}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    socket.on("connect", function () {
      console.log(socket);
      console.log(socket.id);
    });
  }, []);

  const openPopup = () => {
    // const { provider, socket } = this.props;
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${API_URL}/api/auth/${provider}?socketId=${socket.id}`;

    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no,
    scrollbars=no, resizable=no, copyhistory=no, width=${width},
    height=${height}, top=${top}, left=${left}`
    );
  };

  return [openPopup];
}
