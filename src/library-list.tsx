import React, { useEffect, useState } from 'react';

export function LibraryList() {
  const [libraries, setLibraries] = useState([] as string[]);

  useEffect(() => {
    fetch('https://hexi.wokwi.com/libraries')
      .then((req) => req.json())
      .then((response) => setLibraries(response.libraries));
  }, []);

  if (!libraries.length) {
    return <p>Loading library list...</p>;
  }

  return (
    <ul>
      {libraries.map((libName) => (
        <li key={libName}>{libName}</li>
      ))}
    </ul>
  );
}
