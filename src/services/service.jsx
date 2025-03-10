import {auth, db, str} from './firebaseConfig';
import { getDoc, doc, query, onSnapshot, updateDoc,setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import React,{useState,useRef} from 'react';
// Authentication
export const signIn = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        if (response){
            return True
        }
    } catch (error) {
        console.warn(error)
    }
};

export const signUp = async (email, password, name) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const userId = auth.currentUser.uid;
        await setDoc(doc(db, "users", userId), {
            email: email,
            name: name,
            progress: [],
            achievements: [],
            streak: 0
        });
    } catch (error) {
        console.warn(error);
    }
}

export const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log("Log out");
    } catch (error) {
        console.warn(error);
    }
}

// May be in use
// Firestore
export const getDocument = async (collection, docId) => {
    try {
        const docSnap = await getDoc(doc(db, collection, docId));
        return docSnap.data();
    } catch (error) {
        console.warn(error);
    }
}

export const updateDocument = async (collection, docId, data) => {
    try {
        await updateDoc(doc(db, collection, docId), data);
    } catch (error) {
        console.warn(error);
    }
}

// Storage
export const uploadFile = async (file, path) => {
    try {
        const storageRef = str.ref();
        const fileRef = storageRef.child(path);
        await uploadBytesResumable(fileRef, file);
    } catch (error) {
        console.warn(error);
    }
}

export const getFileUrl = async (path) => {
    try {
        const storageRef = str.ref();
        const fileRef = storageRef.child(path);
        return await getDownloadURL(fileRef);
    } catch (error) {
        console.warn(error);
    }
}