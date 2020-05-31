# Try sqlite3

Quick demo for trying out SQLite3 in memory.

To generate the JSON files:

```
> node generate.js
Created ./small.json with 100 entries
Created ./large.json with 65000 entries
```

To Build the SQLite database in memory and try querying it:

```
> node load.js
Insert 65000 entries: 1526ms
{ department: 'Automotive' }
{ department: 'Baby' }
{ department: 'Beauty' }
{ department: 'Books' }
{ department: 'Clothing' }
{ department: 'Computers' }
{ department: 'Electronics' }
{ department: 'Games' }
{ department: 'Garden' }
{ department: 'Grocery' }
{ department: 'Health' }
{ department: 'Home' }
{ department: 'Industrial' }
{ department: 'Jewelery' }
{ department: 'Kids' }
{ department: 'Movies' }
{ department: 'Music' }
{ department: 'Outdoors' }
{ department: 'Shoes' }
{ department: 'Sports' }
{ department: 'Tools' }
{ department: 'Toys' }
Query rows: 9ms
```

## Better SQLite3

This guy claims to have a faster SQLite implementation: https://github.com/JoshuaWise/better-sqlite3

It didn't install off-the-bat for me on my Mac, though, and if the standard SQLite3 library is going to load all the entries in 1.5s then I don't think it's really worth it.
