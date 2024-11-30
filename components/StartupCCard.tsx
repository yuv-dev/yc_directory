import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Author, Startup } from "@/sanity.types";

export type StartUpTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartUpCard = ({ post }: { post: StartUpTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    description,
    category,
    _id,
    image,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      {/* Auhtor Description */}
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?.id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?.id}`}>
          <Image
            src="https://yuvraj.bigpixelweb.com/wp-content/uploads/2024/04/IMG_20230629_1441262.webp"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Startup description */}
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
      </Link>

      {/* Startup Image */}
      <div className="">
        <Link href={`/startup/${_id}`}>
          <Image
            src={
              image ||
              "https://images.pexels.com/photos/29378178/pexels-photo-29378178/free-photo-of-two-coffee-cups-on-balcony-with-scenic-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt="placeholder"
            width={320}
            height={200}
            className="h-[200px] rounded-md group-hover:grayscale "
          />
        </Link>
      </div>
      {/* Startup category */}
      <div className="flex justify-between mt-7 font-semibold">
        <p className="">{category}</p>
        <Link href={`/startup/${_id}`}>
          <button className="bg-black rounded-full hover:text-primary text-white px-4 py-1">
            Details
          </button>
        </Link>
      </div>
    </li>
  );
};

export default StartUpCard;
