import twilio from 'twilio';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
const validateAadhaar = (aadhaar) => {
  const regex = /^\d{12}$/;
  return regex.test(aadhaar);
};
const otp = process.env.OTP;
export default async function handler(req, res) {
  const { aadharno } = req.query;
  if (!validateAadhaar(aadharno)) {
      res.status(400).json({ error: 'Invalid Aadhaar number' });
  }

  try { 
    const message = await client.messages.create({
      body: `INDUS ACTION OTP IS ${otp}`, 
      from: process.env.PHONE_NUMBER , 
      to: process.env.TO_PHONE_NUMBER, 
    });
    console.log(`Message sent with SID: ${message.sid}`);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error.message);
    res.status(500).json({ error: 'Failed to send OTP. Please try again later.' });
  }
}