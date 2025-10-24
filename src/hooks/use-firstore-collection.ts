import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, QueryConstraint } from 'firebase/firestore';
import { db } from '@/constants/firebase';

export function useFirestoreCollection<T>(
  collectionName: string,
  fieldName?: string,
  fieldValue?: any,
  enabled = true
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) return;

    setLoading(true);

    const constraints: QueryConstraint[] = [];
    if (fieldName && fieldValue !== undefined) {
      constraints.push(where(fieldName, '==', fieldValue));
    }

    const q = query(collection(db, collectionName), ...constraints);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const documents = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];
        setData(documents);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName, fieldName, fieldValue, enabled]);

  return { data, loading, error };
}
