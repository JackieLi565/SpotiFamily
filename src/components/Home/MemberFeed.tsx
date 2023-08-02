import Image from "next/image";

function getMemberFeed() {
  /**
   * For Each Person
   * Name
   * pfp
   * recently played
   * top artists
   * current genre
   */
}

export default function MemberFeed() {
  return (
    <div className="space-y-4">
      <div className="w-full h-[600px] flex flex-col gap-4 bg-elevated-base rounded p-4">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full object-fill h-12 w-12"
            src={
              "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
            }
            alt="profile picture"
            width={80}
            height={80}
          />

          <h1 className="text-sub-gray text-2xl w-full flex items-center gap-5">
            <h1>Jackie</h1>{" "}
            <div className=" border-b-2 border-sub-gray w-4/5 h-2" />
          </h1>
        </div>
        <div className="flex w-full h-full">
          <div className=" w-full p-2">
            <div className="flex">
              <div className="w-full space-y-1 ">
                <h3 className="text-center text-lg text-primary-green mb-3">
                  Recently Played
                </h3>
                <ol className="px-2 space-y-2 ">
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="w-full space-y-1 text-center">
                <h3 className="text-center text-lg text-primary-green mb-3">
                  Top Artists
                </h3>
                <ol className="px-2 space-y-2 ">
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      className="rounded-md object-fill h-14 w-14"
                      src={
                        "https://i.scdn.co/image/ab67757000003b8207c4ea988b1bbcb4e579952e"
                      }
                      alt="profile picture"
                      width={80}
                      height={80}
                    />
                    <div className="space-x-1">
                      <h2 className="text-white text-lg">Deserved</h2>
                      <h2 className="text-sub-gray">By Jayya</h2>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <h1 className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-7xl py-10 text-center font-semibold ">
              Hip-Hop
            </h1>
          </div>

          <div className="w-[200px]  flex flex-col items-center gap-6 ">
            <Image
              className="rounded-full h-36 w-36 border-[1px] border-gray-600"
              src={
                "https://i.scdn.co/image/ab6761610000e5ebd969cf117d0b0d4424bebdc5"
              }
              alt="Artist Image"
              width={128}
              height={128}
            />
            <Image
              className="rounded-full h-32 w-32 border-[1px] border-gray-600"
              src={
                "https://i.scdn.co/image/ab6761610000e5ebdf9a1555f53a20087b8c5a5c"
              }
              alt="Artist Image"
              width={128}
              height={128}
            />
            <Image
              className="rounded-full h-28 w-28 border-[1px] border-gray-600"
              src={
                "https://i.scdn.co/image/ab6761610000e5eb33f5d0b5aa74c8400f18ed06"
              }
              alt="Artist Image"
              width={128}
              height={128}
            />
          </div>

          {/* <div className="w-1/4 rounded py-4 transform rotate-90">
            <h1 className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-7xl h-full flex justify-center items-center font-semibold ">
              Hip-Hop
            </h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}
