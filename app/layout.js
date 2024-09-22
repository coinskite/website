import '../styles/main.scss';
import '../styles/global.css';

export const metadata = {
  title: 'Coinskite',
  description: '',
}

function RootLayout({ children }) {
  // useEffect(() => {
  //   function initFreshChat() {
  //     window.fcWidget.init({
  //       token: "0a97bd8d-1625-4628-a8f6-3664d0549232",
  //       host: "https://wchat.in.freshchat.com"
  //     })
  //   }

  //   function initialize(i, t) {
  //     var e; i.getElementById(t)
  //       ? initFreshChat()
  //       : (
  //         (e = i.createElement("script")).id = t,
  //         e.async = !0,
  //         e.src = "https://wchat.in.freshchat.com/js/widget.js",
  //         e.onload = initFreshChat,
  //         i.head.appendChild(e)
  //       )
  //   }

  //   function initiateCall() {
  //     initialize(document, "Freshdesk Messaging-js-sdk")
  //   }

  //   window.addEventListener
  //     ? window.addEventListener("load", initiateCall, !1)
  //     : window.attachEvent("load", initiateCall, !1);
  // }, [])

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
