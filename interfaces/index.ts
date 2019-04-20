import {BrowserType, BrowserItemType} from './browser';
interface ContextualMenuOption {
    name: string,
    action?(): void,
    close?: boolean 
}
export {
    BrowserItemType,
    BrowserType,
    ContextualMenuOption
}