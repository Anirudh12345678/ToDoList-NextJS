"use client";
import { permanentRedirect, redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import PocketBase from 'pocketbase';

import { usePathname } from 'next/navigation';


export default async function DeleteNote() {
    // const pb = new PocketBase('http://127.0.0.1:8090/_/');
      const lenn = usePathname().length - 1;
      const myrouter = useRouter();
      const idd = usePathname().substring(7,lenn+1);
      const remove = async() => {
        console.log("DELETEING!!");
        await fetch(`http://127.0.0.1:8090/api/collections/Test/records/${idd}`,{
          signal: AbortSignal.timeout(5000),
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        myrouter.back();
        myrouter.refresh();
        // await pb.collection('Test').delete(idd);
        
    }
    return(
      <form onSubmit={remove}>
        <button type='submit'>
          Delete note
        </button>
      </form>
    );
  }

//await fetch('http://127.0.0.1:8090/api/collections/Test/records',{method: 'DELETE'});