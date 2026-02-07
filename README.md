# React User Management (CRUD App)

A simple React-based CRUD application to manage user data with a focus on clean architecture, extensibility, and proper API handling.

## Live Demo
react-crud-app-five-sigma.vercel.app


## GitHub Repository
https://github.com/ArpitaPanda261/react-crud-app

---

## Features

### User Fields
- First Name (Required)
- Last Name (Required)
- Phone Number (Required, numeric validation)
- Email Address (Required, email validation)
- (Optional fields like Date of Birth can be added easily)

### CRUD Operations
- Create a new user
- View all users
- Update existing user
- Delete a user

### Validation
- Required field enforcement
- Email format validation
- Phone number numeric validation (10 digits)
- Error messages displayed below fields

### API Integration
- Axios for API calls
- JSON Server used as mock API
- Loading indicators during fetch
- Saving state during create/update
- Error handling for API failures

### Extensibility (Important)
The form is **configuration-driven**.

All fields are defined in: [src/config/formConfig.ts](src/config/formConfig.ts#L1-L50)

To add a new field (example: Date of Birth):

```ts
{
  name: "dob",
  label: "Date of Birth",
  type: "date",
  required: false
}
