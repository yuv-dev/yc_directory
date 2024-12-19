import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR } from "@/sanity/lib/queries";
import React from "react";
import StartUpCard, { StartUpTypeCard } from "@/components/StartupCCard";

const StartupsByUser = async ({ id }: { id: string }) => {
  const startupsByUser = await client.fetch(STARTUPS_BY_AUTHOR, {
    id,
  });

  return (
    <>
      {startupsByUser?.length > 0 ? (
        startupsByUser?.map((startup: StartUpTypeCard) => {
          return <StartUpCard key={startup._id} post={startup} />;
        })
      ) : (
        <p className="text-4xl font-semibold ">No startup found!</p>
      )}
    </>
  );
};

export default StartupsByUser;
