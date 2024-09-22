import Industries from "../startup/Industries";
import Choose from "../startup/Choose";

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