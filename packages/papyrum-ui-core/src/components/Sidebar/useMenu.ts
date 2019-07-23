import { Entry } from '../Menu';

const MAX_QUERY = 3;

export const useMenu = ({ query, entries }) => {
  if (query.length >= MAX_QUERY) {
    let db = {};
    for (let i = 0; i < Object.values(entries).length; i++) {
      const entry = (Object.values(entries)[i] as Entry);
      if (entry.name.toLocaleLowerCase().includes(query)) {
        db[entry.name] = {
          ...entry,
          open: true
        };
        continue;
      }
      if (entry.children) {
        db[entry.name] = {};
        db[entry.name].children = [];
        entry.children.forEach((child: Entry) => {
          if (child.name.toLocaleLowerCase().includes(query)) {
            db[entry.name] = {
              ...db[entry.name],
              name: entry.name,
              open: true,
            };
            db[entry.name].children.push(child);
          }
        });
        if (!db[entry.name].children.length) {
          delete db[entry.name];
        }
      }
    }
    return db;
  }
  return entries;
};