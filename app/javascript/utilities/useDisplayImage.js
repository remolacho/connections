import React from 'react'

export default function useDisplayImage() {
  const [result, setResult] = React.useState("");

  function uploader(e) {
    const imageFile = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setResult(e.target.result);
    });

    reader.readAsDataURL(imageFile);
  }

  return [ result, uploader ];
}