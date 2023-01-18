import React from "react";
import Meta from "./../components/Meta";
import AuthSection from "./../components/AuthSection";
import { useRouter } from "./../util/router";

function AuthPage(props) {
  const router = useRouter();

  console.log(router)
  console.log(router.query.type)
  console.log(router.query.next)

  return (
    <>
      <Meta title="Auth" />
      <AuthSection
        bgColor="default"
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
