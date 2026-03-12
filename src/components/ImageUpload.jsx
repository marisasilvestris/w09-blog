"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [isImage, setIsImage] = useState();

  // Source - https://stackoverflow.com/a/19395606
  // Posted by Michael Zaporozhets, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-03-12, License - CC BY-SA 3.0
  function isUriImage(uri) {
    //make sure we remove any nasty GET params
    uri = uri.split("?")[0];
    //moving on, split the uri into parts that had dots before them
    var parts = uri.split(".");
    //get the last part ( should be the extension )
    var extension = parts[parts.length - 1];
    //define some image types to test against
    var imageTypes = [
      "jpg",
      "jpeg",
      "tiff",
      "png",
      "gif",
      "bmp",
      "webp",
      "apng",
    ];
    //check if the extension matches anything in the list.

    if ((imageTypes.indexOf(extension) !== -1) | (uri == "")) {
      return true;
    }
    console.log(uri);
  }
  return (
    <>
      <label htmlFor="image" className="place-self-center shrink-0">
        img url
      </label>
      {isImage === false ? (
        <div className="text-contrast text-xs self-center text-center">
          invalid url
        </div>
      ) : null}
      <input
        type="text"
        name="image"
        placeholder="url here pls"
        className={`basis-[80%] p-1 ${isImage === false ? "border-2 border-contrast shrink" : null}`}
        onBlur={(event) => {
          isUriImage(event.target.value) == true
            ? setIsImage(true)
            : setIsImage(false);
        }}
      />
    </>
  );
}
