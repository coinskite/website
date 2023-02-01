import Industries from "../StartUp/Industries";
import SecMiddle from "../StartUp/SecMiddle";
import Choose from "../StartUp/Choose";

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