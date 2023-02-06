import Industries from "../StartUp/Industries";
import Choose from "../StartUp/Choose";

import SecMiddle from "./SecMiddle";
import Services from "./Services";
import Header from "./Header";

function Entreprise() {
  return (
    <>
      <Header />
      <Services />
      <Choose />
      <SecMiddle />
      <Industries />
    </>
  )
}

export default Entreprise