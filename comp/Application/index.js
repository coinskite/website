import { useRef, useState } from 'react'
import axios from 'axios'

import { successNotify, errorNotify } from '../../helper/tostifyHelp'
import mainUrl from '../../constants/url'
import Cross from '../../svg/cross.svg'
import Star from './astriek.svg'
import InputBox from './InputBox'

function Application({ jobId = "" }) {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    current_CTC: "",
    expected_CTC: "",
    noticePeriod: "",
    coverLetter: ""
  })
  const [fileName, setFileName] = useState("")
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState("")
  const fileInputRef = useRef(null)

  const onChange = e => setDetails(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }))

  const onFileChange = e => {
    let files = e.target.files;
    const allFiles = Object.keys(files).map(each => files[each]);
    fileInputRef.current.value = "";
    setFileName(allFiles[0]?.name || "")
    uploadResume(allFiles[0])
  }

  const onInputClick = e => e.stopPropagation()

  const onSubmit = async () => {
    try {
      for (const key in details) {
        if (!details[key]) {
          return errorNotify(key + " is required")
        }
      }

      if (!file) return errorNotify("Please upload resume...")
      setLoading(true)
      await axios.post(`${mainUrl}/application/send`, { ...details, file })

      setDetails({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        current_CTC: "",
        expected_CTC: "",
        noticePeriod: "",
        coverLetter: ""
      })
      setFileName("")
      setProgress(0)
      setLoading(false)
      setFile("")
      successNotify("Apllication successfully submited...")

    } catch (error) {
      console.log(error)
    }
  }

  const uploadResume = async (localFile) => {
    try {
      const formData = new FormData()
      formData.append("resume", localFile)

      const config = {
        header: { 'content-type': 'multipart/form-data' },
        onUploadProgress: progEvent => {
          let percent = Math.floor((progEvent.loaded * 100) / progEvent.total)
          if (percent < 100) {
            setProgress(percent)
          }
          if (percent === 100) setProgress(99.8)
        }
      }

      const { data } = await axios.post(`${mainUrl}/application/resume`, formData, config)
      setFile(data)
      setProgress(0)
    } catch (error) {
      console.log(error)
    }
  }

  const onCloseFile = () => {
    setFileName("")
    setFile("")
  }

  return (
    <div className='pad-main-3 bg-[#222531] text-[#C4C4C4]'>
      <div className='max-w-xl mx-auto'>
        <h1 className='mb-4 xl:mb-8 text-[15px] xs:text-xl sm:text-[25px] md:text-3xl lg:text-[40px] font-medium text-primary-900 text-center'>Submit Your Application</h1>

        <div className='df gap-4 mb-4 xl:mb-8'>
          <InputBox
            name="firstName"
            lable="First Name"
            wrapperCls='flex1'
            value={details.firstName}
            onChange={onChange}
          />
          <InputBox
            name="lastName"
            lable="Last Name"
            wrapperCls='flex1'
            value={details.lastName}
            onChange={onChange}
          />
        </div>

        <InputBox
          name="email"
          lable="Email"
          value={details.email}
          onChange={onChange}
        />

        <InputBox
          name="mobile"
          lable="Mobile"
          wrapperCls='mb-1'
          value={details.mobile}
          onChange={onChange}
        />
        <div
          className='mb-4 xl:mb-8 text-[10px] xs:text-xs sm:text-sm lg:text-lg font-medium text-[#C4C4C4]'
          id='wiil-cont'
        >
          The Hiring team may use this number to contact you about this job
        </div>

        <InputBox
          name="current_CTC"
          lable="Current CTC"
          value={details.current_CTC}
          onChange={onChange}
        />

        <InputBox
          name="expected_CTC"
          lable="Expected CTC"
          value={details.expected_CTC}
          onChange={onChange}
        />

        <InputBox
          name="noticePeriod"
          lable="Notice period"
          value={details.noticePeriod}
          onChange={onChange}
        />

        <div className='df jcc h-20 mb-4 xl:mb-8 bg-[#152A39] border border-primary-900 text-[#C4C4C4] rounded-sm'>
          {
            fileName &&
            <div className='df'>
              <p style={{ width: `${progress}%` }}></p>
              <p>{fileName}</p>
              <Cross className='cross-apply' onClick={onCloseFile} />
            </div>
          }

          <div className='df jcc cursor-pointer' onClick={() => fileInputRef.current.click()}>
            <p className='text-[10px] xs:text-xs sm:text-base lg:text-lg font-medium'>
              <span className='text-primary-900'>{fileName ? "Replace" : "Upload"} a file</span> or drag and drop here
            </p>
            <input
              onClickCapture={onInputClick}
              onChange={onFileChange}
              multiple={false}
              accept=".pdf, .doc, .docx"
              style={{ display: 'none' }}
              type="file"
              ref={fileInputRef}
            />
          </div>
        </div>

        <div className='mb-4 xl:mb-8'>
          <label className='df mb-1 xl:mb-2 text-[10px] xs:text-xs sm:text-sm lg:text-lg font-medium text-[#C4C4C4]' htmlFor="coverLetter">Why are you a great fit for this job?(Cover letter) <Star /></label>
          <textarea
            className='bg-[#152A39] border-primary-900 text-[#C4C4C4] rounded-sm'
            onChange={onChange}
            value={details.coverLetter}
            name="coverLetter"
            id="coverLetter"
          />
        </div>

        <button
          className='block w-4/5 mb-8 px-4 py-2 mx-auto text-sm xs:text-lg sm:text-xl lg:text-2xl font-medium text-white bg-primary-900'
          onClick={onSubmit}
          disabled={loading}
        >
          Submit Application
        </button>
      </div>
    </div>
  )
}

export default Application