import {Component, OnInit} from "@angular/core";
import {Course} from "./course";
import {CourseService} from "./course.service";

@Component({
  //selector: 'app-course-list',
  templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  public courses: Course[] = [];

  private _filter!: string;

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll();
    this.filteredCourses = this.courses
  }

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1);
  }

}
