import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const getInitialTheme = (): 'light' | 'dark' => {
  const saved = localStorage.getItem('theme');
  return saved === 'light' ? 'light' : 'dark';
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    return { theme: newTheme };
  }),
}));
