function tenurePercentage = (
    if (employee[i].reviewRating <= 2){
        return '0';
    }
    else if (employee[i].reviewRating == 3){
        return '.04';
    }
    else if (employee[i].reviewRating == 4){
        return '.06';
    }
    else if (employee[i].reviewRating == 5){
        return '.10';
    }
)

function tenureBonus = (
    if (employeeNumber.length > 4 ){
        return '.05';
    }
)

//totalBonus = bonusPercentage + tenureBonus
// totalCompensation = annualSalary * totalBonus