import React from "react";

export default function CustomIframe({ title, url, width, height }) {
  return (
    <>
      <div className="bg-[#6a1b9a] text-center font-bold text-[20px] mb-7 mt-6 text-white p-3 rounded-3xl">
        {title}
      </div>
      <iframe
        className="w-[100%]"
        width={width}
        height={height}
        src={url}
        frameBorder="0"
        allowFullScreen={false}
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </>
  );
}
