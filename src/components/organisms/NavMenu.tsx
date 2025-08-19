import React from "react";
import { Typography } from "../atoms/Typography";
import { UserAvatar } from "../molecules/UserAvatar";
import { LinkButton } from "../molecules/LinkButton";

export function NavMenu () {
  return (
    <div className="grid grid-cols-3 place-content-center place-items-center gap-4">
      <LinkButton href="/" className="text-blue-700 font-medium">
        Home
      </LinkButton>
      <UserAvatar />
    </div>
  );
}
