// const accountSid = "AC885dbd83476867176bd486235a7d0078";
// const authToken = "3269a5369dea96278a6def23d83c43ab";
// const serviceSid = "VA893d0596bd42e47fb063c1e038d27a32";

// if (!accountSid || !authToken || !serviceSid) {
//   console.error(
//     "Missing Twilio credentials or service ID. Please check your environment variables."
//   );
//   process.exit(1);
// }

const client = require("twilio")(accountSid, authToken);

const otpverify = () => {
  client.verify.v2
    .services(serviceSid)
    .verifications.create({
      to: "+919080292903",
      channel: "sms",
    })
    .then((verification) =>
      console.log("Verification status:", verification.status)
    )
    .catch((error) =>
      console.error("Error occurred while verifying OTP:", error)
    );
};

otpverify();

const verifycode = (code) => {
  const clients = require("twilio")(accountSid, authToken);

  clients.verify.v2
    .services(serviceSid)
    .verificationChecks.create({ to: "+919080292903", code })
    .then((verification_check) => console.log(verification_check.status));
};

verifycode(397700);
