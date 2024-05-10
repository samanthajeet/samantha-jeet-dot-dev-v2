import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  function Badge(props) {
    return (
      <a
        {...props}
        target="_blank"
        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      />
    );
  }
  return (
    <main>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        ✌🏽aloha, I'm sam jeet
        <span className="text-xs tracking-wide prose prose-neutral dark:prose-invert">
          {" "}
          she/her
        </span>
      </h1>
      <section className="space-y-3 content">
        <Image
          alt="Me speaking on stage at React Summit about the future of Next.js"
          src="/images/samAvatar1.jpg"
          height={250}
          width={250}
          priority
          className="rounded-lg object-cover float-left mr-3"
        />
        <p className="prose prose-neutral dark:prose-invert">
          Samantha has always dreamed of speaking about herself in the third
          person and is thankful for this opportunity.
        </p>

        <p className="prose prose-neutral dark:prose-invert">
          Sam was raised primarily on islands in The Pacific like Hawai'i, the
          Philippines, and Japan. Proof of this is seen in her wide feet,
          year-round sandal tan, and immense love for Spam and rice. Sam's
          friends have occasionally referred to her as "Miss Aloha" and to this
          day it's still one of the best compliments she could ever receive.
          Since moving to the mainland in high school, Miss Jeet has been proud
          to call Oceanside her hometown.
        </p>
        <p className="prose prose-neutral dark:prose-invert">
          Before becoming a developer, Samantha was a GIS Specialist working in
          the transit management and design industry. Though she loved geography
          and those she worked with, she knew it wouldn't fulfill her much
          longer. This realization brought her back to coding, which she first
          discovered in middle school when she would edit her MySpace page and
          make GeoCities fan pages for Charmed and Star Trek Voyager.
        </p>
        <Image
          alt="Me speaking on stage at React Summit about the future of Next.js"
          src="/images/samBW.jpg"
          height={250}
          width={250}
          priority
          className="rounded-lg object-cover float-right ml-3 aspect-square"
        />
        <p className="prose prose-neutral dark:prose-invert">
          Samantha officially moved to Salt Lake City in late 2019 when she
          accepted her first developer role. Since then, Sam has had the great
          joy of working for cool organizations like Plurlaight and has had the
          opportunity to learn from and work alongside some of the smartest and
          grooviest people in the business.
        </p>

        <p className="prose prose-neutral dark:prose-invert">
          Outside of work, Miss Jeet enjoys spending time with her partner and
          family, analog photography, binge-watching Bob's Burgers, calling her
          mom 3 times a day, renovating her house she promised her partner would
          only take 5 months to do, traveling, learning the new slang all the
          kids are using these days, and making lists.
        </p>
        <p className="prose prose-neutral dark:prose-invert">
          Miss Jeet holds a B.Sci in Health Care Administration and an M.Sci in
          Geographic Information Sciences. She promised her mom she would
          mention that.
        </p>
      </section>
    </main>
  );
}
