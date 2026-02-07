export const userFormFields = [
  {
    name: "firstName",
    label: "First Name",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    required: true,
    type: "tel",
    pattern: {
      // allow common formatting but require exactly 10 digits total
      value: /^(?=(?:\D*\d){10})(?!(?:\D*\d){11})[\d\s()+-]+$/,
      message: "Phone number must contain exactly 10 digits",
    },
  },
  {
    name: "email",
    label: "Email Address",
    required: true,
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email",
    },
  },
  {
    name: "dob",
    label: "Date of Birth",
    required: false,
    type: "date",
  },
];
