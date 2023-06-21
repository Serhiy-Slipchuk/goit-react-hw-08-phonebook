import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import FormRegister from "components/FormRegister/FormRegister";
import Heading from "components/Heading/Heading";
import Loader from "components/Loader/Loader";
import Paragraph from "components/Paragraph/Paragraph";
import { useState } from "react";
import { useSelector } from "react-redux";
import { isLoadingSelector, errorSelector } from "redux/auth/authSelectors";

const RegisterPage = function () {
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  const [passwordError, setPasswordError] = useState('');


  
  return (
    <>
      <Heading text='Sign Up'/>      
      <Paragraph text='Register form'/>
      <FormRegister handlerPassError={setPasswordError}/>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {passwordError && <ErrorMessage message={passwordError} />}
    </>
  );
};

export default RegisterPage;
