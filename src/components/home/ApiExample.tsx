"use client";

import { useRef, useState } from "react";

const examples = {
  cURL: `curl https://api.payvantage.com.ng/v1/virtual-accounts \\
  -H "Authorization: Bearer $PV_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "account_name": "Adaeze Stores Ltd",
    "reference": "INV-2043"
  }'`,
  "Node.js": `const response = await fetch(
  "https://api.payvantage.com.ng/v1/virtual-accounts", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.PV_SECRET_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      account_name: "Adaeze Stores Ltd",
      reference: "INV-2043"
    })
  }
);`,
  Python: `import os
import requests

response = requests.post(
  "https://api.payvantage.com.ng/v1/virtual-accounts",
  headers={
    "Authorization": "Bearer " + os.environ["PV_SECRET_KEY"]
  },
  json={
    "account_name": "Adaeze Stores Ltd",
    "reference": "INV-2043"
  }
)`,
};
const languages = Object.keys(examples) as (keyof typeof examples)[];
const responseExample = `{
  "status": "success",
  "data": {
    "account_number": "0123456789",
    "account_name": "Adaeze Stores Ltd",
    "bank": "Ethica Microfinance Bank",
    "reference": "INV-2043"
  }
}`;

function HighlightedCode({ code }: { code: string }) {
  return code.split(/("[^"\n]*"|'[^'\n]*')/g).map((part, index) => (
    <span className={/^["']/.test(part) ? "font-medium text-[#008000]" : undefined} key={index}>{part}</span>
  ));
}

export default function ApiExample() {
  const [language, setLanguage] = useState<keyof typeof examples>("cURL");
  const [copyStatus, setCopyStatus] = useState("");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  async function copyExample() {
    try {
      await navigator.clipboard.writeText(examples[language]);
      setCopyStatus("Copied");
    } catch {
      setCopyStatus("Unable to copy. Select the code to copy it manually.");
    }
  }

  return (
    <div className="relative z-0 h-[537px] w-full rounded-[20px] border border-[rgba(164,164,164,0.2)] bg-white text-[10px] leading-5 text-black before:absolute before:top-5 before:right-[60px] before:-bottom-5 before:left-[60px] before:z-[-1] before:rounded-[20px] before:bg-[#6566aa] before:content-[''] after:absolute after:top-2.5 after:right-[30px] after:-bottom-2.5 after:left-[30px] after:z-[-1] after:rounded-[20px] after:bg-[#898aba] after:content-[''] [&_pre]:m-0 [&_pre]:text-[10px] [&_pre]:leading-5 [&_pre]:text-[#a4a4a4] [&_pre]:[font-family:inherit] [&_pre]:[tab-size:2] [&_code]:[font-family:inherit] max-md:[&_pre]:text-[9px]">
      <div className="flex h-[60px] items-center justify-between rounded-t-[20px] border-b border-[#eee] bg-white pr-5 pl-2.5 max-md:pr-3">
        <div role="tablist" aria-label="API example language" className="flex self-stretch [&>button]:w-[73px] [&>button]:cursor-pointer [&>button]:border-0 [&>button]:border-b-[3px] [&>button]:border-transparent [&>button]:bg-transparent [&>button]:text-[12px] [&>button]:font-semibold [&>button]:text-[#a4a4a4] [&>button]:[font-family:inherit] [&>button[aria-selected=true]]:border-b-[#ffa500] [&>button[aria-selected=true]]:text-black max-lg:[&>button]:w-[60px] max-md:[&>button]:text-[11px] max-[23.75rem]:[&>button]:w-[50px]">
          {languages.map((item, index) => (
            <button
              key={item}
              ref={element => { tabs.current[index] = element; }}
              id={`code-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={language === item}
              aria-controls="api-code-panel"
              tabIndex={language === item ? 0 : -1}
              onClick={() => { setLanguage(item); setCopyStatus(""); }}
              onKeyDown={event => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % languages.length;
                else if (event.key === "ArrowLeft") next = (index + languages.length - 1) % languages.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = languages.length - 1;
                else return;
                event.preventDefault();
                setLanguage(languages[next]);
                setCopyStatus("");
                tabs.current[next]?.focus();
              }}
            >{item}</button>
          ))}
        </div>
        <button type="button" className="min-h-7 min-w-[49px] cursor-pointer rounded-md border-0 bg-[rgba(210,211,230,0.3)] text-[12px] font-bold text-[#3e4095] [font-family:inherit]" onClick={copyExample}>{copyStatus === "Copied" ? "copied" : "copy"}</button>
        <span role="status" className="sr-only">{copyStatus}</span>
      </div>
      <div id="api-code-panel" role="tabpanel" aria-labelledby={`code-tab-${languages.indexOf(language)}`} tabIndex={0} className="h-[224px] overflow-auto bg-white p-5 max-md:p-4">
        <div className="mb-[18px] flex items-center gap-2.5 [&>span]:rounded-md [&>span]:bg-[rgba(210,211,230,0.3)] [&>span]:px-2.5 [&>span]:py-1 [&>span]:font-bold [&>span]:leading-[19px] [&>span]:text-[#3e4095] [&>span]:[font-family:monospace]"><span>POST</span><strong>/v1/virtual-accounts</strong></div>
        <pre><code><HighlightedCode code={examples[language]} /></code></pre>
      </div>
      <div className="h-[251px] rounded-b-[20px] border-t border-[rgba(164,164,164,0.2)] bg-[#eeeef5] p-5 max-md:p-4">
        <div className="mb-[26px] flex items-center justify-between font-semibold text-[#3e4095] [&>span:last-child]:rounded-md [&>span:last-child]:bg-[rgba(0,128,0,0.1)] [&>span:last-child]:px-2.5 [&>span:last-child]:py-1 [&>span:last-child]:font-bold [&>span:last-child]:leading-[19px] [&>span:last-child]:text-[#008000] [&>span:last-child]:[font-family:monospace]"><span>Response</span><span>201 Created</span></div>
        <pre><code><HighlightedCode code={responseExample} /></code></pre>
      </div>
    </div>
  );
}
