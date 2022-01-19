function* createIterator() {
  let first = yield 1;
  let second = yield first + 2;
  yield second + 3;
}

let iterator = createIterator()

iterator.next();
iterator.next(4);
iterator.next(5);
iterator.next();