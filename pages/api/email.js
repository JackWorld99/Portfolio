// import email from '../controllers/email'

const handler = async (req, res) =>{
  // switch(){
  //   case 'reCaptcha':
  //     email.reCaptcha(req, res)
  //     break;
  //   case 'sendEmail':
  //     email.sendEmail(req, res)
  //     break;
  //   default: 
  //     res.status(405).end(`Method ${method} Not Allowd`)
  //     break;
  // }

  if (req.method === "POST") {
    try {
      const reCaptchaRes =  await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.NEXT_PUBLIC_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
      })

      const result = await reCaptchaRes.json()

      if (result.score > 0.5) {
        res.status(200).json({
          status: "success",
          message: "Enquiry submitted successfully",
        })
      } else {
        res.status(200).json({
          status: "failure",
          message: "Google ReCaptcha Failure",
        })
      }
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      })
    }
  } else {
    res.status(405).end()
  }
}

export default handler