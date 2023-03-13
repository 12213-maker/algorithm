function dateformate(time, form) {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hours = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  form = form.replace('YYYY', year);
  form = form.replace('MM', month);
  form = form.replace("DD", day);
  form = form.replace('hh', hours);
  form = form.replace('mm', m);
  form = form.replace('ss', s);
  return form
}

console.log(dateformate(new Date(), 'YYYY/MM/DD'));
console.log(dateformate(new Date(), 'YYYY年MM月DD日'));
console.log(dateformate(new Date(), 'YYYY:MM:DD hh:mm:ss'))