import StartupsByUser from "@/components/StartupByUser";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) notFound();

  return (
    <div className="min-h-screen">
      <section className="profile_container ">
        <div className="profile_card w-20">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {user?.name}
            </h3>
          </div>
          {/* Profile Pic */}
          <Image
            src={user.image}
            alt="Profile Picture"
            width={220}
            height={220}
            className="profile_image "
          />
          {/* Username */}
          <p className="text-30-extrabold mt-7 text-center">{user.username}</p>

          {/* user Bio */}
          <p className="mt-1 text-center text-14-normal">{user.bio}</p>
        </div>
        <div className="flex flex-wrap border-l-4 pl-10 border-black gap-10">
          <StartupsByUser id={id} />
        </div>
      </section>
    </div>
  );
};

export default page;
