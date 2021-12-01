import React from "react";
import { Image } from "@chakra-ui/react";
import { useUser } from "../provider/UseProvider";

export const ProfileImage = () => {
  const { user } = useUser();
  return (
    <Image
      borderRadius="full"
      boxSize="70px"
      src={user.profileImage}
      alt="Profile"
      objectFit="cover"
    />
  );
};
