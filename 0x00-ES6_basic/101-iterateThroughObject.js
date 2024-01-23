export default function iterateThroughObject(reportWithIterator) {
  let completeName = '';
  for (let i = 0; i < reportWithIterator.length; i += 1) {
    completeName += reportWithIterator[i];
    if (i < reportWithIterator.length - 1) {
      completeName += ' | ';
    }
  }
  return completeName;
}
