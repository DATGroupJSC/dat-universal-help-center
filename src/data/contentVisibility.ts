import hiddenDocs from './hiddenDocs.json';

export {hiddenDocs};
const hiddenDocIds = new Set(hiddenDocs);

export function isDocVisible(id: string) {
  return !hiddenDocIds.has(id);
}

export function isPublicDocPath(path: string) {
  const id = path.replace(/^\/huong-dan\//, '').replace(/\/$/, '');
  return isDocVisible(id) && isDocVisible(`${id}/index`);
}
