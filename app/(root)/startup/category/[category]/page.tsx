import StartUpCard from "@/components/StartupCCard";
import { STARTUPS_BY_CATEGORY, STARTUPS_CATEGORY } from "@/sanity/lib/queries";
import { StartUpTypeCard } from "@/components/StartupCCard";
import { client } from "@/sanity/lib/client";
import CategoryList from "@/components/CategoryList";


const page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const category = (await params).category;
  const posts = await client.fetch(STARTUPS_BY_CATEGORY, { category });

  return (
    <div className="flex flex-col  bg-white-100">
      <section className="pink_container !min-h-[100]">
        <h1 className="text-4xl text-white"> {category}</h1>
      </section>
      
      {/* Category List Section */}
      <CategoryList category={category} />
     
      <section className="section_container">
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
};

export default page;
