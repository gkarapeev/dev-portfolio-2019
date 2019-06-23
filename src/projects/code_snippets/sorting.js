const code =
`// Initialize sort direction counters
let sortCounters = {
  name: 0,
  city: 0,
  category: 0,
  accu: 0,
  discount: 0,
  expiry: 0,
  num: 0
}

// The sort function
let sortData = function(colTitle, criteria) {

  // 1. Reset other sort-direction counters to zero

  // 1.1 List all the counters
  let allCounters = ['name', 'city', 'category', 'accu', 'discount', 'expiry', 'num'];

  // 1.2 Remove the one we're sorting by and obtain a list of the irrelevant counters
  let otherCounters = allCounters.filter(cName => cName !== criteria);

  // 1.3 Set them all to zero
  for (let k = 0; k < otherCounters.length; k++) {
    sortCounters[otherCounters[k]] = 0;
  }

  // 2. Increment the counter
  sortCounters[criteria]++;

  // 3. Loop the counter if needed
  if (sortCounters[criteria] === 3) {
    sortCounters[criteria] = 0;
  }

  // 4. Display sort indication via CSS classes
  // 4.1 Remove active class from all column titles
  let allTitles = colTitle.parentNode.parentNode.children;

  for (let c = 0; c < allTitles.length - 1; c++) {
    allTitles[c].firstChild.classList.remove('sort-word-active');
    allTitles[c].firstChild.classList.remove('sort-word-inverted');
  }

  // 4.2 Add the class to the row being sorted, based on counter index
  if (sortCounters[criteria] !== 0) {
    colTitle.classList.add('sort-word-active');

    //4.3 
    if (sortCounters[criteria] === 2) {
      colTitle.classList.add('sort-word-inverted');
    }
  }

  // 5. Define the sort direction based on counter value
  let direction = (sortCounters[criteria] === 2) ? -1 : 1;

  // 6. Define how the objects will be sorted
  function compare(a, b) {

    // 6.1 If it's a date field, cast the strings into Date objects
    if (criteria === 'expiry') {
      let date_a = new Date(a[criteria]);
      let date_b = new Date(b[criteria]);

      if (date_a < date_b) {
        return -1 * direction;
      }

      if (date_a > date_b) {
        return 1 * direction;
      }

    } else {
    // 6.2 Else, just take the values as they are
      if (a[criteria] < b[criteria]) {
        return -1 * direction;
      }

      if (a[criteria] > b[criteria]) {
        return 1 * direction;
      }
    }

    return 0;
  }
  
  // 7. If counter isn't ZERO, perform the sort
  if (sortCounters[criteria] !== 0) {
    recordData.sort(compare);

    // 7.1 Display the sorted result
    showList(recordData);

    // 7.2 Apply any active filters
    applyFilter();

  } else {
    // 8.1 Else, restore the recordData to its original order
    restoreOrder();

    // 8.2 Display the UNsorted result
    showList(recordData);

    // 8.3 Apply any active filters
    applyFilter();
  }
}`;

export default code;