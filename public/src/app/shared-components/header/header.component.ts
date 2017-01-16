import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { UserService } from '../../services/user.service'
import { ConstantService } from '../../services/constant.service';

import { Game } from '../../classes/game';

import { AccountDialogComponent } from '../../child-components/account-dialog/account-dialog.component';

import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private topics = ConstantService.TOPICS;
  private games: Game[];
  private subscription: Subscription;
  private currentUser
  constructor(private service: UserService, public dialog: MdDialog) {
    this.subscription = service.loggedUser$.subscribe(
      currentUser => {
        this.currentUser = currentUser;
      }
    )
    // this.rest.getGames({order: "random", paging: 6}).subscribe((res: any)=>this.renderGames(res))
  }

  ngOnInit() {

  }
  renderGames(games) {
    this.games = games['data'];
  }
  openDialog() {
    let dialogRef = this.dialog.open(AccountDialogComponent, {
      height: '300px',
      width: '600px'
    });
  }
}
