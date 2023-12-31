// NotionPage.tsx

"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";

type NotionPageProps = {
  recordMap: ExtendedRecordMap;
};
export const NotionPage = ({ recordMap }: NotionPageProps) => {
  if (!recordMap) {
    return null;
  }

  return (
    <>

      <div className="navheader">
        <h2>Lior Ben-David</h2>
        <div className="navheadercontact">
          <Link href={"/"}>Home</Link>
          <a href="https://www.linkedin.com/in/lior-ben-david-8772471b6/">
            LinkedIn
          </a>
          <a href="mailto:liorbd@outlook.com">liorbd@outlook.com</a>
        </div>
      </div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
        }}
      />
    </>
  );
};
