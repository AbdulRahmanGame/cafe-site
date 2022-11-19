function validate(){
    let Name = document.getElementById("Name").value;
    let Number = document.getElementById("Number").value;
    let Count = document.getElementById("Count").value;
     
    if(Count == "" ){
        alert("Enter How Many Guests ")
    }
    else{
    alert("Booked Successfully")
    }

    document.write("NAME : ");
    document.write( Name.fontcolor("brown"));
    document.write("<br>");
    document.write("MOBILE NUMBER : ");
    document.write(Number.fontcolor("brown"));
    document.write("<br>");
    document.write("NUMBER OF GUESTS : ");
    document.write(Count.fontcolor("brown"));
    document.write("<br>");
    }