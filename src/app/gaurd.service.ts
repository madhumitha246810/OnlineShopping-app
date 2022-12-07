import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable()
export class Gaurd implements CanActivate{
    canActivate():boolean {
    let f=localStorage.getItem('loginSuccessfully')?? ''
    
    return JSON.parse(f)
    }
    constructor(){}
   
}