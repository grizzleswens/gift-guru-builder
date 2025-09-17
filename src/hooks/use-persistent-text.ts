import { useState, useEffect, useCallback } from 'react';

interface PersistentTextState {
  [key: string]: string;
}

const STORAGE_KEY = 'editable-text-state';

export const usePersistentText = () => {
  const [state, setState] = useState<PersistentTextState>({});
  const [saveStatus, setSaveStatus] = useState<{ [key: string]: 'saving' | 'saved' | null }>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedState = JSON.parse(saved);
        console.log('Loaded persistent state:', parsedState);
        setState(parsedState);
      }
    } catch (error) {
      console.warn('Failed to load saved text state:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever state changes
  const saveToStorage = useCallback((newState: PersistentTextState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (error) {
      console.warn('Failed to save text state:', error);
    }
  }, []);

  const updateText = useCallback((key: string, value: string) => {
    console.log('Updating text:', key, value);
    setState(prev => {
      const newState = { ...prev, [key]: value };
      saveToStorage(newState);
      console.log('New state after update:', newState);
      return newState;
    });

    // Show save status
    setSaveStatus(prev => ({ ...prev, [key]: 'saving' }));
    
    // Clear save status after a short delay
    setTimeout(() => {
      setSaveStatus(prev => ({ ...prev, [key]: 'saved' }));
      setTimeout(() => {
        setSaveStatus(prev => ({ ...prev, [key]: null }));
      }, 1000);
    }, 200);
  }, [saveToStorage]);

  const getText = useCallback((key: string, defaultValue: string = '') => {
    return state[key] || defaultValue;
  }, [state]);

  return {
    getText,
    updateText,
    saveStatus,
    isLoaded
  };
};