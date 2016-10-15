import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import * as io from 'socket.io-client';
import io from 'socket.io-client';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    public user;
    public serverTime;
    public message;
    public socket = null;
    public conf = {
        connectionServer: 'http://localhost:3000/',
    };

    constructor(public navCtrl: NavController) {
        this.socket = io(this.conf.connectionServer);
        this.socket.on('connect', () => {
            console.log('Connected');
        });
        this.socket.on('time', (timeString) => {
            this.serverTime = 'Server time: ' + timeString;
        });
        this.socket.on('message', (messageString) => {
            this.message = messageString;
        });
        // console.log(process.env.NODE_ENV);
        // const myArr = [
        //     {
        //         name: 'barney',
        //         age: 36,
        //         active: true,
        //     },
        //     {
        //         name: 'fred',
        //         age: 40,
        //         active: false,
        //     }];
        //
        // this.user = (_.filter(myArr, o => !o.active))[0];
        this.user = {
            name: 'barney',
            age: 36,
            active: true,
        };
    }

    public init() {
        console.log('test');
        this.serverTime = 'Server time: init';
        this.message = 'message init';

    }
}
