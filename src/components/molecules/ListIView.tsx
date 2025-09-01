import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { listEffect, listItemEffect } from "@/utils/variants";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";

interface IList {
  id: string;
  text: string;
  image?: string;
  onClick: (id: string) => void;
}

interface IListView {
  lists: IList[];
  listContainerClassName?: string;
  listItemClassName?: string;
}

function ListView({
  lists,
  listContainerClassName,
  listItemClassName,
}: IListView) {
  return (
    <motion.ul
      className={cn("h-max  w-full space-y-4  bg-white py-4 rounded-xl border", listContainerClassName)}
      variants={listEffect}
      initial={"hidden"}
      animate={"visible"}
    >
      {lists.map(({ text, id, onClick }, idx) => (
        <motion.li
          className={cn("w-full m-0 p-2 divide-y divide-gray-300", listItemClassName)}
          variants={listItemEffect}
          custom={{ itemIdx: idx }}
          initial="hidden"
          animate="visible"

          key={`list-item-${id}-${idx}`}
        >
          <Button
            variant="ghost"
            className="flex justify-start items-center gap-4 w-full hover:[&>p]:text-gray-800"
            onClick={() => onClick(id)}
          >
            <Image
              src="/illustrations/fallback.jpeg"
              height={100}
              width={60}
              alt="list recipe picture"
              className="rounded"
            />
            <Typography level={6} className="text-gray-500 capitalize">
              {text}
            </Typography>
          </Button>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default ListView;