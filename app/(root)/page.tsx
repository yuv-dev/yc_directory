import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartupCCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { StartUpTypeCard } from "@/components/StartupCCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);
  console.log(JSON.stringify(posts, null, 2));

  return (
    <div className="flex flex-col  bg-white-100">
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartUpTypeCard) => {
              return <StartUpCard key={post._id} post={post} />;
            })
          ) : (
            <h1>No Startups Found</h1>
          )}
        </ul>
      </section>
    </div>
  );
}
