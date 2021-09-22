import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup
  list = [];
  value;
  selectedId;
  filterKey: string = "label";

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      member: ['2']
    });

    setTimeout(() => {
      this.list = [{
        id: "1",
        customId: "1",
        label: 'Rahul - label anf,sadnfdsanf,dsanf,ndsa,fn,dsafn,sdnf,sdnfnsdf,ns,dfn,sdnf,nds,f'
      }, {
        id: "2",
        customId: "2",
        label: 'Sumit - label ,nf,sanf,n,fn,sanf,dnfn,mafdnanf,mans,fna,ffsanlanslnsalrenlkeanrkaekrn '
      }, {
        id: "3",
        customId: "3",
        label: 'Veera - label'
      }];
    }, 0)

    //this.value = "2";
    this.selectedId = "3";
  }
  constructor(private formBuilder: FormBuilder) { }

  submit() {
    alert(`Value: ${this.myForm.controls.member.value}`);
  }

  onValueChange(item) {
    console.log("values change event fired");
  }
  // update data
  updateData() {
    let newData = [{
      id: 1,
      customId: '_id_rahul', // 1
      label: 'Rahul - new data',
      display: 'Rahul new data'
    }, {
      id: 2,
      customId: '_id_sumit', //2,
      label: 'Sumit - new data',
      display: 'Sumit new data'
    }, {
      id: 3,
      customId: '_id_veera', //3
      label: 'Veera - new data',
      display: 'Veera'
    }];

    this.list = newData; //[...newData];

  }

}
