import Header from "./Header";
import Form from "./Form";

function PartnershipFormPage() {
  return (
    <div className="pad-main-3 text-white bg-primary-900">
      <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <Header />
        <Form />
      </div>
    </div>
  )
}

export default PartnershipFormPage