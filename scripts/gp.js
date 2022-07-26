// alert("This grade point calculator works on a 5.0 scale and has a limited number of courses. And yes! Modifications would be much appreciated.")
const add = ()=> {
    const course = document.createElement("label");
    course.innerHTML = 'Course: '
    const unit = document.createElement("label");
    unit.innerHTML = 'Unit load: '
    const grade = document.createElement("label");
    grade.innerHTML = 'Grade: '
    const course1 = document.createElement("input");
    const unit1 = document.createElement("input");
    const grade1 = document.createElement("input");
    const linebrake = document.createElement('br');
    course1.setAttribute("class", 'inp3');
    unit1.setAttribute("class", 'unit');
    unit1.setAttribute("type", 'number');
    grade1.setAttribute("class", 'grade');
    let container = document.querySelector('#intel');
    course.appendChild(course1);
    unit.appendChild(unit1);
    grade.appendChild(grade1);
    container.appendChild(course);
    container.appendChild(unit);
    container.appendChild(grade);
    container.appendChild(linebrake);
}

const gp = ()=> {
    let arrU = [];
    let arrG = [];
    let Tgp = 0;
    let sumUnit = 0;
    let unit = document.querySelectorAll(".unit");
    let grade = document.querySelectorAll(".grade");
    for (let i = 0; i < unit.length; i++){
        arrU.push(unit[i].value*1);
        arrG.push(grade[i].value);
    }
    for(let n=0; n<arrG.length; n++){
        if(arrG[n] == "A"){
            arrG[n] = 5;
        } else if(arrG[n] == "B"){
            arrG[n] = 4;
        } else if(arrG[n] == "C"){
            arrG[n] = 3;
        } else if(arrG[n] == "D"){
            arrG[n] = 2;
        } else if(arrG[n] == "E"){
            arrG[n] = 1;
        } else if(arrG[n] == "F"){
            arrG[n] = 0;
        }
        else{
            alert("invalid grade")
            return
        }
    }
    for (let j=0; j<arrU.length; j++){
        sumUnit += arrU[j]
        Tgp += arrG[j] * arrU[j]
    }
    const CGPA = (Tgp/sumUnit).toFixed(2);
    alert(CGPA);
    if(CGPA <= 5.0 && CGPA >= 4.50){
        alert("Wow! Amazing first class student. Keep it up. Your CGPA is " + CGPA );
    } else if(CGPA < 4.50 && CGPA >= 3.50){
        alert("Second class upper. keeep it up. Your CGPA is " + CGPA );
    } else if(CGPA < 3.50 && CGPA >= 2.50){
        alert("don't relent, keep working. second class lower. Your CGPA is " + CGPA );
    } else if(CGPA < 2.50 && CGPA >= 1.50){
        alert("ouch! quite bad. third class. Your CGPA is " + CGPA ); 
    } else{
        alert("very bad! Put in more efforts " + CGPA );
    }
}
const clr = ()=> {
    let unit = document.querySelectorAll(".unit");
    let grade = document.querySelectorAll(".grade");
    let cs = document.querySelectorAll(".inp3");
    for (let i = 0; i < unit.length; i++){
        unit[i].value = '';
        grade[i].value = '';
        cs[i].value = '';
    }
    console.log(unit.value)
    console.log(grade.value)
    console.log(unit.length)
    document.getElementById("inp").value = '';
    document.getElementById("inp2").value = '';
}