import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  firestoreTimestamp,
} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //References
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        const percentageComplete =
          (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentageComplete);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const uploadedUrl = await storageRef.getDownloadURL();
        setUrl(uploadedUrl);
        await collectionRef.add({
          url: uploadedUrl,
          createdAt: firestoreTimestamp(),
        });
      }
    );
  }, [file]);
  return { progress, error, url };
};

export default useStorage;
