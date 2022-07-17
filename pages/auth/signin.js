import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Grid,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Chakra,
} from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs";
const providers = [
  {
    name: "github",
    Icon: BsGithub,
  },
  {
    name: "twitter",
    Icon: BsTwitter,
  },
  {
    name: "google",
    Icon: BsGoogle,
  },
];

function Signin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");

  if (status === "loading")
    return <Heading>Checking Authentication ...</Heading>;
  if (session) {
    setTimeout(() => {
      router.push("/");
    }, 5000);
    return <Heading>you are already signed in</Heading>;
  }
  const handleOAuthSignIn = (provider) => {
    signIn(provider);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return false;
    signIn("email", { email, redirect: false });
  };
  return (
    <Box>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Email Address</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)}></Input>
        <Button type="submit" w="100%" my={5}>
          Login
        </Button>
      </FormControl>
      <VStack>
        {providers.map(({ name, Icon }) => (
          <Button
            key={name}
            leftIcon={<Icon />}
            onClick={() => handleOAuthSignIn(name)}
            textTransform="uppercase"
            w="100%"
          >
            Sign in with {name}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

export default Signin;
