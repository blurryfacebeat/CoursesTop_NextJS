import { createContext, PropsWithChildren, useState } from 'react';
import { IAppContext } from './app.context.types';
import { MenuItem, TopLevelCategory } from '@/services/TopPages';

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<Array<MenuItem>>(menu);

  const setMenu = (newMenu: Array<MenuItem>) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
