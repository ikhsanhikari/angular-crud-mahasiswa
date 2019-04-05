import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { user } from './user';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar, MatDialog, MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { NotificationResultComponent } from '../notification-result/notification-result.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
  



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) 
  sort: MatSort;
  @ViewChild(MatPaginator) 
  paginator: MatPaginator;   
  
  constructor(private userService:UserService,private snackBar: MatSnackBar,private notif : NotificationResultComponent
    ,private confirmDialog: DialogConfirmComponent,private dialog:MatDialog) { }
    
  displayedColumns = ['position', 'name', 'address', 'birth','role','username','delete'];
  dataSource : any;
  


  users: user[];
  userSearch: user;
  ngOnInit() {
    this.getUser();
    
    
  }
  ngAfterViewInit(): void {
    
  }
  getUser(): void {
    this.userService.getUser()
        .subscribe((data:any)=>{
          this.dataSource = new MatTableDataSource(data.data);
          this.dataSource.sort = this.sort;  
          this.dataSource.paginator = this.paginator;
        });
  }
  getById(): void{
    this.userService.getUserById(this.searchForm.get('search').value)
      .subscribe((data:any)=>{
        if(data.itemsSize >0){
          this.dataSource = new MatTableDataSource(data.data);
        }else{
          this.openSnackBar("Tidak ditemukan", "close","red-snackbar") ;
        }
        
      }
    );
  }

  userForm = new FormGroup({
    name : new FormControl('',Validators.required),
    username : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    birth : new FormControl('',Validators.required),
  }) 
 
  searchForm = new FormGroup({
    search : new FormControl('',Validators.required)
  }) 
 save():void{
   let validity = this.userForm.dirty;
   if(validity){
     console.log('valid');
    this.userService.saveUser({
      position:7,
      name:this.userForm.get('name').value,
      address:this.userForm.get('address').value,
      birth:this.userForm.get('birth').value,
      username:this.userForm.get('username').value,
      role:this.userForm.get('role').value,
    })
    .subscribe((data:any)=>{
      this.getUser()
      this.notif.openDialog('success','Berhasil save data');
    });
   }else{
      console.log('error dirty');
   }
   
 } 

 deleteUser(element):void{
   this.dialog.open(DialogConfirmComponent,
    {
      data: { selectedData: element.position }
    }).afterClosed().subscribe((data:any)=>{
    if(data){
      this.userService.deleteUser(element.position).subscribe((data)=>{
        this.getUser();
        this.openSnackBar("Delete Data with Id "+element.position+"  Success", "close","red-snackbar") ;
       });
    }
  });
   
 }
  

  onselect(row:any){
    this.userForm.patchValue({
        name:row.name,
        role:row.role,
        username:row.username,
        address:row.address,
        birth:new Date(row.birth).toISOString().slice(0, -1),
        password: row.password
    });
  }
  openSnackBar(message: string, action: string,className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }
  
  onReset(){
    this.userForm.reset();
  }  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.userForm.controls[controlName].hasError(errorName);
  }
  
}



