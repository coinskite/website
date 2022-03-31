import Star from '../../svg/astriek.svg';

function Input({ label, type = "text", placeholder = "" }) {
  return (
    <div className="contacts-input">
      <label htmlFor={label} className="df">
        {label}
        <Star />
      </label>
      <input
        id={label}
        type={type}
        className="input-box"
        placeholder={placeholder}
      />
    </div>
  )
}

function Select({ label, opts = [] }) {
  return (
    <div className="contacts-input">
      <label htmlFor={label} className="df">
        {label}
        <Star />
      </label>
      <select id={label} className="input-box">
        <option value="Please Select">Please Select</option>
        {opts.map(op => (
          <option value={op}>{op}</option>
        ))}
      </select>
    </div>
  )
}

function Main() {
  return (
    <div className="pad-main-1-3 contacts-main max-w">
      <h1 className="center contact-main-h1">We’re here to help your business</h1>
      <p className="center contact-main-p" style={{ marginBottom: "1rem" }}>Reach out to discuss your business needs and to learn how we can help you grow.</p>

      <div className="grid-2">
        <Input
          label="First Name"
        />

        <Input
          label="Last Name"
        />

        <Input
          label="Email"
        />

        <Input
          label="Phone Number"
        />

        <Input
          label="Company Name"
        />

        <Input
          label="Job Title"
        />

        <Select
          label="Country"
        />

        <Select
          label="Choose the nature of your enquiry"
        />

        <Select
          label="Choose your Organization"
        />

        <Select
          label="How did you hear about us?"
        />
      </div>

      <div className="contact-textarea">
        <label htmlFor="Message" className="df">
          Message
          <Star />
        </label>
        <textarea id="Message" className="input-box"></textarea>
      </div>

      <p className="center"><button>Submit</button></p>
    </div>
  )
}

export default Main