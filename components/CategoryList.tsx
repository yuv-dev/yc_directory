import { client } from "@/sanity/lib/client";
import { STARTUPS_CATEGORY } from "@/sanity/lib/queries";
import Link from "next/link";
import React from "react";

const CategoryList = async ({category} : {category:string | undefined} ) => {
  const allStartupCategories = await client.fetch(STARTUPS_CATEGORY);
  const categoryObject = {};

  allStartupCategories.forEach((startup: { category: string }) =>
    startup["category"].split(",").forEach((ctg: string) => {
      ctg = ctg.trim().toLowerCase();
      categoryObject[ctg] = categoryObject[ctg] + 1 || 1;
    })
  );
  return (
    <section className="flex flex-wrap py-10 justify-center">
      {Object.keys(categoryObject)?.map((ctg) => {
        return (
          <Link key={ctg} href={`/startup/category/${ctg}`}>
            <button
              type="submit"
              className={`mr-4 rounded-full border hover:border-primary text-black text-lg font-semibold px-4 py-2 ${ctg === category ? "bg-red-50 border-primary border-2" : "bg-red-100 "}`}
            >
              <span>{ctg}:</span>
              <span className="ml-3 text-primary">{categoryObject[ctg]}</span>
            </button>
          </Link>
        );
      })}
    </section>
  );
};

export default CategoryList;
