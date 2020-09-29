import React from 'react';
import {RecoilRoot} from 'recoil';
import { ChromogenObserver } from 'chromogen';
import CharacterCounter from "./CharacterCounter";
import * as atoms from "./Atom";
import * as selectors from "./Selectors";

function App() {
  return (
    <RecoilRoot>
      <ChromogenObserver store={[atoms, selectors]}/>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;