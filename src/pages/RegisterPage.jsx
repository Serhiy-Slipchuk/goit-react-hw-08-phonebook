import FormRegister from "components/FormRegister/FormRegister";
import Heading from "components/Heading/Heading";
import Paragraph from "components/Paragraph/Paragraph";

const RegisterPage = function () {
  return (
    <>
      <Heading text='Sign Up'/>      
      <Paragraph text='Register form'/>
      <FormRegister />
    </>
  );
};

export default RegisterPage;
