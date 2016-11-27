var pwdApps = angular.module("pwdSecApp", []);/*brackets are used to declare the module*/

pwdApps.controller("pwdSecurityCtrl", function ($scope) {
    /*Select two words */
     $scope.firstWord = "";
     $scope.secondWord = "";
     $scope.specialCharacters = ["!","#", "$", "%", "&","(", ")", "*", "+","-", "/", "?", "@", "]", "[", "{", "}"];
});
/*Create custom filters that substitute vowels*/
pwdApps.filter('substituteVowels', function () {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (c == 'a') { c = $scope.aSubChars; }
            if (c == 'e') { c = $scope.eSubChars; }
            if (c == 'i') { c = $scope.iSubChars; }
            if (c == 'o') { c = $scope.oSubChars; }
            if (c == 'u') { c = $scope.uSubChars; }
            txt += c;
        }
        return txt;
    }
    
});
/*Create a custom filter that capitalizes selected letters*/
/*capitalize first letter*/
pwdApps.filter('firstLetterUpperCase', function () {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i != 0) {
                c = c.toLowerCase();
            }
            if (i == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
/*Create a custom filter that capitalize second letter*/
pwdApps.filter('secondLetterUpperCase', function () {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i != 1) {
                c = c.toLowerCase();
            }
            if (i == 1) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
/*Create a custom filter that capitalize last letter*/
pwdApps.filter('lastLetterUpperCase', function () {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i != x.length - 1) {
                c = c.toLowerCase();
            }
            if (i == x.length - 1) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});


/*Create a custom service that sustitutes the vowels by selected chracters (special characters)*/
