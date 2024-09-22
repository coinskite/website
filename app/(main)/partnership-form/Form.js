
function Form() {
  return (
    <div>
      <div className="max-w-[190px] xs:max-w-[256px] sm:max-w-xs md:max-w-sm lg:max-w-[462px] xl:max-w-[550px] mx-auto border border-[#C4C4C4] rounded-[10px] overflow-hidden">
        <div className="text-sm xs:text-base sm:text-2xl md:text-3xl xl:text-[40px] py-2 text-center text-[#223764] bg-[#CAFCD9]">
          Fill the form
        </div>

        <div className="partnership-form p-6 bg-white">
          <input
            type="text"
            placeholder="Full Name"
          />
          <input
            type="text"
            placeholder="Job title"
          />
          <input
            type="text"
            placeholder="Business email"
          />
          <input
            type="text"
            placeholder="Company name"
          />

          <select>
            <option value="">Company Size</option>
          </select>

          <select>
            <option value="">Country</option>
          </select>

          <textarea
            cols="30"
            rows="10"
            placeholder="Drop us a line! Why do you want to join our partner program?"
          ></textarea>

          <button className="block mt-6 mx-auto px-12 text-[8px] xs:text-xs sm:text-[15px] md:text-base lg:text-[22px] xl:text-[28px] font-medium bg-primary-900 text-white">
            Let’s connect
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form