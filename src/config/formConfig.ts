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
      value: /^[0-9\s+()\-]+$/,
      message: "Phone number should contain only digits, spaces, +, -, or parentheses",
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
