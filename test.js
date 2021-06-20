const filteredComics = res.data;
const column = res.data.column;
const parsedBooks = [];
const columns = ["eisbn", "ttl", "athr", "img", "ahid_id", "fc1_id"].map((c) =>
  column.indexOf(c)
);
for (const item of res.data.list) {
  const newItem = {};
  columns.forEach((c) => {
    newItem[columns[c]] = item[c];
  });
}
return filteredComics;
