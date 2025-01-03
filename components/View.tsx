
import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import Form from "next/form";
import { unstable_after as after } from "next/server";


const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUPS_VIEWS_QUERY, { id });
   
  //Update views count
  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
  });
  
  const viewClickHandle = async() => {
    "use server";

    await writeClient
      .patch(id)
      .set({ view: totalViews + 1 })
      .commit();
  }

  return (
    <div className="view-container">
      <Form action={viewClickHandle}>
      
      <button type="submit">


      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-bold">Views: {totalViews || 0}</span>
      </p>
      </button>
      </Form>
    </div>
  );
};

export default View;
