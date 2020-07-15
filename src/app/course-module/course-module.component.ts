import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.scss']
})
export class CourseModuleComponent implements OnInit {
  courseModule = null;
  teachers = [];
  topicCategories = [];
  form: FormGroup;
  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.courseModule = this.courseService.getCourseById(
      this.route.snapshot.paramMap.get('id')
    );
    this.teachers = this.courseService.teachers;
    this.topicCategories = this.courseService.topicCategories;

    this.form = this.formBuilder.group({
      courseName: new FormControl(this.courseModule.name, Validators.required),
      description: new FormControl(this.courseModule.description, Validators.required),
      teacher: new FormControl(this.courseModule.teacher, Validators.required),
      topics: this.formBuilder.array(
        []
      ),
    });

    this.courseModule.topics
        .forEach((topic) => {
          this.topics.push(
            new FormGroup({
              id: new FormControl(topic.id),
              topicName: new FormControl(topic.name, Validators.required),
              topicType: new FormControl(topic.type, Validators.required),
            })
          );
        });
    this.topics.controls.forEach(control => console.log(control.value));
  }

  addTopic() {
    this.topics.push(this.formBuilder.group({
      topicName: new FormControl('', Validators.required),
      topicType: new FormControl('', Validators.required),
    }));
  }

  removeTopic(topicIndex) {
    this.topics.removeAt(topicIndex);
  }

  onSubmit() {
    console.log(this.form.value, this.form.valid);
  }
}
