import { useCallback, useRef, useState } from 'react';
import { clone } from '../utils/geometry.js';

export function useObjectHistory(initialObjects = []) {
  const [objects, setObjectsState] = useState(initialObjects);
  const [past, setPast] = useState([]);
  const [future, setFuture] = useState([]);
  const objectsRef = useRef(initialObjects);

  const setObjects = useCallback((value) => {
    setObjectsState((current) => {
      const next = typeof value === 'function' ? value(current) : value;
      objectsRef.current = next;
      return next;
    });
  }, []);

  const snapshot = useCallback(() => {
    setPast((current) => [...current.slice(-59), clone(objectsRef.current)]);
    setFuture([]);
  }, []);

  const resetHistory = useCallback(() => {
    setPast([]);
    setFuture([]);
  }, []);

  const undo = useCallback(() => {
    setPast((currentPast) => {
      if (!currentPast.length) return currentPast;
      const previous = currentPast[currentPast.length - 1];
      setFuture((currentFuture) => [clone(objectsRef.current), ...currentFuture].slice(0, 60));
      objectsRef.current = previous;
      setObjectsState(previous);
      return currentPast.slice(0, -1);
    });
  }, []);

  const redo = useCallback(() => {
    setFuture((currentFuture) => {
      if (!currentFuture.length) return currentFuture;
      const next = currentFuture[0];
      setPast((currentPast) => [...currentPast.slice(-59), clone(objectsRef.current)]);
      objectsRef.current = next;
      setObjectsState(next);
      return currentFuture.slice(1);
    });
  }, []);

  return {
    objects,
    objectsRef,
    setObjects,
    snapshot,
    undo,
    redo,
    resetHistory,
    canUndo: past.length > 0,
    canRedo: future.length > 0,
  };
}
