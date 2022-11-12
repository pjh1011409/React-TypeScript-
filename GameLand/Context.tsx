import { FunctionComponent } from 'react';
import * as React from 'react';
import { userStore, postStore } from './mobxStore';

export const storeContext = React.createContext({
  userStore,
  postStore,
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <storeContext.Provider value={{ userStore, postStore }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
