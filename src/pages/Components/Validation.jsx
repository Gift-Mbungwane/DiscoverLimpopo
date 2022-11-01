import { createForm } from "final-form";


const form = createForm({
    onSubmit,
    initialValues: {
      color: "#0000FF",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      }
      if (values.color === "#00FF00") {
        errors.color = "Gross! Not green! 🤮";
      }
      return errors;
    },
  });


  export { form};