import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  testForm = this.formBuilder.group({
    id: 1,                        // Id
    name: 'My Name',              // Name
    comments: 'My Comments',      // Comments
    color: 'Blue',                // Favorite Color
    season: 'Spring',             // Favorite Season
    hobbies: this.formBuilder.array([ // Hobbies
       false, true, true, false
    ])
  });

  colors  = ['Red', 'Blue', 'Yellow', 'Purple', 'Orange', 'Green'];
  seasons = ['Spring', 'Summer', 'Autumm', 'Winter'];
  hobbies = ['Reading', 'Writing', 'Painting', 'Walking'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    alert(
      JSON.stringify(this.testForm.value)
    );
  }

}
