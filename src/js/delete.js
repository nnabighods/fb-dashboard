import { getApp } from 'firebase/app';
import {ref as databaseRef, set, get, ref, remove} from 'firebase/database';
import {db, storage} from "./libs/firebase/firebaseConfig";

async function deleteData() {
    const key = sessionStorage.getItem('key');
    const path = databaseRef(db, `seed/${key}`);
    remove(path);
}

deleteData();