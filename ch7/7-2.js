export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [ ...this.#courses ];
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const hong = new Person('홍길동');
const course = new Course('리팩토링', true);
hong.addCourse(course);
hong.removeCourse(course, () => {
  console.log("해당 코스는 없습니다.")
});
hong.removeCourse(course, () => {
  console.log("해당 코스는 없습니다.")
});
console.log(hong.courses.length);
