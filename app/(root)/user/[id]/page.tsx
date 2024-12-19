import { auth } from "@/auth";
import StartupsByUser from "@/components/StartupByUser";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = auth();
  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) notFound();
  console.log("**",session?.user, user)

  return (
    <div className="min-h-screen">
      <section className="profile_container flex flex-wrap ">
        <div className="profile_card  !w-full">
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
        <div>{session?._id === id ? (
          <p className="text-4xl font-semibold">Your Startups</p>
        ):(
          <p className="text-4xl font-semibold"> Startups by {user.name}:</p>
        )
        }
        </div>
        <ul className="flex flex-wrap *:self-center border-black gap-10">
          <StartupsByUser id={id} />
        </ul>
      </section>
    </div>
  );
};

export default page;
