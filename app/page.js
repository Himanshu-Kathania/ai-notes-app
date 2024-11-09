"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

const Home = () => {
  const { user } = useUser();
  console.log({ user });
  const createUser = useMutation(api.user.createUser);

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      imageUrl: user?.imageUrl,
    });
    console.log({ result });
  };

  useEffect(() => {
    user && CheckUser();
  }, [createUser, user]);

  return (
    <div>
      <h1>Hey</h1>
      <Button>Like</Button>
      <UserButton />
    </div>
  );
};

const App = () => (
  <ConvexProvider client={convex}>
    <Home />
  </ConvexProvider>
);

export default App;
