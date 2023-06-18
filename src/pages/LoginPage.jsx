import FormLogin from "components/FormLogin/FormLogin";
import Heading from "components/Heading/Heading";
import Paragraph from "components/Paragraph/Paragraph";

const LoginPage = function() {
    return (
        <>
        <Heading text='Login Page'/>
        <Paragraph text='Login form' />
        <FormLogin />
        </>
    )
}

export default LoginPage;