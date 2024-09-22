import Star from './astriek.svg'

function InputBox({ wrapperCls = "mb-4 xl:mb-8", name, lable, value, onChange }) {
  return (
    <div className={wrapperCls}>
      <label className='df mb-1 xl:mb-2 text-[10px] xs:text-xs sm:text-sm lg:text-lg font-medium text-[#C4C4C4]' htmlFor={name}>{lable} <Star /></label>
      <input
        onChange={onChange}
        className='bg-[#152A39] border-primary-900 text-[#C4C4C4] rounded-sm'
        value={value}
        type="text"
        name={name}
        id={name}
      />
    </div>
  )
}

export default InputBox