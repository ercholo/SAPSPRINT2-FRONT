import { ReactKeycloakProvider } from "@react-keycloak/web";
import { AppRouter } from "./router/AppRouter";
import keycloak from "./keycloak";

export const SapsprintApp2 = () => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{ onLoad: "check-sso" }}
    >
      <AppRouter />
    </ReactKeycloakProvider>
  );
}

export default SapsprintApp2;