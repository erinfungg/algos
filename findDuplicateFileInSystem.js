function findDuplicate(paths) {
  let contents = {};
  for (let i = 0; i < paths.length; i++) {
    let directory = paths[i].split(" ");
    for (let j = 1; j < directory.length; j++) {
      const file = directory[j].split("(");
      const fileName = file[0];
      const content = file[1];
      if (!(content in contents))
        contents[content] = [directory[0] + "/" + fileName];
      else contents[content].push(directory[0] + "/" + fileName);
    }
  }
  let final = [];
  for (let key in contents) {
    if (contents[key].length > 1) final.push(contents[key]);
  }
  return final;
}

console.log(
  findDuplicate([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)"
  ])
); //[["root/a/1.txt", "root/c/3.txt"], ["root/a/2.txt", "root/c/d/4.txt", "root/4.txt"]];
