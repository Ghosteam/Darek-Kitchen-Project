import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import { ChefService } from '../../services/chef.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  chefs: any = [];
  menus: any = [];
  id : any = localStorage.getItem('id');
 menuForm = new FormGroup({
    ID_menu : new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    image: new FormControl(''),
   });

  constructor(private menuService: MenuService , private ChefService: ChefService ) { }
  values: any = {};
  filterTerm!: string;
  
  ngOnInit(): void {
    // this.getmenu()
    this.getMenuByChef(this.id)
  }

  // getmenu() {
  //   this.menuService.getmenu().subscribe((data) => {
  //     this.menus = data
  //   })
  // }
updateMenu() {
  this.menuService.updateMenu(this.menuForm.value.ID_menu, this.menuForm.value)
  .subscribe()
  Swal.fire({
    title:'Updated!',
    text:'Your Plate has been updated.',
    icon:'success',
    iconColor: '#DEB28F',
    background: "black",
    confirmButtonColor:'#DEB28F',
    width:'350px',
  })
  setTimeout(() => {
    location.reload()
  }, 1500);
  this.getMenuByChef(this.id)
}

getMenuByChef(id:any){
  this.menuService.getMenuBychef(id).subscribe((data) => {
    this.menus = data
  }) 
}

getvalues(data: any) {
  this.menuForm.setValue(data)
}
confirmBox(menu : any){
  Swal.fire({
    title: 'Are you sure want to remove?',
    text: 'You will not be able to recover this file!',
    width:'350px',
    iconColor: '#DEB28F',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    confirmButtonColor:'#DEB28F',
    background: "black",
    backdrop: "#deb38f93",
    cancelButtonText: 'No, keep it'
  }).then((result) => {      
    if (result.value) {
      this.menuService.deletemenu(menu.ID_menu)
      .subscribe() 
      Swal.fire({
        title:'Deleted!',
        text:'Your Plate has been deleted.',
        icon:'success',
        iconColor: '#DEB28F',
        background: "black",
        confirmButtonColor:'#DEB28F',
        width:'350px',
      })
      // this.getmenu()
      this.getMenuByChef(this.id)
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title:'Cancelled',
        text:'Your Plate is safe :)',
        icon:'error',
        width:'350px',
        iconColor: '#DEB28F',
        background: "black",
        confirmButtonColor:'#DEB28F',
      })
    }
  })
}

}