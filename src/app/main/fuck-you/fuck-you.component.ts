import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../../shared/shared.module";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fuck-you',
  standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
  templateUrl: './fuck-you.component.html',
  styleUrls: ['./fuck-you.component.scss']
})
export class FuckYouComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
