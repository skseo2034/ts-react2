import React  from 'react';
import * as ReactDOM from 'react-dom';
import WordRelay from "./WordRelay";
import {createRoot} from "react-dom/client";

const rootElement = document.querySelector('#root') as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
    <WordRelay />
);

