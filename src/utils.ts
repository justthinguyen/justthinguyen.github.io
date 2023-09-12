import { ITextLink } from './customTypes';

export const insertLink = (text: string, links: ITextLink): string =>
    Object.keys(links).reduce((insertedText, k) => insertedText.replaceAll(k, `<a href="${links[k]}" target="_blank">${k}</a>`), text);
