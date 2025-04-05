import { useEffect } from "react";
import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  // Convert x.com links to twitter.com
  const embedLink =
    type === "twitter" ? link.replace("https://x.com", "https://twitter.com") : link;

  // Trigger Twitter's embed script after mount
  useEffect(() => {
    if (type === "twitter") {
      setTimeout(() => {
        if ((window as any).twttr?.widgets?.load) {
          (window as any).twttr.widgets.load();
        }
      }, 0);
    }
  }, [embedLink, type]);

  return (
    <div>
      <div className="bg-white rounded-xl p-4 max-w-72 shadow-md ">
        <div className="flex justify-between items-center">
          <div className="flex text-md">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
        {type === "youtube" && (
          <div className="pt-4">
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}

        
        {type === "twitter" && (
          <div className="pt-4">
            <blockquote className="twitter-tweet">
              <a href={embedLink}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
}
