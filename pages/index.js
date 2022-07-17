import { useRouter } from "next/router";
import { Heading, Button, Grid } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };
  const handleSignIn = () => {
    // router.push(`auth/signin?callbackUrl=${router.asPath}`);
    router.push("auth/signin");
  };
  return (
    <Grid placeItems="center" gridRowGap="1rem">
      {session ? (
        <>
          <Heading>Signed in as {session.user.name}</Heading>
          <Button onClick={handleSignOut}>Sign out</Button>
        </>
      ) : (
        <>
          <Heading>
            You are not signed in
            <Button onClick={signIn}>Sign in</Button>
          </Heading>
        </>
      )}
    </Grid>
  );
}
