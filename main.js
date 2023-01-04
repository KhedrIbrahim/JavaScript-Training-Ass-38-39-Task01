let day = "Tuesday";
// You Need To Remove Spaces And Make First Letter Capital => Friday

switch (day){
    case "   friday  ":
    day = `${day.trim().charAt(0).toUpperCase()}${day.trim().substr(1)}`;
    break;

    case "Friday":
    case "Saturday":
    case "Sunday":
    day = "No Appointments Available";
    break;
    // Output => "No Appointments Available"

    case "Monday":
    case "Thursday":
    day = "From 10:00 AM To 5:00 PM";
    break;
    // Output => "From 10:00 AM To 5:00 PM"

    case "Tuesday":
    day = "From 10:00 AM To 6:00 PM";
    break;
    // Output => "From 10:00 AM To 6:00 PM"

    case "Wednesday":
    day = "From 10:00 AM To 7:00 PM";
    break;
    // Output => "From 10:00 AM To 7:00 PM"

    default :
    day = "Its Not A Valid Day";
    break;
    // Output => "Its Not A Valid Day"

}




console.log(day)
