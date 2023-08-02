import Image from "next/image";

function getProfileDetails() {
  // get name
  // top 3 artists
  // top 3 songs
  // current fav song
}

export default function Profile() {
  return (
    <>
      <div className="rounded bg-elevated-base w-full h-20 flex px-4 items-center gap-4">
        <Image
          className="rounded-full object-fill h-12 w-12"
          src={
            "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
          }
          alt="profile picture"
          width={80}
          height={80}
        />
        <div>
          <p className="text-sub-gray">Welcome back,</p>
          <h1 className="text-white text-2xl">Jackie</h1>
        </div>
      </div>

      <div className="h-96 w-full bg-elevated-base rounded px-4 py-2 space-y-3">
        <h1 className="text-primary-green text-2xl font-semibold w-full">
          My Stats
        </h1>
        <div className="border-[1px] border-y-gray-300 max-w-full" />
        <div className="space-y-1">
          <h2 className="text-gray-300 text-md">Top 3 Artists</h2>
          {/* mapp */}
          <div className="flex flex-col gap-1">
            <a href="Link to Song" className="text-sub-gray px-2">
              1. Artist Name
            </a>
            <a href="Link to Song" className="text-sub-gray px-2">
              2. Artist Name
            </a>
            <a href="Link to Song" className="text-sub-gray px-2">
              3. Artist Name
            </a>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-gray-300 text-md">Top 3 Songs</h2>
          {/* mapp */}
          <div className="flex flex-col gap-1">
            <a href="Link to Song" className="text-sub-gray px-2">
              1. Song Name
            </a>
            <a href="Link to Song" className="text-sub-gray px-2">
              2. Song Name
            </a>
            <a href="Link to Song" className="text-sub-gray px-2">
              3. Song Name
            </a>
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-gray-300 text-md">Current Favourite</h2>
          <a href="Link to Song" className="text-sub-gray px-2">
            1. Song Name
          </a>
        </div>
      </div>
    </>
  );
}
