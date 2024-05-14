import React from "react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <>
      <div className="hidden h-full w-64 flex-col bg-[#121212] p-6 text-[#b3b3b3] md:flex">
        <nav className="flex flex-col gap-4">
          <a
            className="flex items-center gap-4 rounded-md px-2 py-2 hover:bg-[#282828] hover:text-white"
            href="#"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Home</span>
          </a>
          <a
            className="flex items-center gap-4 rounded-md px-2 py-2 hover:bg-[#282828] hover:text-white"
            href="#"
          >
            <SearchIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Search</span>
          </a>
          <a
            className="flex items-center gap-4 rounded-md px-2 py-2 hover:bg-[#282828] hover:text-white"
            href="#"
          >
            <LibraryIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Your Library</span>
          </a>
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <Button className="rounded-full" size="sm" variant="outline">
            Create Playlist
          </Button>
          <a
            className="flex items-center gap-4 rounded-md px-2 py-2 hover:bg-[#282828] hover:text-white"
            href="#"
          >
            <HeartPulseIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Liked Songs</span>
          </a>
        </div>
      </div>
    </>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LibraryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function HeartPulseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}
