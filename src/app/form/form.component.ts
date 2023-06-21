import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private fb:FormBuilder) { }

  profileForm= this.fb.group({
    firstName:[''],
    lastName:[''],
    address:this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    }),
    aliases: this.fb.array([this.fb.control('')])
    });
    get aliases(){
      return this.profileForm.get('aliases') as FormArray;
    };
    addAlias(){
      this.aliases.push(this.fb.control(''));
    }
    onSubmit(){
      if(this.profileForm.valid){
        console.warn(this.profileForm.value);
      }
    }
    updateProfile(){
      this.profileForm.patchValue({
        firstName:'Mustak',
        lastName:'Shaikh',
        address:{
          street:' unn Char rasta',
          city:'surat',
          state:'Gujarat',
          zip:'394210'
        },
      });
    }

  ngOnInit(): void {
  }

}
