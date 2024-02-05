import Formulario from "./formulario";
import SocialButton from "./SocialButton";

const Registro = ({ error, setError }) => {
    return (
      <>
        <h1>Crear tu cuenta</h1>
        <SocialButton iconGit={'iconGit'} />
        <h2 style={{ fontSize: '1rem' }}>  o usa tu email para registrarte</h2>
        <Formulario error={error} setError={setError} />
      </>
    );
  };

export default Registro;
