import React from "react";
import Meta from "./../components/Meta";
import AuthSection from "./../components/AuthSection";
import { useRouter } from "./../util/router";

function AuthPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Auth" />
      <AuthSection
        bgColor="none"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        type={router.query.type}
        // providers={["google", "facebook", "twitter"]}
        providers={["google"]}
        afterAuthPath={router.query.next || "/home"}
      />
    </>
  );
}

export default AuthPage;
