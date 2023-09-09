import LogoutButton from "@/components/Buttons/LogoutButton";
import Profile from "@/components/Cards/Profile";
import Header from "@/components/Marginalia/Header";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <>
      <Header action={<LogoutButton />} />
      <main className="py-6">
        <div className="relative flex justify-center max-w-6xl m-auto gap-4">
          <div className="w-[275px] h-fit sticky top-4 space-y-4">
            <div className="rounded bg-elevated-base w-full h-20 flex px-4 items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-300 bg-opacity-50 animate-pulse"></div>
              <div>
                <p className="text-sub-gray">Welcome back,</p>
                <h1 className="text-slate-300 text-2xl animate-pulse">
                  Loading
                </h1>
              </div>
            </div>
            <div className="h-96 w-full bg-elevated-base rounded px-4 py-4 space-y-3">
              <h1 className="text-primary-green text-2xl font-semibold w-full">
                My Stats
              </h1>
              <div className="border-[1px] border-y-gray-300 max-w-full" />
              <div className="space-y-1">
                <h2 className="text-gray-300 text-md">Top 3 Artists</h2>
                <div className="flex flex-col gap-1">
                  {Array(3)
                    .fill(0)
                    .map((__, index) => (
                      <a
                        key={index}
                        className="block rounded w-full bg-slate-300 bg-opacity-50 animate-pulse h-5"
                        style={{ animationDelay: `${index * 0.7}s` }}
                      ></a>
                    ))}
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="text-gray-300 text-md">Top 3 Songs</h2>
                <div className="flex flex-col gap-1">
                  {Array(3)
                    .fill(0)
                    .map((__, index) => (
                      <a
                        key={index}
                        className="block rounded w-full bg-slate-300 bg-opacity-50 animate-pulse h-5"
                        style={{ animationDelay: `${index * 0.6}s` }}
                      ></a>
                    ))}
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="text-gray-300 text-md">Current Favourite</h2>
                <a className="block rounded w-full bg-slate-300 bg-opacity-50 animate-pulse h-5"></a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="space-y-4 w-full">
              <div className="flex flex-col gap-4 bg-elevated-base rounded p-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-slate-300 bg-opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <div className="px-8">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-center text-lg text-primary-green mb-3">
                      Recently Played
                    </h3>
                    <ol className="px-2 space-y-4 ">
                      {Array(5)
                        .fill(0)
                        .map((__, index) => (
                          <div
                            key={index}
                            style={{ animationDelay: `${index * 0.8}s` }}
                            className="w-full h-14 rounded bg-slate-300 bg-opacity-50 animate-pulse"
                          ></div>
                        ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-center text-lg text-primary-green mb-3">
                      Top Artists
                    </h3>
                    <div className="flex flex-row justify-center items-center gap-6 ">
                      {Array(3)
                        .fill(0)
                        .map((__, index) => (
                          <div
                            style={{ animationDelay: `${index * 0.6}s` }}
                            key={index}
                            className="w-16 h-16 rounded-full bg-slate-300 bg-opacity-50 animate-pulse"
                          ></div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-elevated-base rounded p-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-slate-300 bg-opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <div className="px-8">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-center text-lg text-primary-green mb-3">
                      Recently Played
                    </h3>
                    <ol className="px-2 space-y-4 ">
                      {Array(5)
                        .fill(0)
                        .map((__, index) => (
                          <div
                            key={index}
                            style={{ animationDelay: `${index * 0.8}s` }}
                            className="w-full h-14 rounded bg-slate-300 bg-opacity-50 animate-pulse"
                          ></div>
                        ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-center text-lg text-primary-green mb-3">
                      Top Artists
                    </h3>
                    <div className="flex flex-row justify-center items-center gap-6 ">
                      {Array(3)
                        .fill(0)
                        .map((__, index) => (
                          <div
                            style={{ animationDelay: `${index * 0.6}s` }}
                            key={index}
                            className="w-16 h-16 rounded-full bg-slate-300 bg-opacity-50 animate-pulse"
                          ></div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[217px] h-fit sticky top-4 space-y-4">
            <div className=" bg-elevated-base w-full px-4 py-2 rounded space-y-2">
              <p className="text-sub-gray ">Current payment status:</p>

              <h3 className="text-sub-gray text-center  bg-opacity-50 animate-pulse">
                Loading...
              </h3>
            </div>

            <div className="bg-elevated-base w-full px-4 py-2 rounded space-y-2">
              <h1 className="text-white text-2xl w-full">My Points:</h1>
              <p className=" bg-gradient-to-r  from-blue-500 to-primary-green bg-clip-text text-transparent w-full text-2xl font-semibold text-center bg-opacity-50 animate-pulse">
                Loading ...
              </p>
            </div>

            <div className="bg-elevated-base w-full px-4 py-3 rounded space-y-2">
              <h1 className="text-primary-green text-2xl w-full">
                Your Next Bill
              </h1>
              <p className="text-sub-gray w-full text-center  bg-opacity-50 animate-pulse">
                Loading ...
              </p>
              <h1 className="text-white text-xl w-full">Payment History</h1>
              <div className="border-[1px] border-y-gray-300 max-w-full" />

              <h3 className="text-sub-gray text-center  bg-opacity-50 animate-pulse">
                Loading...
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Loader;
