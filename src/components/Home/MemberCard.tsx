"use client";
import { MemberCardData } from "@/types/types";
import Image from "next/image";
import { FC } from "react";
import Reveal from "../Animations/Reveal";
import profileIcon from "../../../public/profileIcon.svg";

type MemberCardProps = {
  members: MemberCardData[];
};

const MemberCard: FC<MemberCardProps> = ({ members }) => {
  return (
    <div className="space-y-6">
      {members.map((member) => (
        <Reveal key={member.id}>
          <div key={member.id} className="space-y-4 w-full">
            <div className="flex flex-col gap-4 bg-elevated-base rounded p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full object-fill h-12 w-12"
                    src={member.image ? member.image : profileIcon}
                    alt="profile picture"
                    width={80}
                    height={80}
                  />
                  <h1 className="text-sub-gray text-2xl">
                    {member.name ? member.name : `Member ${member.id}`}
                  </h1>
                </div>

                <h1 className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-2xl text-center font-semibold ">
                  {member.topGenre.charAt(0).toUpperCase() +
                    member.topGenre.slice(1)}
                </h1>
              </div>

              <div className="px-8">
                <div className="space-y-1 ">
                  <h3 className="text-center text-lg text-primary-green mb-3">
                    Recently Played
                  </h3>
                  <ol className="px-2 space-y-4 max-w-xs md:max-w-md">
                    {member.recentlyPlayed.map((track) => (
                      <li className="flex gap-4 " key={track.uri}>
                        <Image
                          className="rounded-md object-fill h-14 w-14"
                          src={track.imageUrl}
                          alt={`${track.name} Picture`}
                          width={80}
                          height={80}
                        />
                        <div className="space-x-1 truncate text-white hover:text-primary-green w-full">
                          <a
                            href={track.uri}
                            className="text-lg overflow-x-hidden "
                          >
                            {track.name}
                          </a>
                          <div className="space-x-2">
                            {track.artist.map((artist) => (
                              <a
                                href={artist.uri}
                                className="text-sub-gray text-md"
                              >
                                {artist.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h3 className="text-center text-lg text-primary-green mb-3">
                    Top Artists
                  </h3>
                  <div className="flex flex-row justify-center items-center gap-6 ">
                    {member.topArtists.map((artist) => (
                      <a href={artist.uri} key={artist.uri}>
                        <Image
                          className="rounded-full w-20 h-20 md:h-32 md:w-32 border-[1px] border-gray-600"
                          src={artist.imageUrl}
                          alt={`${artist.name} Picture`}
                          width={128}
                          height={128}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default MemberCard;
