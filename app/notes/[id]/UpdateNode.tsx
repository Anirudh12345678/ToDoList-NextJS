'use client';

// export default function Test() {
//   return (
//     <div>
//       <h1>Create Note</h1>
//     </div>
//   );
// }

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function UpdateNote() {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');

  const router = useRouter();
  const lenn = usePathname().length - 1;
  const id = usePathname().substring(7,lenn+1);
  const create = async() => {
    // const db = new PocketBase('http://127.0.0.1:8090');

    // await db.records.create('notes', {
    //   title,
    //   content,
    // });
    await fetch(`http://127.0.0.1:8090/api/collections/Test/records/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Title,
        Content,
      }),
    });
    setContent('');
    setTitle('');
    console.log("Updated");
    //router.back();
    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Update the note</h3>
      <input
        type="text"
        placeholder="Title"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={Content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Update note
      </button>
    </form>
  );
}
