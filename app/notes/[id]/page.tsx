import styles from '../Notes.module.css';
import Link from "next/link";
import DeleteNote from './DeleteNode';
import UpdateNote from './UpdateNode';

async function getNote(noteId:string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/Test/records/${noteId}`,{
            cache: 'no-store',
        },
    );

    const data = await res.json();
    return data;
}


export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);
    return (
        <div>
          <h1>notes/{note.id}</h1>
          <div className={styles.note}>
            <h3>{note.Title}</h3>
            <h5>{note.Content}</h5>
            <p>{note.created}</p>
          </div>
          <DeleteNote/>
          <UpdateNote />
          <Link href='/notes'>Back to notes</Link>
        </div>
      );
}