import { jwtDecode } from 'jwt-decode';
import { Button } from '@/view/components';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
export const Login = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const credentialResponseDecoded = jwtDecode(credentialResponse.credential ?? '');
          console.log(credentialResponseDecoded);
        }}
        onError={() => {
          console.log('login Failed');
        }}
      />
      <Button
        onClick={() => {
          googleLogout();
        }}
      >
        Logou
      </Button>
    </>
  );
};
