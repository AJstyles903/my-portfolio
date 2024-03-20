'use client'
import SectionLine from "./SectionLine";
import Heading from "./Heading";
import data from "@/data/reviews";
import Image from "next/image";
import Masonry from 'react-masonry-css'
import { useState } from "react";
const Reviews = () => {
    const [count, setCount] = useState(6)
    return (
        <SectionLine>
            <Heading>Testimonials</Heading>
            <h1 className="mt-5 text-5xl font-bold capitalize text-zinc-500 dark:text-zinc-100">what <strong className="dark:text-zinc-400 text-zinc-950">people say ?</strong></h1>
            <p className="w-full mt-5 text-lg font-medium capitalize lg:w-6/12">
                Lorem ipsum dolor sit amet consectetur elit Quod, minima odio voluptate, dicta suscipit saepe dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="relative w-full mt-5">
                {
                    count !== data.length && (
                        <div className="absolute bottom-0 flex items-end justify-center w-full h-full bg-gradient-to-t from-white/80 to-transparent dark:from-black/80 z-50">
                            <button onClick={() => setCount(count + 6)} className="px-4 py-2 mb-20 text-lg border rounded-xl dark:text-zinc-50 dark:bg-zinc-950 bg-zinc-50 text-zinc-950 dark:border-zinc-500 border-zinc-950">Show More</button>
                        </div>
                    )
                }
                <Masonry
                    breakpointCols={{
                        default: 3,
                        1200: 3,
                        700: 2,
                        500: 1
                    }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        data.slice(0, count).map(review => (
                            <div key={review.id} className="flex flex-wrap space-x-4 border bg-zinc-200 dark:bg-zinc-800 p-7 rounded-3xl border-zinc-100 dark:border-zinc-700">
                                <div className="relative overflow-hidden rounded-full w-14 h-14">
                                    <Image src={review.image} alt="profile" fill className="object-cover w-full h-full" />
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-xl font-bold">{review.name}</h1>
                                    <span className="text-base font-medium text-zinc-300">{review.company}</span>
                                    <p className="text-lg font-medium leading-6">{review.comment}</p>
                                </div>
                            </div>
                        ))
                    }
                </Masonry>
            </div>
        </SectionLine>
    )
}

export default Reviews