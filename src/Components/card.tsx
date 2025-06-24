import type { ReactElement } from "react";
import { ShareIcon } from "../icons/shareIcon";
import { DeleteIcon } from "../icons/deleteIcon";
import { XIcon } from "../icons/xIcon";
import { LinkIcon } from "../icons/linkIcon";
import { YtIcon } from "../icons/ytIcon";
import { DocIcon } from "../icons/docIcon";
import { IgIcon } from "../icons/igIcon";

interface CardProps {
 type:"Tweets"|"Youtube"|"Documents"|"Others"|"Instagram";
 title:string;
 link:string;
 tags?: ReactElement[];
}

const cardType={
    "Tweets":<XIcon size="md" />,
    "Youtube":<YtIcon/>,
    "Documents":<DocIcon/>,
    "Instagram":<IgIcon/>,
    "Others":<LinkIcon/>
}
const EmbedPreview = ({ type, link }: { type: CardProps["type"]; link: string }) => {
  if (type === "Youtube") {
    const videoId = new URL(link).searchParams.get("v") || link.split("youtu.be/")[1];
    return (
      <iframe
        className="w-full h-48 rounded-lg mt-4"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (type === "Tweets") {
    return (
      <>
        <blockquote className="twitter-tweet" data-lang="en">
          <a href={link}></a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </>
    );
  }

  if (type === "Instagram") {
    return (
      <>
        <blockquote
          className="instagram-media mt-4"
          data-instgrm-permalink={link}
          data-instgrm-version="14"
        ></blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </>
    );
  }

  return null;
};

export const Card=(props:CardProps)=>{

    return <div className="bg-white p-4 rounded-lg max-w-100 border-2 inset-shadow-grey-300 border-grey-300">
    <div className="flex items-center justify-between">
       <div className="flex items-center gap-2 text-grey-500 text-2xl font-bold">
       {cardType[props.type] }
        <h1>{props.title}</h1>
       </div>
       <div className="flex items-center gap-4  text-grey-500">
        <a href="/share" target="_blank">
        <ShareIcon size="md"/>
        </a>
        <a href="/delete" target="_blank">
        <DeleteIcon size="md"/>
        </a>
       </div>
    </div>
   
        <EmbedPreview type={props.type} link={props.link} />
    </div>

}