import { useRef, useState } from 'react'
import axios from 'axios'

import { successNotify, errorNotify } from '../../helper/tostifyHelp'
import mainUrl from '../../constants/url'
import Cross from '../../svg/cross.svg'
import Star from './astriek.svg'

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
    <div className='pad-main-3 apply-wrapper max-w'>
      <h1>Submit Your Application</h1>

      <div className='df'>
        <div className='flex1'>
          <label className='df' htmlFor="firstName">First Name <Star /></label>
          <input
            value={details.firstName}
            onChange={onChange}
            className='input-box'
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>

        <div className='flex1'>
          <label className='df' htmlFor="lastName">Last Name <Star /></label>
          <input
            value={details.lastName}
            onChange={onChange}
            className='input-box'
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
      </div>

      <div>
        <label className='df' htmlFor="email">Email <Star /></label>
        <input
          value={details.email}
          onChange={onChange}
          className='input-box'
          type="email"
          name="email"
          id="email"
        />
      </div>

      <div>
        <label className='df' htmlFor="mobile">Mobile <Star /></label>
        <input
          value={details.mobile}
          onChange={onChange}
          className='input-box'
          type="tel"
          name="mobile"
          id="mobile"
        />
      </div>

      <div id='wiil-cont'>The Hiring team may use this number to contact you about this job</div>

      <div>
        <label className='df' htmlFor="current_CTC">Current CTC <Star /></label>
        <input
          value={details.current_CTC}
          onChange={onChange}
          className='input-box'
          type="text"
          name="current_CTC"
          id="current_CTC"
        />
      </div>

      <div>
        <label className='df' htmlFor="expected_CTC">Expected CTC <Star /></label>
        <input
          value={details.expected_CTC}
          onChange={onChange}
          className='input-box'
          type="text"
          name="expected_CTC"
          id="expected_CTC"
        />
      </div>

      <div>
        <label className='df' htmlFor="noticePeriod">Notice period <Star /></label>
        <input
          value={details.noticePeriod}
          onChange={onChange}
          className='input-box'
          type="text"
          name="noticePeriod"
          id="noticePeriod"
        />
      </div>

      <div className='upload-apply'>
        {
          fileName &&
          <div className='df progress-bar-wrapper pb-16'>
            <p className='progress-bar' style={{ width: `${progress}%` }}></p>
            <p>{fileName}</p>
            <Cross className='cross-apply' onClick={onCloseFile} />
          </div>
        }

        <div className='df jcc cp' onClick={() => fileInputRef.current.click()}>
          <p>
            <span className='theme-clr'>{fileName ? "Replace" : "Upload"} a file</span> or drag and drop here
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

      <div>
        <label className='df' htmlFor="coverLetter">Why are you a great fit for this job?(Cover letter) <Star /></label>
        <textarea
          className='input-box'
          onChange={onChange}
          value={details.coverLetter}
          name="coverLetter"
          id="coverLetter"
        />
      </div>

      <button
        className='theme-sec px-4 py-2'
        onClick={onSubmit}
        // disabled={loading}
        disabled
      >
        Submit Application
      </button>
    </div>
  )
}

export default Application