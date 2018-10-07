"use strict";
{
    angular.module('app')
        .controller('MainController', function(){
            const $ctrl = this;
            
            $ctrl.familyMember = [ 
                {name: "John", relation: "father", age: 54},
                {name: 'Cheryl', relation: "mother", age: 55},
                {name: 'Charlotte', relation: "grandma", age: 72},
                {name: 'Jim', relation: "grandpa", age: 75}
            ];
        });
    }
    // $ctrl.me ={ name: "Amanda", number: '313-214-2414'};
    // $ctrl.band = [
    //   {artist:'G-Eazy', genre: 'rap'},
    //   {artist:'Luke Combs', genre: 'country'},
    //   {artist:'MGK', genre: 'rap'},
    //   {artist: 'LOCASH', genre:'country'}];

//     $ctrl.students = [
//         {name:"Ivan", present: false}, 
//         {name:'Amanda', present: false},
//         {name:'John', present: true},
//         {name: 'Cheryl', present: true}];

//       $ctrl.changeName = function () {
//           $ctrl.me.name = 'john';
//       };

//       $ctrl.addName = function () {
//           $ctrl.names.push($ctrl.newName);
//           $ctrl.newName = '';
//       };
//       $ctrl.togglePresent = function(student) {
//           student.present = !student.present;
//       };
// });