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

function signin() {
  return <div>signin</div>;
}

export default signin;
