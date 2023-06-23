import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import FormLogin from "components/FormLogin/FormLogin";
import Heading from "components/Heading/Heading";
import Loader from "components/Loader/Loader";
import Paragraph from "components/Paragraph/Paragraph";
import { useSelector } from "react-redux";
import { errorSelector, isLoadingSelector } from "redux/auth/authSelectors";

const LoginPage = function() {
    const isLoading = useSelector(isLoadingSelector);
    const error = useSelector(errorSelector);
    return (
        <>
        <Heading text='Login Page'/>
        <Paragraph text='Enter your e-mail and password' />
        <FormLogin />
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        </>
    )
}

export default LoginPage;