import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../models/career';
import { CareerService } from '../career.service';


@Component({
  selector: 'app-career-list-false',
  templateUrl: './career-list-false.component.html',
})
export class CareerListFalseComponent implements OnInit {

  constructor(
    private careerService : CareerService,
  ) { }

  ngOnInit(): void {
    this.findAllFalse();
  }

  listCareerFalse : Career[] = [];
  private findAllFalse(){
    this.careerService.findAllFalse().subscribe((res)=>{
      res.forEach((value, index)=>{
        res[index].img = this.resizeImage(value.img);
      });
      this.listCareerFalse = res
    })
  }

  private resizeImage(link : any){
    let array = link.split('/');
    array.splice(6, 0, 'w_300, h_150, c_scale/');
    return array.join().replaceAll('', '/'); 
  }

  @Input() career : Career={
    id: '',
    name: '',
    duration: 0,
    img: '',
    code: '',
    status: false
  }

}
