// https://en.wikipedia.org/wiki/Tower_of_Hanoi

function hanoiTowers(tower, start, temp, target) {
  if (tower > 0) {
    hanoiTowers(tower - 1, start, target, temp);
    console.log(`Move piece ${tower} from ${start} to ${target}`);
    hanoiTowers(tower - 1, temp, start, target);
  }
}

hanoiTowers(3, "A", "TEMP", "B");
