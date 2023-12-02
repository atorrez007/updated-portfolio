"use client";
import { SocialIcon } from "react-social-icons";

function Social() {
  return (
    <section className="mt-8">
      <hr className="my-8 border-b-[1px] border-black"></hr>
      <section className="flex justify-center gap-6">
        <SocialIcon
          url="https://github.com/atorrez007"
          target="_blank"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://x.com/atorrez_007"
          target="_blank"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://linkedin.com/in/atorrez007"
          target="_blank"
          style={{ height: 40, width: 40 }}
        />
      </section>
    </section>
  );
}

export default Social;
