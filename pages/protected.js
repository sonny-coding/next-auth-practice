import { getSession, useSession } from "next-auth/react";
import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

// Protect a page from client side
function Protected() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/auth/signin");
    },
  });
  if (status === "loading") {
    return <Heading>Loading...</Heading>;
  }

  if (status === "unauthenticated")
    return <Heading>You are unauthenticated. This is a protected page</Heading>;
  return <Heading>{session.user.email}</Heading>;
}

// PROTECT A PAGE FROM SERVER SIDE
// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   if (!session) {
//     return {
//       redirect: {
//         distination: "/auth/signin",
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// };

export default Protected;
