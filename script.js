    // console.log("hello");
    // console.log(true);
    // console.log("1234");

    //variable definiton
    // var name;
    // var name_surname;
    // var nameSurname;
    // var Let const
    // var x="Name";
    // console.log(x);
    // let y='surname';
    // console.log(y);
    // const email='asc@gmail.com'
    // console.log(email);
    // email='asc1@gmail.com'   - error -
    // console.log(email);
    // Variable Types
    //Primitive Types
    //-undefined
    // var x;
    // console.log(typeof x); //undefined
    //-null
    // var y=null;
    // console.log(typeof y);  //object
    //-string
    // var firstname='Aysu';
    // console.log(typeof firstname);
    //-number
    // var age=21;
    // console.log(typeof age);
    //-boolean
    // var online=true
    // console.log(typeof online);

    //Reference Types 
    //-array
    // var colors=['red','blue','pink','yellow']
  
    //-objects
    // var person={
    //     name:'Sam',
    //     age:25
    // }

    //-functions
    // var isOnline=function()
    // {
    //     return 0;
    // }
    // console.log(typeof isOnline);

    //Operators
    // var result;
    // const x = 60;
    // const y = 12;
    // let z = 13;
    // let t = 13;
    // //-Arithmetik operators
    // result= x + y;
    // result = x - y;
    // result = x * y;
    // result = x / y;
    // result = x % y;
    // result = x % z;
    // result = z++; //increases the number keeps it in memory
    // result = ++z; //increments the number and also prints it to the console
    // result = z--;
    // result = --z;
    // console.log(result);
    // //-Assignment Operators

    // result += x;
    // result -=x;
    // result /=x;
    // result %=x;

    // console.log(result);
    // //-Comparison Operators
    // result = x==y;   //true or false 
    // console.log(result);
    // result = z==t;
    // result = z===t; //compare typeof
    // result = x!=y;
    // result = z!=t;
    // result = z==t;
    // result = z < t;
    // result = z >= t;
    // result = z <= t;
    // console.log(result);
    // //-Logic Operators
    // //&& (and )
    // result = (x > t) && (y < z)
    // console.log(result);
    // // ||(or )
    // result = (x = t) || (x < z)

    // // !(not )
    // result =!(z > y)

// date object
// var d= new Date();
// console.log(d);
//    //set methods
//    d.setFullYear(2019);
//    d.setHours(16);
//    d.setMonth(5);
//    //get methods
//    console.log(d.getFullYear());
//    console.log(d.getHours());
//    console.log(d.getMonth()); //The 6th index corresponds to the month of July - January 0 index
//    console.log(d.getMinutes());
//    console.log(d.getSeconds());
//    console.log(d.getDay());
//    console.log(d.getDate());

// //String Methods
//     const Name="Aysu";
//     const surname="DELİAHMETOGLU";
//     var x = Name +' '+ surname;
//     console.log(x)
//     console.log(typeof(x));
// //string concat
//     x = Name.concat(' ',surname);
//     console.log(x)
// //string length
//     x=Name.length;
//     console.log(x)
// //string uppercase
//     x=Name.toUpperCase();
//     console.log(x)
// //string lowercase
//     x=surname.toLowerCase();
//     console.log(x)
// //string indexof
//     x=Name.indexOf('u');
//     console.log(x)
// //string substring
//     x = Name.substring(0,2);
//     console.log(x)
// //string slice
//     x=surname.slice(5);
//     console.log(x)
// //string replace
//     x =Name.replace('Aysu','Ayça');
//     console.log(Name);

//Number Methods

    var x = 10;
    x = '10';
    x = Number('10');
    console.log(x);
    console.log(typeof x);
    x =isNaN('10x');
    console.log(x);

    //parseInt parseFloat
        var number = 36.4323133
        number = parseInt(number);
        // number = parseFloat(number);
    // precision fixed
    var number = 36.4323133
    // number = number.toPrecision(4); //convert to string  before comma
    console.log(typeof number);
    number = number.toFixed(3); //after comma
    console.log( number);

    //Math Methods
    var p = 64;
    number = Math.PI;
    number = Math.round(5.4);
    number = Math.ceil(4.9);
    number = Math.floor(4.5);
    number = Math.sqrt(p);
    number = Math.pow(2,4);
    number = Math.abs(-234);
    number = Math.min(2,23,45,65,1,23,0,87,65,43); //0
    number = Math.max(32,43,23,1455,323,577,8,4); //1455

    number =Math.random(); //0-1
    number =Math.random()*100; //0-100





    console.log(number)







   
    