import { useEffect, useState } from "react";
import { auth } from "../firebase/utils";

const data = [
  {
    title: "Trending",
    items: [
      {
        title: "Best Sellers",
        open: true,
      },
      {
        title: "New Releases",
        open: false,
      },
      {
        title: "Movers & Shakers",
        open: true,
      },
    ],
  },
  {
    title: "Digital Content & Devices",
    items: [
      {
        title: "Amazon Prime Video",
        open: true,
      },
      {
        title: "Kindle eBooks",
        open: false,
      },
      {
        title: "Amazon Prime Music",
        open: true,
      },
      {
        title: "Mobiles, Computers",
        open: true,
      },
    ],
  },
  {
    title: "Fashion",
    items: [
      {
        title: "Amazon Prime Video",
        open: true,
      },
      {
        title: "Kindle eBooks",
        open: false,
      },
      {
        title: "Amazon Prime Music",
        open: true,
      },
      {
        title: "Mobiles, Computers",
        open: true,
      },
    ],
  },
];

const Sidebar = ({ open, onClose }) => {
  const [user, setUser] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Set the current user
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="w-full max-w-[100dvw] h-full max-h-[100dvh] absolute top-0 left-0 z-[7] bg-[#000000b0]"
        onClick={onClose}
      />
      <div className="relative w-[364px] h-full bg-white flex flex-col overflow-y-auto z-10">
        <button className="min-h-min px-8 py-4 bg-[#222F3E] font-bold text-[19px] leading-[25px] flex gap-2 text-white items-center">
          {user ? (
            <>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-400"></div>
              )}
              {user.displayName ? `Hello, ${user.displayName}` : "Hello, User"}
            </>
          ) : (
            "Hello, sign in"
          )}
        </button>
        {data.map((item) => (
          <ContentContainer key={item.title} data={item} />
        ))}
      </div>
      <button
        className="h-10 w-10 aspect-square border border-white rounded-md text-white absolute left-[368px] top-2 z-10 bg-[#00000020] cursor-pointer"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default Sidebar;

function ContentContainer({ data }) {
  return (
    <div className="flex flex-col px-8 py-2 border-b border-gray-400">
      <div className="text-[18px] leading-6 font-bold text-[#111] py-2">
        {data?.title}
      </div>
      <ul className="list-none p-0 m-0 flex flex-col">
        {data?.items?.map((item, index) => (
          <li
            key={index}
            className="py-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
