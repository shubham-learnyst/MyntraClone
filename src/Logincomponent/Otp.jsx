import React, { useContext, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import styles from "./Login.module.css"

export const Otp = () => {
    const { mobileNo } = useContext(AuthContext)
    console.log(mobileNo)
    //const navigate = useNavigate()


    const [count, setCount] = React.useState(30)
    const ref1 = React.useRef()
    const ref2 = React.useRef()
    const ref3 = React.useRef()
    const ref4 = React.useRef()
    const [input1, setInput1] = React.useState("")
    const [input2, setInput2] = React.useState("")
    const [input3, setInput3] = React.useState("")
    const [input4, setInput4] = React.useState("")
    const [otp, setOtp] = React.useState([])
    useEffect(() => {
        let id = setInterval(() => {
            setCount((prev) => {
                if (prev >= 0)
                    return prev - 1
                else {
                    clearInterval(id)
                    return prev
                }

            })

        }, 1000)

    }, [])
    return (
        <div className={styles.otp_parentDiv}>
            <img width="100px" height="100px" src='https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg' alt='otp_img' />
            <div>
                <h1 className={styles.otp_heading}>Verify with OTP</h1>
                <p className={styles.otp_para}>Sent to {mobileNo}</p>
                <div className={styles.otp_input_box}>
                    <input type="text" ref={ref1} maxLength="1" value={input1}
                        onChange={(e) => {

                            setInput1(e.currentTarget.value)
                            setOtp([...otp, e.currentTarget.value])
                            if (e.currentTarget.value !== "")
                                ref2.current.focus();
                        }
                        }
                    />
                    <input type="text" ref={ref2} value={input2}
                        onChange={(e) => {
                            setInput2(e.currentTarget.value)
                            setOtp([...otp, e.currentTarget.value])
                            if (e.currentTarget.value !== "")
                                ref3.current.focus();

                        }
                        }
                    />
                    <input type="text" ref={ref3} value={input3}
                        onChange={(e) => {
                            setInput3(e.currentTarget.value)
                            setOtp([...otp, e.currentTarget.value])
                            if (e.currentTarget.value !== "")
                                ref4.current.focus();
                        }
                        }

                    />
                    <input type="text" ref={ref4} value={input4}
                        onChange={(e) => {
                            setInput4(e.currentTarget.value)
                            setOtp([...otp, e.currentTarget.value])

                        }
                        }
                    />
                </div>
                <p className={styles.otp_para}>{(count >= 10) ? <span>Resend OTP in : <b style={{ color: "black" }}>00:{count}</b></span> : (count >= 0) ? <span>Resend OTP in : <b style={{ color: "black" }}>00:0{count}</b></span> : <b className={styles.otp_bold}>RESEND OTP</b>}</p>
                <p className={styles.otp_para}>Log in using <b className={styles.otp_bold}>Password</b></p>
                <p className={styles.otp_para}>Having Trouble in logging in? <b className={styles.otp_bold}>Get help</b></p>
            </div>
        </div>
    )
}